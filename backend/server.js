const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const articleRoutes = require("./routes/articles");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/articles", articleRoutes);

app.get("/", (req, res) => {
  res.send("NOOR Backend Running");
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((err) => {
  console.log(err);
});

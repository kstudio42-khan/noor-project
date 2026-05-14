const express = require("express");
const router = express.Router();

const Article = require("../models/Article");

router.get("/", async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 });

    res.json(articles);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const article = new Article(req.body);

    const savedArticle = await article.save();

    res.status(201).json(savedArticle);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = router;

const { Router } = require('express');

const Post = require('../models/postsModel');

const router = Router();

router.get('/', async (req, res) => {
  const posts = await Post.getAll();

  return res.status(200).json(posts);
});

module.exports = router;
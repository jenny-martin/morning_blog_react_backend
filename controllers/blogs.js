const Blog = require('../models/blog');

module.exports = {
  getAllPosts,
  getOnePost,
  createPost,
  deletePost
};


function deletePost(req, res) {
  Blog.findByIdAndRemove(req.params.id).then(function(blog) {
    res.status(200).json(blog);
  });
}

function getOnePost(req, res) {
  Blog.findById(req.params.id).then(function(blog) {
    res.status(200).json(blog);
  });
}

function createPost(req, res) {
  Blog.create(req.body).then(function(blog) {
    res.status(201).json(blog);
  });
}

function getAllPosts(req, res) {
  Blog.find({}).then(function(blogs) {
    res.status(200).json(blogs);
  });
}

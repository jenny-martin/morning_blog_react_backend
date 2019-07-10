var express = require('express');
var router = express.Router();
var blogsCtrl = require('../controllers/blogs');


router.get('/blogs', blogsCtrl.getAllPosts);
router.get('/blogs/:id', blogsCtrl.getOnePost);
router.post('/blogs', blogsCtrl.createPost);
router.delete('/blogs/:id', blogsCtrl.deletePost);

module.exports = router;
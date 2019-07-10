var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String},
    post: {type: String}
});

module.exports = mongoose.model('Blog', blogSchema);
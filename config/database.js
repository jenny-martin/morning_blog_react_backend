var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/morning_blog_react_backend', {useNewUrlParser: true });

var db=mongoose.connection;

db.on('connected', function(){
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});


let blogs = [
    {title: 'My Day',
    author: 'Andrew',
    post: 'Ipsum reprehenderit id aliqua in deserunt. Esse sunt veniam culpa excepteur ex aliqua adipisicing irure occaecat enim ad consequat ullamco. Officia qui duis esse nisi cillum duis dolore et irure qui commodo quis. Incididunt eiusmod do fugiat voluptate voluptate eu proident consectetur aliquip reprehenderit sunt aliquip. Lorem occaecat velit velit quis ullamco culpa sunt anim enim reprehenderit enim exercitation sit qui. Ut sit voluptate eiusmod pariatur.'},
    {title: 'My Weekend',
    author: 'Jenny',
    post: 'Ipsum reprehenderit id aliqua in deserunt. Esse sunt veniam culpa excepteur ex aliqua adipisicing irure occaecat enim ad consequat ullamco.'}
]

module.exports = blogs;
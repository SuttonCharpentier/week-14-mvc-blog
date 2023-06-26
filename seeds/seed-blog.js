const { Blog } = require('../models');

const blogData = [
    {
        blog_title: "Node JS",
        blog_content: "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.",
        blog_created: "Sat Apr 01 2021 11:10:08 AM"
    },
];
const seedBlogData = () => Blog.bulkCreate(blogData);

module.exports = seedBlogData;
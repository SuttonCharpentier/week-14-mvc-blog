const router = require("express").Router();
const { Blog } = require("../../models");
const withAuth = require('../../utilis/auth');

// Create a new post.
router.post('/', withAuth, async (req, res) => {
    try {
      const newPost = await Blog.create({
        ...req.body,
        user_id: req.session.user_id,
        blog_id: req.params.blog_id
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
});

// Get all posts created by user
router.get("/",withAuth, async (req, res) => {
  try {
    const dbBLogData = await Blog.findAll({});
    const blogs = dbBLogData.map((blog) => blog.get({ plain: true }));
    // Serialize data so the template can read it
      res.render('home', {
        blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
   return  res.status(500).json(err);
  }
});

// Delete post by id
router.delete('/:id', async (req, res) => {
  try {
    const postData = await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!postData) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//  Update a post by id
router.put('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!blogData[0]) {
      res.status(404).json({ message: 'No blog found with that id!'});
      return;
    }
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
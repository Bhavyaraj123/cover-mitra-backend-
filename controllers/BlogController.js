const Blog = require('../models/blogModels');

// Create a new blog
const createBlog = async (req, res) => {
  console.log(req.body); // Log the request body to check the fields
  const newBlog = new Blog(req.body);
  try {
    const savedBlog = await newBlog.save();
    res.status(200).json({
      success: true,
      message: "Successfully added blog",
      data: savedBlog,
    });
  } catch (error) {
    console.error(error); // Log the error for more details
    res.status(500).json({
      success: false,
      message: "Something went wrong, please try again later",
      error: error.message,
    });
  }
};

// Update a blog
const updateBlog = async (req, res) => {
  const id = req.params.id;
  console.log(req.body); // Log the request body to check the fields
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, {
      $set: req.body,
    }, { new: true });

    res.status(200).json({
      success: true,
      message: "Successfully updated blog",
      data: updatedBlog,
    });
  } catch (error) {
    console.error(error); // Log the error for more details
    res.status(500).json({
      success: false,
      message: "Something went wrong, please try again later",
      error: error.message,
    });
  }
};

// Delete a blog
const deleteBlog = async (req, res) => {
  const id = req.params.id;
  try {
    await Blog.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully deleted blog",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong, try again",
    });
  }
};

// Get single blog
const getBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const blog = await Blog.findById(id);
    res.status(200).json({
      success: true,
      message: "Successfully found the blog",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong, try again",
    });
  }
};

// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json({
      success: true,
      message: "Successfully retrieved all blogs",
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong, try again",
    });
  }
};

module.exports = {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlog,
  getAllBlogs
};

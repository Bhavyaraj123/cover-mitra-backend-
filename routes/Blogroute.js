const express = require('express')
const router = express.Router()
const{createBlog,updateBlog,deleteBlog,getBlog,getAllBlogs} = require('../controllers/BlogController')
const { verifyAdmin } = require("../utils/authutils")

router.post('/',verifyAdmin,createBlog)
router.put('/update/:id',verifyAdmin,updateBlog)
router.delete('/delete/:id',verifyAdmin,deleteBlog)
router.get('/getallblogs',getAllBlogs)
router.get('/getoneblog/:id',getBlog)

module.exports = router 
const express = require('express');
const authUser = require('../middleware/authUser');
const { CreateBlogPost, getAllBlogPost, DeleteBlog } = require('../controller/BlogController');
const multer=require('multer')
// const Store = require('../config/multer')


// const upload =multer({storage:Store})
const upload = require('../config/multer')

const router = express.Router();

 router.post('/create-post', upload.single('file'),(req,res)=>{
    console.log(req.file)
    res.send('succceffuly upload')
})
router.route('/blog')
                .get(getAllBlogPost)
router.route('/create-blog')
                .post(authUser,upload.single('file'),CreateBlogPost);


router.delete('/blog/:id', authUser, DeleteBlog);

module.exports = router;

// !
// ...

// Add the following imports
// const { authUser } = require('../middleware/authUser');
// const upload = require('../config/multer');

// // ...

// // Update the create-blog route to use authUser middleware and upload.single
// router.route('/create-blog').post(authUser, upload.single('file'), CreateBlogPost);

// // ...


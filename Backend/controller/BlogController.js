const store = require('../config/multer')
const multer=require('multer')
const BlogModel = require('../models/BlogSchema')

// const upload =multer({storage:store})

const CreateBlogPost = async (req, res) => {
    const { title, subhead, content, author,productUrl } = req.body;
    const media = req.file;

    if (!title || !content || !subhead || !author || !media || !productUrl) {
        return res.status(400).json({ message: 'All input fields are required' });
    }

    try {
        const newBlogPost = await BlogModel.create({
            title,
            content,
            author,
            subhead,
            media: media.filename,
            productUrl
        });

        res.status(201).json({ message: 'Blog post created successfully', blogPost: newBlogPost });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating blog post', error: error.message });
    }
};

// module.exports = CreateBlogPost;
const getAllBlogPost = async(req,res)=>{
    try {
        const blog = await BlogModel.find()
        return res.status(200).json(blog);
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error fetching posts' }); 
    }
}

const singleFileUpload = async (req, res, next) => {
    try{
        const file = new SingleFile({
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2) // 0.00
        });
        await file.save();
        res.status(201).send('File Uploaded Successfully');
    }catch(error) {
        res.status(400).send(error.message);
    }
}


// const DeleteBlog = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const postToDelete = await BlogModel.findById(id);
//         if (!postToDelete) {
//             return res.status(404).json({ message: 'Post not found' });
//         }

//         if (!req.isAdmin) {
//             return res.status(403).json({ message: 'Only admin can delete posts' });
//         }

//         await BlogModel.findByIdAndDelete(id);

//         return res.status(200).json({ message: 'Post deleted successfully' });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: 'Error deleting post' });
//     }
// };
// const DeleteBlog = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const postToDelete = await BlogModel.findById(id);
//         if (!postToDelete) {
//             return res.status(404).json({ message: 'Post not found' });
//         }

//         // Check if the user is an admin
//         if (!req.isAdmin) {
//             return res.status(403).json({ message: 'Only admin can delete posts' });
//         }

//         await BlogModel.findByIdAndDelete(id);

//         return res.status(200).json({ message: 'Post deleted successfully' });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: 'Error deleting post' });
//     }
// };
const DeleteBlog = async (req, res) => {
    const { id } = req.params;

    try {
        const postToDelete = await BlogModel.findById(id);
        if (!postToDelete) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Check if the user is an admin
        if (!req.isAdmin) {
            return res.status(403).json({ message: 'Only admin can delete posts' });
        }

        await BlogModel.findByIdAndDelete(id);

        return res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error deleting post' });
    }
};




module.exports = { CreateBlogPost,getAllBlogPost,DeleteBlog}

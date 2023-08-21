const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        subhead: {
            type: String,
            required: true,
        },
        content: {
            type: String,  
            required: true,
            unique: true,
        },
        media: {
           type:String,
           required:true
        },
        productUrl: {
           type:String,
           required:true
        },
        author: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

const BlogModel = mongoose.model('Blog', BlogSchema);

module.exports = BlogModel;

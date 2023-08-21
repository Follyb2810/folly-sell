const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    address: {
        type: Object,
        required: true,
        properties: {
            street: {
                type: String,
                required: true,
                description: 'This field is required'
            },
            city: {
                type: String,
                required: true
            },
            country: {
                type: String,
                required: true
            }
        }
    }
});

const Sample = mongoose.model('Sample', MenuSchema);

module.exports = Sample;

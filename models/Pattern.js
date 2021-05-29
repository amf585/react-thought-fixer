const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User schema
const PatternSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    example: {
        type: String,
        required: true
    },
    keywords: {
        type: Array,
        required: true
    },
    actions: {
        type: Array,
        required: true
    }
});

module.exports = Pattern = mongoose.model('Pattern', PatternSchema);
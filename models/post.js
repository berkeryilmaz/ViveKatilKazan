var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
    title: { type: String, required: [true, 'title is required.'] },
    description:  { type: String, required: [true, 'description is required.'] },
    user:  { type: Object, required: [true, 'user is required.'] } 
});

module.exports = mongoose.model('Post', postSchema);
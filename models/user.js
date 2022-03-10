var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    username: { type: String, required: [true, 'username is required.'] },
    password: { type: String, required: [true, 'password is required.'], select: false },
    email: { type: String, required: [true, 'email is required.'], index: { unique: true } },
    role: { type: String },
    key: { type: String, required: [true, 'key is required.'], index: { unique: true }, select: false },
    secret: { type: String, required: [true, 'secret is required.'], index: true, select: false }

});

module.exports = mongoose.model('User', userSchema);
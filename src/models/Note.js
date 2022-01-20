const mongoose = require('mongoose');
const { Schema } = mongoose;
// mongoose.connect('mongodb://127.0.0.1:27017/notes');

const NoteSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
    user: { type: String }
});

module.exports = mongoose.model('Note', NoteSchema);
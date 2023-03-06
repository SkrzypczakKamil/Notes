const database = require('mongoose');

const noteSchema = new database.Schema({
    title: String,
    body: String
});

const notes = database.model('notes', noteSchema);

module.exports = notes;


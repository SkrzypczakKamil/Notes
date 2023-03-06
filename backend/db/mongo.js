
const database = require('mongoose');
const { database1 } = require('../config');
database.connect('mongodb://127.0.0.1:27017/notes-app');


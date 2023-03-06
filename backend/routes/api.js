const express = require('express');
const router = express.Router();

const noteActions = require('../actions/api/noteActions')
router.get('/', noteActions.saveNote);


//pobieranie notatek
router.get('/notes', noteActions.getAllNotes)
//pobranie notatki
router.get('/notes/:id', noteActions.getNote)
//zapis
router.post('/notes', noteActions.saveNote)
//edycja
router.put('/notes', noteActions.updateNote)
//usuwanie
router.delete('/notes', noteActions.deleteNote)

module.exports = router;
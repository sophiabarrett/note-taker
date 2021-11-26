const router = require('express').Router();
const { createNote, deleteNote } = require('../../lib/notes');
const notes = require('../../db/db.json');
const uniqid = require('uniqid');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    // add unique id
    req.body.id = uniqid();

    // add note to db
    const newNote = createNote(req.body, notes);
    res.json(newNote);
});

router.delete('/notes/:id', (req, res) => {
    console.log(`Got a DELETE request at /notes for note ${req.params.id}`);
    let updatedNotes = deleteNote(req.params.id, notes);
    res.json(updatedNotes);
});

module.exports = router;
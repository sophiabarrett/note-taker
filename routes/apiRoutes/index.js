const router = require('express').Router();
const createNote = require('../../lib/notes');
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

module.exports = router;
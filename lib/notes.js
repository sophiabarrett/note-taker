const fs = require('fs');
const path = require('path');

function createNote(body, notesArr) {
    const newNote = body;
    notesArr.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify( notesArr, null, 2 )
    );
    return newNote;
};

function deleteNote(noteID, notesArr) {
    const i = notesArr.findIndex(note => note.id === noteID);
    notesArr.splice(i, 1);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify( notesArr, null, 2 )
    );
    return notesArr;
};

module.exports = {
    createNote,
    deleteNote
};
const notes = require('../../db/models/note')

module.exports={
    saveNote(req,res){
        
        const newNote = new notes({
            title: 'test',
            body: 'testowa tresc2'
        });
        
        newNote.save().then(() => {
            console.log('notatka została zapisana');
        });

        res.send('Strona Główna działa');
    }
}
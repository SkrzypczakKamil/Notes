const notes = require('../../db/models/note')

class NoteActions{
    saveNote(req,res){
        //zapis
     //   const newNote = new notes({
     //       title: 'test',
     //       body: 'testowa tresc2'
     //   });
     //   
     //   newNote.save().then(() => {
     //       console.log('notatka została zapisana');
     //   });
        const title = req.body.title;
        const description = req.body.description;
        res.send('Notatka została pomyślnie stworzona. Tytuł:' + title + 'treść:'+ description);
    }

    getAllNotes(req,res){
      //  pobieranie notatek
        res.send(".API dziala!.");
    }

    getNote(req,res){
        //  pobieranie notatki
          res.send(".Info o notatce.");
      }



      updateNote(req,res){
        //  edycja notatki
          res.send(".Notatka zaktualizowana."); //500 
      }

      deleteNote(req,res){
        //  usuwanie notatki
          res.send(".Notatka usunięta. ID:"+id);
      }

    }

    module.exports = new NoteActions();
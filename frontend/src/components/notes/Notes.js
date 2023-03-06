import React from 'react';

class Notes extends React.Component{
    render(){
        return(
            <div>
                  <p> moje notatki </p>
        
                    <div className = "note" >
                        <p>Przykladowa notatka</p>

                    <div className = "description" >
                        <p>Przykladowa notatka bardzo przykladowa tresc</p>
                    </div>
                    
                    <button>edytuj</button>
                    <button className='delete'>usuń</button>

                    </div>

                        <div className = "note" >
                        <p>Przykladowa notatka</p>

                        <div className = "description" >
                        <p>Przykladowa notatka bardzo przykladowa tresc</p>
                    </div>
                    
                    <button>edytuj</button>
                    <button className='delete'>usuń</button>

    </div>
    </div>
        )
    }
}

export default Notes;
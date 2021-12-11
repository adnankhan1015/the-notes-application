import React from 'react';
import notes from '../assets/data';
import ListItem from '../Components/ListItem';
import {Link} from 'react-router-dom';


const NotesPage = () => {
    return (
        <div className="notes">
            <div className="note-header">
                <h2 className="notes-title"> &#9782; Notes </h2>
                <p className="notes-count">{notes.length} </p>
            </div>
            <div className="notes-list">
                {notes.map((note, index) =>  
                    <ListItem note={note} key={index}   /> 
                    )}
            </div>
        </div>
    )
}

export default NotesPage

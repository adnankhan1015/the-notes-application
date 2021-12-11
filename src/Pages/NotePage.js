import React from 'react';
import notes from '../assets/data';
import { ReactComponent as ArrowLeft } from '../assets/chevron-left.svg';
import {Link} from 'react-router-dom'

const NotePage = ({match}) => {

    let noteId = match.params.id;
    console.log('>>', noteId)
    let note = notes.find(note => note.id == noteId); 
    console.log('note>>>', note)
 
    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <Link to="/">
                        <ArrowLeft />
                    </Link>
                </h3>
            </div>
            <textarea value={note?.body}></textarea>
            {/* <h1>{note?.body}</h1> */}
        </div>
    )
}

export default NotePage

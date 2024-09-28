import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem';
export default function Notes() {
    let context = useContext(noteContext);
    return (
        <div className='row my-3'>
            <h3>Your Notes</h3>
            {
                context.notes.map((note) => 
                    {
                        return <NoteItem note={note}/>
                    })
            }
        </div>
    )
}

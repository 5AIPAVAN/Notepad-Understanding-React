import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem';
export default function Notes() {
    let context = useContext(noteContext);
    let {getNotes,notes} = context;

    useEffect(()=>{
        getNotes();
    },[])

    return (
        <div className='row my-3'>
            <h3>Your Notes</h3>
            {
                notes.map((note) => 
                    {
                        return <NoteItem key={note._id} note={note}/>
                    })
            }
        </div>
    )
}

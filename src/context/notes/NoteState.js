import React, { useState, useEffect } from "react";
import NoteContext from "./noteContext";


export default function NoteState(props) {

    let notesInitial=[
        {
          "_id": "66f442af7925690a54cb5876",
          "user": "66f426486934a2fc99ccd77f",
          "title": "Updated title check",
          "description": "Note description",
          "tag": "General",
          "date": "2024-09-25T17:04:47.716Z",
          "__v": 0
        },
        {
          "_id": "66f442c67925690a54cb5878",
          "user": "66f426486934a2fc99ccd77f",
          "title": "Note Title2",
          "description": "Note description22",
          "tag": "General",
          "date": "2024-09-25T17:05:10.915Z",
          "__v": 0
        },
        {
            "_id": "66f442af7925690a54cb5879",
            "user": "66f426486934a2fc99ccd77f",
            "title": "Updated title check",
            "description": "Note description",
            "tag": "General",
            "date": "2024-09-25T17:04:47.716Z",
            "__v": 0
          },
          {
            "_id": "66f442c67925690a54cb58799",
            "user": "66f426486934a2fc99ccd77f",
            "title": "Note Title2",
            "description": "Note description22",
            "tag": "General",
            "date": "2024-09-25T17:05:10.915Z",
            "__v": 0
          },
          {
            "_id": "66f442af7925690a54cb58788",
            "user": "66f426486934a2fc99ccd77f",
            "title": "Updated title check",
            "description": "Note description",
            "tag": "General",
            "date": "2024-09-25T17:04:47.716Z",
            "__v": 0
          },
          {
            "_id": "66f442c67925690a54cb587844",
            "user": "66f426486934a2fc99ccd77f",
            "title": "Note Title2",
            "description": "Note description22",
            "tag": "General",
            "date": "2024-09-25T17:05:10.915Z",
            "__v": 0
          },
          {
            "_id": "66f442af7925690a54cb58755",
            "user": "66f426486934a2fc99ccd77f",
            "title": "Updated title check",
            "description": "Note description",
            "tag": "General",
            "date": "2024-09-25T17:04:47.716Z",
            "__v": 0
          },
          {
            "_id": "66f442c67925690a54cb58782",
            "user": "66f426486934a2fc99ccd77f",
            "title": "Note Title2",
            "description": "Note description22",
            "tag": "General",
            "date": "2024-09-25T17:05:10.915Z",
            "__v": 0
          }
      ]

      const [notes,setNotes]= useState(notesInitial);
    // declare what ever normal variables,functions,state variables here 
    // you can you whatever decalred here by using this context (donot forget to mention in value={} to use)

 
    const addNote=(title,description,tag)=>{
        const newNote = {
            "_id": "66f442c67925690a54cb58782777",
            "user": "66f426486934a2fc99ccd77f",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-09-25T17:05:10.915Z",
            "__v": 0
          }

          setNotes(notes.concat(newNote));
    }

    
    const UpdateNote=()=>{
        
    }

    
    const deleteNote=(id)=>{
        console.log("Deleting not with id :"+id);
        const updatednotes = notes.filter((note)=>{
          return note._id!==id;
        })
        setNotes(updatednotes);
    }

    return (
        <NoteContext.Provider value={{addNote,notes,setNotes,deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

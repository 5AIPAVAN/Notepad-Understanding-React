import React, { useState } from "react";
import NoteContext from "./noteContext";


export default function NoteState(props) {

  const host = "http://localhost:5000";

  const [alert,setAlert]=useState({type:"",msg:""});
  const showAlert = (type,msg)=>{
    setAlert({type:type,msg:msg});
    setTimeout(()=>{
      setAlert({type:"",msg:""});
    },4000);
  }

  let notesInitial = [
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

  const [notes, setNotes] = useState(notesInitial);
  // declare what ever normal variables,functions,state variables here 
  // you can you whatever decalred here by using this context (donot forget to mention in value={} to use)


  //get all notes

  const getNotes = async() =>{

        // Api call to get all notes from database

        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZmNDI2NDg2OTM0YTJmYzk5Y2NkNzdmIn0sImlhdCI6MTcyNzMyNjk0Nn0.GpPQvGJITvZz_HddUXZ23nPIS2qk-WIJc9Okq0vTQic'
          },
        })
    
        // await is important here -> if not error 
        const allnotes = await response.json();
        
        setNotes(allnotes);

  }


  const addNote = async (title, description, tag) => {

    // Api call to add new note 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZmNDI2NDg2OTM0YTJmYzk5Y2NkNzdmIn0sImlhdCI6MTcyNzMyNjk0Nn0.GpPQvGJITvZz_HddUXZ23nPIS2qk-WIJc9Okq0vTQic'
      },
      body: JSON.stringify({ title, description, tag })
    })

    const added_note = await response.json();
    console.log('added',added_note);

    // client side update

    setNotes(notes.concat(added_note));
  }


  const UpdateNote = async (id, title, description, tag) => {

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZmNDI2NDg2OTM0YTJmYzk5Y2NkNzdmIn0sImlhdCI6MTcyNzMyNjk0Nn0.GpPQvGJITvZz_HddUXZ23nPIS2qk-WIJc9Okq0vTQic'
      },
      body: JSON.stringify({ title, description, tag })
    })

    const data_udpated = await response.json();

    // we need to create this to edit state -> we cannot directly update notes
    // make changes to this
    // set this as new state

    let newNotes = JSON.parse(JSON.stringify(notes));

    for (let i = 0; i < notes.length; i++) {
      const element = notes[i];
      if (element._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
        break;
      }
    }

    setNotes(newNotes);

    console.log(`element of id ${id} updated`);
  }


  const deleteNote = async (id) => {

    // Api Call to delete Node
    console.log("Deleting note with id :" + id+typeof(id));
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZmNDI2NDg2OTM0YTJmYzk5Y2NkNzdmIn0sImlhdCI6MTcyNzMyNjk0Nn0.GpPQvGJITvZz_HddUXZ23nPIS2qk-WIJc9Okq0vTQic'
      }
    })

    const data_updateddd = await response.json();
    console.log(data_updateddd);

    const updatednotes = notes.filter((note) => {
      return note._id !== id;
    })
    setNotes(updatednotes);
  }

  return (
    <NoteContext.Provider value={{ addNote, notes, UpdateNote, deleteNote , getNotes,alert,showAlert }}>
      {props.children}
    </NoteContext.Provider>
  )
}

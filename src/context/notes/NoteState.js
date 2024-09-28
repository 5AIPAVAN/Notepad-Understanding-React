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
          }
      ]

      const [notes,setNotes]= useState(notesInitial);
    // declare what ever normal variables,functions,state variables here 
    // you can you whatever decalred here by using this context (donot forget to mention in value={} to use)

    const [player, setPlayer] = useState({
        "name": "pandya",
        "team": "india"
    });

    const updatePlayer = () => {

        setTimeout(() => {
            setPlayer({
                "name": "updated pandya",
                "team": "updated india"
            })
        }, 2000)

    }

    return (
        <NoteContext.Provider value={{player,updatePlayer,notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

import React, { useState, useEffect } from "react";
import NoteContext from "./noteContext";


export default function NoteState(props) {

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
        <NoteContext.Provider value={{player,updatePlayer}}>
            {props.children}
        </NoteContext.Provider>
    )
}

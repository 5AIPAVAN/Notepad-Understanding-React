import React from "react";
import NoteContext from "./noteContext";


export default function NoteState(props) {

    // declare what ever normal variables,functions,state variables here 
    // you can you whatever decalred here by using this context (donot forget to mention in value={} to use)

    const teststate={
        "name":"pandya",
        "team":"india"
    }

  return (
    <NoteContext.Provider value={teststate}>
      {props.children}
    </NoteContext.Provider>
  )
}

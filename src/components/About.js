import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext'

export default function About() { 

  const teststate = useContext(noteContext);

  return (
    <div>
      Details that came from contextApi - name:{teststate.name} and team:{teststate.team}
    </div>
  )
}

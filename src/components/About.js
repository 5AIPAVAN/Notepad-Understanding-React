import React,{useContext,useEffect} from 'react'
import noteContext from '../context/notes/noteContext'

export default function About() { 

  // all variables,functions gets stored in newname variable
  const newname = useContext(noteContext);

  useEffect(()=>{  // run use effect onece(i.e:- []) to check updatePlayer funciton from  contextApi working or not
   newname.updatePlayer();
  },[])

  return (
    <div>
      Details that came from contextApi - name:{newname.player.name} and team:{newname.player.team}
    </div>
  )
}

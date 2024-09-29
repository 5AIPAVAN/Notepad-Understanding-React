import React, { useContext, useEffect,useRef,useState } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem';
export default function Notes() {
    let context = useContext(noteContext);
    let {getNotes,notes,UpdateNote} = context;
    const ref = useRef(null);
    const closeref = useRef(null);

    useEffect(()=>{
        getNotes();
    },[]);

    console.log('Re rendered notes component -> check')


    const [note,setNote] = useState({id:'',etitle:'',edescription:'',etags:''});

    // remember the way we handled on change 
    const handleChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault(); // prevents the default nature of the button -> i.e page refresh
        UpdateNote(note.id,note.etitle,note.edescription,note.etags);
        console.log('updateddd');
        setNote({id:'',etitle:'',edescription:'',etags:''});
        closeref.current.click();
    }

    const updateNote = (NoteFromChild) =>{
        ref.current.click();
        console.log("trying to udpate Note.....");
        setNote({id:NoteFromChild._id,etitle:NoteFromChild.title,edescription:NoteFromChild.description,etags:NoteFromChild.tag});

    }

    return (
    <>

        <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>
        
    
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              <form >
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" name="etitle" value={note.etitle} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}  minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" name="edescription" value={note.edescription} id="exampleInputPassword1" onChange={handleChange} minLength={5} required  />
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Tags</label>
                    <input type="text" className="form-control" name="etags" value={note.etags} id="exampleInputPassword1" onChange={handleChange}  />
                </div>
            </form>
              </div>
              <div className="modal-footer">
                <button type="button" ref={closeref} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button  disabled={note.etitle.length<3 || note.edescription.length<5}  type="button" onClick={handleSubmit} className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        <div className='row my-3'>
            <h3>Your Notes</h3>
            <div className="container"> minLength={5} required
            {notes.length===0 && 'No Notes To Display'}
            </div>
            {
                notes.map((note) => 
                    {
                        return <NoteItem key={note._id} updateNote={updateNote} note={note}/>
                    })
            }
        </div>
        </>
    )
}

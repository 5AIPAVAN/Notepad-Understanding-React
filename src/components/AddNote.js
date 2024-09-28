import React, { useContext, useState } from 'react'
import Notes from './Notes'
import noteContext from '../context/notes/noteContext';
export default function AddNote() {

    let contextt = useContext(noteContext);

    const [notee,setNotee] = useState({title:'',description:'',tags:''});

    // remember the way we handled on change 
    const handleChange=(e)=>{
        setNotee({...notee,[e.target.name]:e.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault(); // prevents the default nature of the button -> i.e page refresh
        contextt.addNote(notee.title,notee.description,notee.tags);
        setNotee({title:'',description:'',tags:''});
    }


    return (
        <div className='container my-3'>
            <h2>Add new note</h2>
            <form >
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" name="title" value={notee.title} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" name="description" value={notee.description} id="exampleInputPassword1" onChange={handleChange}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Tags</label>
                    <input type="text" className="form-control" name="tags" value={notee.tags} id="exampleInputPassword1" onChange={handleChange}  />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>

            <Notes />
        </div>
    )
}

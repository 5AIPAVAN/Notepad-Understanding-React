import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext';

export default function NoteItem(props) {
    const note = props.note;
    const {updateNote} = props;

    const contextt = useContext(noteContext);
    const {deleteNote,showAlert} = contextt;

    return (
        <div className="col-md-3">
        <div className="card my-3">
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <h5 className="card-title">{note.title}</h5>
                    <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id);showAlert("warning","Note deleted successfully")}} ></i>
                    <i className="far fa-edit mx-2" onClick={()=>updateNote(note)} ></i>
                </div>
                <p className="card-text">{note.description}</p>

            </div>
        </div>
    </div>
    )
}

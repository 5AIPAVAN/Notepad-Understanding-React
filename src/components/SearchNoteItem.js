import React from 'react'

export default function SearchNoteItem(props) {
    const note = props.note;

    return (
        <div className="col-md-3">
        <div className="card my-3">
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <h5 className="card-title">{note.title}</h5>
                </div>
                <p className="card-text">{note.description}</p>
                <p className="card-text">{note.tag}</p>

            </div>
        </div>
    </div>
    )
}

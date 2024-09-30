import React from 'react'

export default function SearchNoteItem(props) {
    const {note,noteRef,isFocused} = props;

    return (
        <div className="col-md-3" ref={noteRef}      tabIndex={-1}
        style={{
            backgroundColor: isFocused ? 'green' : '',  // Apply green border if focused
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
            transition: 'border 0.3s ease'  // Smooth transition for the border
        }}>
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

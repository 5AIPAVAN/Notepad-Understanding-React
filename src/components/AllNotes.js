import React, { useEffect, useContext, useState,useRef } from 'react'
import noteContext from '../context/notes/noteContext'
import SearchNoteItem from './SearchNoteItem';

export default function AllNotes() {
    let contextt = useContext(noteContext);
    const { allnotes, getAllNotes } = contextt;
    const noteRefs = useRef({});  // Object to store refs for each note
    const [focusedNoteId, setFocusedNoteId] = useState(null);  // State to track the focused note

    useEffect(() => {
        getAllNotes();
    }, [])
 
    const [search,setSearch] = useState("");

    const handleChange =(e)=>{
        setSearch(e.target.value);
    }

    const handleScrollToNote = (id) => {
        if (noteRefs.current[id]) {
            noteRefs.current[id].scrollIntoView({ behavior: 'smooth' });  // Scroll to the note
            noteRefs.current[id].focus();  // Optional: Focus on the note
            setFocusedNoteId(id);  // Set the focused note ID to apply the green border
      
        }
    };

      // Filter the data based on the search term
  const filteredData = allnotes.filter(item =>
    (item.title.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase()) || item.tag.toLowerCase().includes(search.toLowerCase()) )
  );

  // check how noteRefs store values of dom inside it 
  useEffect(()=>console.log(noteRefs),[noteRefs]);

 

    return (
        <div className='row my-3'>
            <h3>All Public Notes</h3>
            <div className="container">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Search public notes here</label>
                    <input type="email" value={search} onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
            </div>

                  {/* ID List for Clicking */}
                  <div className="container my-3 ">
                <h4>Click on a Note ID to Scroll to the Note</h4>
                <ul className="d-flex my-5 flex-wrap">
                    {filteredData.map((note) => (
                        <div key={note._id}  className='mx-3 my-3'>
                            <button className="btn btn-primary"  type="button" onClick={() => handleScrollToNote(note._id)}>
                                {note._id.substring(note._id.length-2,note._id.length)}
                            </button>
                        </div>
                    ))}
                </ul>
            </div>

            {
                filteredData.length > 0 ?  (filteredData.map((note) => {
                    return      <SearchNoteItem
                    key={note._id}
                    note={note}
                    isFocused={note._id === focusedNoteId}
                    noteRef={(el) => noteRefs.current[note._id] = el}  // Pass the ref to SearchNoteItem
                />
                })) : (<h4>No Notes Found</h4>)
            }
        </div>
    )
}

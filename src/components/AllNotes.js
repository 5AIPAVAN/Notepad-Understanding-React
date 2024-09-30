import React, { useEffect, useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import SearchNoteItem from './SearchNoteItem';

export default function AllNotes() {
    let contextt = useContext(noteContext);
    const { allnotes, getAllNotes } = contextt;

    useEffect(() => {
        getAllNotes();
    }, [])
 
    const [search,setSearch] = useState("");

    const handleChange =(e)=>{
        setSearch(e.target.value);
    }

      // Filter the data based on the search term
  const filteredData = allnotes.filter(item =>
    (item.title.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase()) || item.tag.toLowerCase().includes(search.toLowerCase()) )
  );


    return (
        <div className='row my-3'>
            <h3>All Public Notes</h3>
            <div className="container">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Search public notes here</label>
                    <input type="email" value={search} onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
            </div>

            {
                filteredData.length > 0 ?  (filteredData.map((note) => {
                    return <SearchNoteItem key={note._id} note={note} />
                })) : (<h4>No Notes Found</h4>)
            }
        </div>
    )
}

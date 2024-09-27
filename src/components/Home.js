import React from 'react'

export default function Home() {
  return (
    <div className='container my-3'>
      <h2>Add new note</h2>
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Title</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Description</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Tags</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

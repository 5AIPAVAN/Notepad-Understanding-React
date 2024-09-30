import React, { useContext, useEffect } from 'react'
import { Link,useLocation, useNavigate } from 'react-router-dom'
import Alert from './Alert'
import noteContext from '../context/notes/noteContext';

export default function Navbar() {

  let location = useLocation();
  const navigate = useNavigate();

  const dataa = useContext(noteContext);
  const {alert} = dataa;

  // runs only when location value is chnaged
  useEffect(()=>{
    console.log(location.pathname)

  },[location]);

  const handleLogout = ()=>{
    localStorage.removeItem("token");
    navigate('/login');
  }

  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Notepad</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/'? "active" : ""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/about'? "active" : ""}`} to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/allnotes'? "active" : ""}`} to="/allnotes">All Notes</Link>
        </li>
     </ul>

     {!localStorage.getItem('token') ? <div>
     <Link to="/login" type="button" class="btn btn-primary mx-2">Login</Link>
     <Link to="/signup" type="button" class="btn btn-primary mx-2">Signup</Link>
     </div> :  <Link to="/login" type="button" onClick={handleLogout} class="btn btn-primary mx-2">Log out</Link>}

    </div>
  </div>
</nav>
{alert.msg!=="" && <Alert/>}
    </>
  )
}

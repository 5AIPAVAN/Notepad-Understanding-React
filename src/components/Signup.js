import React, { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/notes/noteContext';

export default function Signup() {

    const host = "http://localhost:5000";
    const [details, setDetails] = useState({ name:"",email: "", password: "" });
    const navigate = useNavigate();

    const contextt = useContext(noteContext);

    const handleChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(details.password);
        
    // Api call to login
    const response = await fetch(`${host}/api/auth/createuser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name:details.name,email:details.email,password:details.password })
      })

      const response_received = await response.json();

      if(response_received.success){
        localStorage.setItem('token',response_received.authtoken);
        const token = localStorage.getItem('token');
        console.log(token);
        contextt.showAlert("success","Bhai you created A new account :-)")
        navigate('/')   
     }else{
        alert('Something went wrong with entered details');
      }

    }

    return (
        <div className='container my-3'>
            <h2>Login to notepad</h2>
            <form  onSubmit={handleSubmit} >
            <div className="mb-3">
                    <label htmlFor="title" className="form-label">Name</label>
                    <input type="test" className="form-control" name="name" value={details.name} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={details.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} minLength={3} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={details.password} id="exampleInputPassword1" onChange={handleChange} minLength={5} required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>

        </div>
    )
}

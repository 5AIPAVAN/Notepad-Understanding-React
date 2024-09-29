import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const host = "http://localhost:5000";
    const [details, setDetails] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(details.password);
        
    // Api call to login
    const response = await fetch(`${host}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email:details.email,password:details.password })
      })

      const response_received = await response.json();
      if(response_received.success){
        localStorage.setItem('token',response_received.authtoken);
        const token = localStorage.getItem('token');
        console.log(token);
        navigate('/')   
     }else{
        alert('Incorrect Credentials');
      }

    }

    return (
        <div className='container my-3'>
            <h2>Login to notepad</h2>
            <form  onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={details.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={details.password} id="exampleInputPassword1" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>

        </div>
    )
}

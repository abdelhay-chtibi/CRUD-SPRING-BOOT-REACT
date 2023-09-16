import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddUser() {
  let navigate = useNavigate()
  const [user, setUser] = useState({ name: "", username: "", email: "" })
  const { name, username, email } = user
  const onInputchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
    console.log("www"+[e.target.name])
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    // Vider les champs du formulaire
    //setUser({ name: '', username: '', email: '' });
    await axios.post("http://localhost:8080/user", user)
    navigate("/")

  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Register User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='md-3'>
              <label htmlFor='Name' className='form-label'>Name</label>
              <input type={"text"} className='form-control' placeholder='Enter your name' name="name" value={name} onChange={(e) => onInputchange(e)} />
            </div>
            <div className='md-3'>
              <label htmlFor='username' className='form-label'>Username</label>
              <input type="text" className='form-control' placeholder='Enter your Username' name="username" value={username}
                onChange={(e) => onInputchange(e)} />
            </div>
            <div className='md-3'>
              <label htmlFor='email' className='form-label'>Email</label>
              <input type={"text"} className='form-control' placeholder='Enter your email' name="email" value={email} onChange={(e) => onInputchange(e)} />
            </div>
            <button type='submit' className='btn btn-outline-primary m-3'>Submit</button>
            <Link className='btn btn-outline-danger m-3' to="/" >Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

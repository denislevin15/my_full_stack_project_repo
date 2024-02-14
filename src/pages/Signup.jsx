import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repassword, setRePassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
      if (password === repassword) {
        const userRole = "regularUser";
        try {
          const result = await axios.post("http://localhost:3001/register", { name, email, password, userRole })
          if (result.data === "Existed") {
            alert("The user already exists")
            setEmail("");
          } else navigate("/login")
        } catch (err) {alert(err.name+":"+err.message) }
      }
      else {
        alert("Confirm the password correctly!")
      }
  }


  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2><center>Sign Up</center></h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input type="text"
              placeholder='Enter Name'
              autoComplete='off'
              name='name'
              value={name}
              className='form-control rounded-0'
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input type="text"
              placeholder='Enter Email'
              autoComplete='off'
              name='email'
              value={email}
              className='form-control rounded-0'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input type="password"
              placeholder='Enter Password'
              name='password'
              value={password}
              className='form-control rounded-0'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="repassword">
              <strong>Password</strong>
            </label>
            <input type="password"
              placeholder='Enter Confirm Password'
              name='repassword'
              value={repassword}
              className='form-control rounded-0'
              onChange={(e) => setRePassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Sign Up
          </button>
        </form>
        <p>Already have an account?</p>
        <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
          Login
        </Link>

      </div>
    </div>
  );
}

export default Signup;
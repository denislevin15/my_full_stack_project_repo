import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const { isLoggedIn, setIsLoggedIn, setUserRole } = useAuth()

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/exercise")
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      const result = await axios.post("http://localhost:3001/login", { email, password })
      if (result.data.success === "Success") {
        const userRole = result.data.userRole;
        const userId = result.data.userId;
        localStorage.setItem('isLoggedIn', userId);
        localStorage.setItem('userRole', userRole);
        setUserRole(userRole)
        setIsLoggedIn(userId)
        navigate("/exercise")
      } else {
        navigate("/register")
        alert("You are not registered to this service")
      }
    } catch(err){
      alert(err.name + ":" + err.message);
    }
  }

  

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2><center>Login</center></h2>
        <form onSubmit={handleSubmit}>

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
            <label htmlFor="email">
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
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
        </form>
        <p>Don't have an account?</p>
        <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
          Sign Up
        </Link>

      </div>
    </div>
  );
}

export default Login;
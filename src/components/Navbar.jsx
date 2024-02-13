import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { navItems } from '../utils/constant';

const Navbar = () => {

  const navigate = useNavigate()
  const { isLoggedIn, setIsLoggedIn, setUserRole, userRole } = useAuth()
  

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login")
    }
  }, [isLoggedIn, navigate])

  const onSignOut = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    localStorage.removeItem("userRole");
    setUserRole("");
  }
  
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="/home">Home</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          {
            navItems.filter((number) => {
              return number.role === userRole
            }).map((navItem, index) => {
              return (
                <li class="nav-item" key={index}>
                  <Link class="nav-link" to={navItem.url}>{navItem.item}</Link>
                </li>
              )
            })         
          }
        </ul>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={onSignOut}>Sign Out</button>
      </div>
    </nav>
  )
}
export default Navbar;
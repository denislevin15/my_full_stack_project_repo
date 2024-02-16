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
    setIsLoggedIn("");
    localStorage.removeItem("userRole");
    setUserRole("");
  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
      <div className='d-flex'>
        <Link className="navbar-brand" to="/exercise">Home</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {
              navItems.filter((number) => {
                return number.role === userRole
              }).map((navItem, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <Link className="nav-link" to={navItem.url}>{navItem.item}</Link>
                  </li>
                )
              })         
            }
          </ul>
        </div>
      </div>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={onSignOut}>Sign Out</button>
    </nav>
  )
}
export default Navbar;
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
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/home">Home</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

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
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={onSignOut}>Sign Out</button>
      </div>
    </nav>
  )
}
export default Navbar;
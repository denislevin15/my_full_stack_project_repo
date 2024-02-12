import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";


function Home() {
  const navigate = useNavigate()

  const { isLoggedIn, setIsLoggedIn } = useAuth()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login")
    }
  }, [isLoggedIn, navigate])

  const onSignOut = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  }

  return (
    <center>
      <h1>
        This is Home Component
      </h1>
      <button onClick={onSignOut}>signout</button>
    </center>
  )
}

export default Home;
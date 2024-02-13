import React from "react";
import { Route, Routes } from 'react-router-dom'
import Navbar from "../components/Navbar";
import AddExercise from './regularUser'
import AddUser from './userManager'
import { ExerciseList, UserList } from './admin'

function Home() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>hello</div>} />
        <Route path='/addexercise' element={<AddExercise />} />
        <Route path='/adduser' element={<AddUser />} />
        <Route path='/exerciselist' element={<ExerciseList />} />
        <Route path='/userlist' element={<UserList />} />
      </Routes>
      </>
  )
}

export default Home;
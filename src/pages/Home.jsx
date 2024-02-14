import React from "react";
import { Route, Routes } from 'react-router-dom'
import Navbar from "../components/Navbar";
import AddExercise from './regularUser'
import AddUser from './userManager'
import { ExerciseList, UserList } from './admin'
import ExerciseListForOneUser from "../components/ExerciseListForOneUser";

function Home() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ExerciseListForOneUser />} />
        <Route path='/addexercise' element={<AddExercise />} />
        <Route path='/adduser' element={<AddUser />} />
        <Route path='/exerciselist' element={<ExerciseList />} />
        <Route path='/userlist' element={<UserList />} />
      </Routes>
      </>
  )
}

export default Home;
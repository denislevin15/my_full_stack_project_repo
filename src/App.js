import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import DetailExerciseForOneUser from './components/DetailExerciseForOneUser'


import { AuthProvider } from './context/AuthContext'

const App = () => {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path="/exercise/:exerciseId/detail" element={<DetailExerciseForOneUser />} />
          <Route path='/exercise/*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
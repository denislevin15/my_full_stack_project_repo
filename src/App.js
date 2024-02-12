import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
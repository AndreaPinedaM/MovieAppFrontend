import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from "./pages/Home/Home"
import Login from "../src/pages/Login/Login"
import Signup from "../src/pages/Sign up/Signup"
import CardForm from '../src/pages/CardForm'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/newmovie' element={<CardForm />}></Route>
        </Routes>
      </Router>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App

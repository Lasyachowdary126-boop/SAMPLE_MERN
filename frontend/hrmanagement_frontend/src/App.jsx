import { useState } from 'react'

// import './App.css'
import Header_app from './components/Header_app'
import footer from './components/Footer_app'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import About from './pages/about'
import Contact from './pages/contact'
import AdminLogin from './pages/AdminLogin'
import AdminHome from './pages/AdminHome'
import {Routes,Route} from 'react-router-dom'

import Register from './pages/Register'
import Login_page from './pages/Login_page';

import HrHome from './pages/HrHome'
import EmpHome from './pages/EmpHome'

function App() {
    return (
    <div>
    <Header_app />
       <Routes>
          <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login_page></Login_page>}></Route>
      <Route path="/emphome" element={<EmpHome></EmpHome>}></Route>
      <Route path="/hrhome" element={<HrHome></HrHome>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
<Route path="/adminhome" element={<AdminHome></AdminHome>}></Route>
<Route path="/adminlogin" element={<AdminLogin></AdminLogin>}></Route>

       </Routes>
    <footer/>
    </div>
  )
}

export default App
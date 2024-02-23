import { useState } from 'react'
import './App.css'
import {Routes, Route, Link} from "react-router-dom"
import Blue from "./conponents/Blue"
import Red from "./conponents/Red"
import Home from "./conponents/Home"
function App() {

  return (
    <>
     <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
        <Link to="/red">Red</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/">Home</Link>
        </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blue" element={<Blue/>} />
          <Route path="/red" element={<Red/>} />
        </Routes>
</div>
      </div>
    </>
  )
}

export default App

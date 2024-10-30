
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import { useState } from 'react'

function App() {


  return (
    <>
      <NavBar ></NavBar>
      <Outlet ></Outlet>
    </>
  )
}

export default App

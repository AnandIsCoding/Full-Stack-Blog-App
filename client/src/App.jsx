import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Blog from './pages/Blog'
import Admin from './pages/Admin'

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/blog/:id' element={ <Blog/>} />
      <Route path='/admin' element={ <Admin/>} />
    </Routes>
  )
}

export default App
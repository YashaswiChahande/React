import { useState } from 'react'
import React from 'react'
import Home from './components/Home'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Details from './components/Details'
import Create from './components/Create'
import Edit from './components/Edit'

const App = () => {

  const { search, pathname } = useLocation();

  console.log(search, pathname)
  return (
    <div className='h-screen w-screen flex'>

      { (pathname != '/' || search.length > 0) && (
        <Link to= "/" className=' py-1 px-2 absolute border rounded mb-3 border-red-300 text-red-300 left-[17%] top-[3%] '>
        Home
        </Link>
      )}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
        

    </div>
  )
}

export default App
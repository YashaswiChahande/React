import React  from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import Show from './components/Show'

const App = () => {

  return (
    <div className='pt-[5%] pl-[5%]'>

      <nav className=' flex justify-center gap-10'>
        <Link to="/" >Home</Link>
        <Link to="/show" >Show</Link>
        <Link to="/services" >Services</Link>
      </nav>

      <Routes>

        <Route path = "/" element = { <Home />}  ></Route>
        <Route path = "/show" element = { <Show />}  ></Route>

        <Route path='/services' element = { <Services/> }></Route>

      </Routes>
    </div>
  )
}

export default App
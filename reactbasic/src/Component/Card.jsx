import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Card() {

  const [val, setVal] = useState(false);

  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
      <div className=' relative w-60 h-32 rounded-md flex overflow-hidden '>
        <img className= {`shrink-0 transition-transform duration-700 ease-in-out ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`} src='https://images.unsplash.com/photo-1735149050406-76f49ced66e1?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />

        <img className={`shrink-0 transition-transform duration-700 ease-in-out ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`} src='https://images.unsplash.com/photo-1735124283566-5f5707a40808?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        
        <span onClick={() => setVal( () => !val )} className='w-8 h-8 flex items-center justify-center rounded-full absolute bottom-[0%] bg-[#dadada7b] left-1/2 -translate-x-[50%] -translate-y-[50%]' >
        <FaArrowRightLong size={".7em"} />
        </span>
        
      </div>
      
    </div>
  )
}

export default Card

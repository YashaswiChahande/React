/* eslint-disable react/jsx-key */
import React from 'react'

function Card() {
    const data = [
        {image: 'https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1196&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' , name: "Amazon basics", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, nunc eu tristique semper."},
        {image: 'https://plus.unsplash.com/premium_photo-1668418188837-d40b734ed6d2?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' , name: "Daily Objects", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies."},
        {image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' , name: "Apple", description: "Lorem ipsum dolor sit amet."}
        
    ]
  return (
    <div className='w-full h-screen flex items-center justify-center gap-10  bg-zinc-200'>
      {data.map((elem, index) => (
        <div key = {index} className='w-52 bg-zinc-100 rounded-md overflow-hidden'>
        <div className='w-full h-32 bg-zinc-300'>
            <img className='w-full h-full object-cover' src={elem.image}/>
        </div>
        <div className='w-full px-3 py-4'>
            <h2 className='font-semibold'>{elem.name}</h2>
            <p className='text-xs mt-5'>
            {elem.description}
            </p>
        
        </div>
      </div>
      ))}
    </div>
  )
}

export default Card

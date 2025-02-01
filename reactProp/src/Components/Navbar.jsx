import React from 'react'

function Navbar() {
  return (
    <div className='w-full px-4 py-3 flex justify-between items-center'>
      <h3>Orange</h3>
      <div className='flex p-2 bg-orange-600 text-white rounded-md text-sm gap-3'>
        <h3>Favorites</h3>
        <h4>2</h4>
      </div>
    </div>
  )
}

export default Navbar

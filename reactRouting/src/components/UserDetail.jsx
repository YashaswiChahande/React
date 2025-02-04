import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetail = () => {

    const { name } = useParams();
    const navigate = useNavigate();

    const GoBackHandler = () => {
        navigate("/user");
        // navigate(-1);
    }

  return (
    <div className= ' m-auto mt-10'>
        
    <h1 className='text-red-200 text-5xl mb-2'>User Detail</h1>

    <h1 className='text-3xl mt-3'>hiii! {name}</h1>

    <button onClick={GoBackHandler} className=' mt-5 px-3 py-2 bg-zinc-200 text-white'>
        Go Back
    </button>

</div>
  )
}

export default UserDetail
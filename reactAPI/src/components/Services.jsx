import React, { useEffect, useState } from 'react'
import axios from '../utils/axios'

const Services = () => {

  const [first, setFirst] = useState("this is normal data")
  const [second, setSecond] = useState("this is very Large Data")
  
  const getusers = () => {
    const api = "/users"
  
    axios
    .get("/users")
    .then((users) => {
      console.log(users);
    })
    .catch((err) => console.log(err));
  }
  
    useEffect(()=> {

      getusers();
        console.log(" Service Component is created!")

        return ()=> [
            console.log("Service Component is Deleted!")
        ]
    }, [second])

    

  return (
    <div>
      <h1>{first}</h1>
      <button onClick={()=> setFirst("Normal Data has been Changed!")} className='mb-10 bg-red-200 p-2 rounded'>Change Normal Data</button>


      <h1>{second}</h1>
      <button onClick={()=> setSecond("Large Data has been Changed!")} className='mb-10 bg-blue-200 p-2 rounded' > Change Large Data</button>
    
    </div>
  )
}

export default Services
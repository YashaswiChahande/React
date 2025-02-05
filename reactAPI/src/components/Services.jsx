import React, { useEffect } from 'react'

const Services = () => {

    useEffect(()=> {
        console.log(" Service Component is created!")

        return ()=> [
            console.log("Service Component is Deleted!")
        ]
    })

  return (
    <div>Services</div>
  )
}

export default Services
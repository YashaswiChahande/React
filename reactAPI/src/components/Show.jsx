import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from '../utils/axios'



const Show = () => {
    const [products, setproducts] = useState([])

    const getproducts = () => {
      const api = "/products"
    
      axios
      .get("/products")
      .then((products) => {
        console.log(products);
        setproducts(products.data);
      })
      .catch((err) => console.log(err));
    }
    
    useEffect(()=>{
      getproducts()
    },[])

    return (

 <>
    <button onClick={getproducts} className='px-5 py-2 bg-red-300 rounded' >
        Call Product API
      </button>

      <hr />

        <ul>
        { products.length > 0 ? (
          products.map( (p) => (

            <li key={p.id} className='rounded  mb-3 w-1/4 p-5 bg-red-200 '>
              
              {p.title}
              
              </li>
          ))
          
        ) : (
          <h1>Loading....</h1>
        )}
        
      </ul>
 </>       


  )
}

export default Show
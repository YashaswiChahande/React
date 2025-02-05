import React from 'react'
import { useState } from 'react'



import axios from 'axios'

const Show = () => {
    const [products, setproducts] = useState([])

    const getproducts = () => {
      const api = "https://fakestoreapi.com/products"
    
      axios
      .get(api)
      .then((products) => {
        console.log(products);
        setproducts(products.data);
      })
      .catch((err) => console.log(err));
    }

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
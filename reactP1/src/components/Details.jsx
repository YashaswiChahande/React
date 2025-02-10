import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import axios from '../utils/axios';
import Loading from './Loading';

const Details = () => {

  const [products, setproducts] = useState(null);
  
  const { id } = useParams();

  console.log(id);

  const getsingleproduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`)
      setproducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=> {
    getsingleproduct();
  },[]);

  return products ? (
    <div className='w-[70%] flex p-[10%] justify-between items-center h-full m-auto '>

        <img className='h-[80%] w-[40%] object-contain '
        
        src={`${products.image}`} alt="" />
        <div className='content w-[50%]'>
            <h1 
                className='text-4xl'>
                    {`${products.title}`}
            </h1>
            <h3 
                className='text-zinc-600 my-5'>
                    {`${products.category}`}
            </h3>
            <h2 className='text-red-300 mb-3' >{`$ ${ products.price}`}</h2>
            <p className='mb-[5%]' >{`${products.description}`}</p>
            <Link className=' mr-5 py-2 px-5 border rounded mb-3 border-blue-300 text-blue-300' >
              Edit 
            </Link>
            <Link className=' mr py-2 px-5 border rounded mb-3 border-red-300 text-red-300' > 
              Delete
            </Link>
        </div>
    </div>
 ) : (
        <Loading/>
    )
};

export default Details
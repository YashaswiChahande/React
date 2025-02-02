import React from 'react'
import { useForm } from 'react-hook-form'

function App() {
  const {register, handleSubmit} = useForm();

  console.log(register());
  return (
    <div>
      <form action='' onSubmit={handleSubmit(data => console.log(data))}>
        <input {...register("name")} type='text' placeholder='name'/>
        <input {...register("email")}type='email' placeholder='email'/>
        <input type='submit'></input>
      </form>
    </div>
  )
}

export default App

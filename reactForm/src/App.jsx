import React, {useRef} from 'react'

function App() {

  const name = useRef(null);
  const age = useRef(null);
  const email = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name.current.value, age.current.value, email.current.value);//name.current for name .value to get the value
  }

  return (
    <form action='' onSubmit={handleSubmit}>
      <input ref={name} placeholder='name' type='text' />
      <input ref={age} placeholder='age' type='text' />
      <input ref={email} placeholder='Email' type='text' />
      <input type='submit'/>
    </form>
  )
}

export default App

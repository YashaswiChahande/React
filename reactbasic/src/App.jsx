import React, { useState } from "react";


function App (){
  const [val, setVal] = useState([1,2,3,4,5,6]);

  return (
    <div className="p-5">
      {val.map(item => <h1>{item}</h1>)}
      <button onClick={()=>setVal(() => val.filter((item,index) => index != val.length - 1))} className= 'px-3 py-1  bg-blue-600 rounded-full text-white'>Change </button>
    </div>
  )
}

export default App
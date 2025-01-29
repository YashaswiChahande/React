import React, { useState } from "react";


function App (){
  const [val, setVal] = useState(12);

  return (
    <div className="p-4">
      <h1>{val}</h1>
      <button onClick={()=>setVal((prev)=>prev+1)} className="px-3 py-1 bg-blue-500 rounded-full text-zinc-50">Change Value</button>
    </div>
  )
}

export default App
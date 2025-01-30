import React, { useState } from "react";


function App (){
  const [val, setVal] = useState([{name:"harsh", age:24}, {name: "shivam", age:25}, {name: "kohli", age:32}]);

  return (
    <div className="p-5">
      {val.map(item => (
        <div>
          <h1>{item.name}</h1>
          <h1>{item.age}</h1>
      </div>
    ))}
      <button onClick={()=>setVal(() => val.map(item => item.name === "shivam" ? ({name: "shivam", age:26}): item))} className= 'px-3 py-1  bg-blue-600 rounded-full text-white'>Change </button>
    </div>
  )
}

export default App
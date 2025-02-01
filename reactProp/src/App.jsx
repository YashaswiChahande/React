import React, { useState }  from "react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

function App() {

  const data = [
    {image: "https://images.unsplash.com/photo-1738273473785-99c1fc498c14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Chimpanzee", artist: "McMonkey", added: false},
    {image: "https://images.unsplash.com/photo-1738247999456-97df5721f8cc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "One Day", artist: "Remo", added: false},
    {image: "https://images.unsplash.com/photo-1736943993999-3889ed6a8b18?q=80&w=1848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Chemo", artist: "BaldyG", added: false},
    {image: "https://images.unsplash.com/photo-1737440227575-fd61700ff759?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Lung", artist: "Spittah", added: false},
    {image: "https://images.unsplash.com/photo-1735632629408-30233b7455c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Real Ocean", artist: "CreamyZ", added: false}
  ];

  const [songData, setSongData] = useState(data);

  //where the useState is initialized that is from where you can initilize it which is why the function is made here in parent!

 const handleClick = (index) => {

  setSongData((prev) => {
    //we have return array to setSongData to update previous array
    return prev.map( (item, itemindex) => {
      if(itemindex === index ) return {...item, added: !item.added};
      return item;
    })
  })
 }

  return (
    <>
    <div className="w-full h-screen bg-zinc-300 ">
      <Navbar data={songData} />
      <div className="px-20 flex flex-wrap gap-10 mt-10">
        {songData.map((obj, index)=>(
            <Card data = {obj} handleClick = {handleClick} index= {index} key={index} />
        ))}
      </div>
      
    </div>
    </>
    
  )
}

export default App

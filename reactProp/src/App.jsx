import React, { useState }  from "react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

function App() {

  const data = [
    {image: "https://images.unsplash.com/photo-1738273473785-99c1fc498c14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Chimpanzee", artist: "McMonkey", added: false},
    {image: "https://images.unsplash.com/photo-1738273473785-99c1fc498c14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "One Day", artist: "Remo", added: false},
    {image: "https://images.unsplash.com/photo-1738273473785-99c1fc498c14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Chemo", artist: "BaldyG", added: false},
    {image: "https://images.unsplash.com/photo-1738273473785-99c1fc498c14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Lung", artist: "Spittah", added: false},
    {image: "https://images.unsplash.com/photo-1738273473785-99c1fc498c14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Real Ocean", artist: "CreamyZ", added: false}
  ];

  const [songData, setSongData] = useState(data);

  return (
    <>
    <div className="w-full h-screen bg-zinc-300 ">
      <Navbar />
      <div className="px-20 flex flex-wrap gap-10 mt-10">
        {songData.map(obj=>(
            <Card data = {obj} />
        ))}
      </div>
      
    </div>
    </>
    
  )
}

export default App

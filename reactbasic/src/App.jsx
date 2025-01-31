import React, { useState }  from "react";
import Card from "./Component/Card";

function App (){ 

  const raw = [
    {name: "John", profession: "Painter", image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false},
    {name: "Romeo", profession: "Artist", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",friends: false },
    {name: "jobless", profession: "Entreprenuar", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false},
    {name: "Koby", profession: "Racist", image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false}
  ]

      const [data, setData] = useState(raw);


      const handleClick = (changingIndex)=> {
        setData((prev)=>{
          return prev.map((item, index)=>{
            if( index === changingIndex ) return {...item, friends: !item.friends}
            return item;
          } )
        })

      }
  return (
    <>
    <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">

    {data.map((item, index) => (
      // <Card image = {item.image} name = {item.name} profession = {item.profession} normal way />
      <Card key = {index} index={index} handleClick = {handleClick} values = {item} />
    ))}

    </div>
     
    </>
  )
}

export default App
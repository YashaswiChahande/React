import React from 'react'

function Card() {

    const data = [
        {
            name: 'Mahiya Ve', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            name: 'Junoon', description: "Lorem ipsum dolor sit amet, elit. "
        },
    ]

    const handleClickDownload = ()=>{alert("Download Started.....")};

  return (
    <div className='w-full h-screen bg-zinc-300  flex flex-col gap-10 items-center justify-center'>
      {data.map((item, index)=> (
        <div key = {index} className='w-90 px-3 py-2 bg-zinc-100 rounded-md'>
        <h3 className='font-semibold text-xl'>{item.name}</h3>
        <p className='text-xs mt-2'>{item.description}
        </p>
        <button onClick={handleClickDownload} className='px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded mt-3'>Download Now</button>
      </div>
      ))}
    </div>
  )
}

export default Card


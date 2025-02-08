import { createContext, useState } from "react"
export const UserContext = createContext();

const Context = (props) => {

    // centralised data 
    const [users, setUsers] = useState([

        {id: 0, username: "Jhone Doe", city: "USA" },
        {id: 1, username: "Rembo", city: "MiyA" },
        {id: 2, username: "Barish", city: "Rimzhim" },
    ])

    console.log(props)
  return (
    <UserContext.Provider value={{users, setUsers}} >
        {props.children}
    </UserContext.Provider>
  )
}

export default Context
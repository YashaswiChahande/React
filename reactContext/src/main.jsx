import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import Context from './context/Context.jsx'

createRoot(document.getElementById('root')).render(
    <Context>
        {/* props.children */}
    <BrowserRouter>
        <App />
    </BrowserRouter>
        {/* props.children */}

    </Context>

)

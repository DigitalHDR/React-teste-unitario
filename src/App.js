import { useState } from 'react'
import './App.css'

export default function App() {
  const [name, setName] = useState()
  
  return (
    <div className="App">
       <img 
        src='https://i.postimg.cc/QxFJr1Hd/pikachu.png' 
        alt="ilustração do pikachu" 
       />
       <div className="container">
        <input 
          className="input-container input-name"
          type="text" 
          placeholder="digite seu nome" 
          onChange={(e) => setName(e.target.value)}
        />
        <h1>Hello, <span>{name}</span></h1>
       </div>
    </div>
  )
}

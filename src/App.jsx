import React from 'react'
import Nav from "./components/Nav"
import Hero from './components/Hero'
import About from './components/About'
import Technlogies from './components/Technlogies'
import Getintouch from './components/Getintouch'
const App = () => {
  return (


    
    <div className='overflow-x-hidden text-neutral-300'> 
    <div className='fixed top-0 -z-10 h-full w-full'>
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

    </div>

    <div className="container mx-auto px-8" ></div>
     
   <Nav/>
   <Hero/>
   <About/>
   <Technlogies/>
   <Getintouch/>
    </div>
  )
}

export default App
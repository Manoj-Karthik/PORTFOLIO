import React from 'react'
import {Routes,Route} from 'react-router-dom'
import NavBar from './Components/NavBar'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import Resume from './Pages/Resume'
import Contact from './Pages/Contact'
import LandingPage from './Pages/LandingPage'
import Home from './Pages/Home'
import Education from './Pages/Education'

// import './App.css'

const App = () => {
 
  return (
    <>
    <div>
    <NavBar/>
   
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/education' element={<Education/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </div>
   
    </>
  )
}

export default App
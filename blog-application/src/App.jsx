import React from 'react'
import TopBar from './Components/TopBar/TopBar.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Write from './Pages/Write/Write.jsx';
import Logout from './Pages/Logout/Logout.jsx';


function App() {
  return (
    <>
      
      <Router>
      <TopBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/write' element={<Write />}/>
          <Route path='/logout' element={<Logout />}/>
        </Routes>
      </Router>
    </>

  )
}

export default App
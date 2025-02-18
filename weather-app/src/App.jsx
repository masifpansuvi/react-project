import React, { useState } from 'react'
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'

import './App.css'

function App() { 

  return (
    <>
    <div className="bg-gray-200 min-h-screen flex flex-col items-center gap-10">
      <Header />
      <div className="main-contianer h-96 bg-white p-6 rounded-xl shadow-lg text-center">
        
      <SearchBar />
      </div>
      
    </div>
    </>
  )
}

export default App

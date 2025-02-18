import React, { useEffect } from 'react'
import Hero from './components/Hero'
import { useGlobalContext } from './Context'


 
const Home = () => {
  const {updateHomePage} = useGlobalContext()
  useEffect(() =>  updateHomePage() , [])
  
  return (
    <Hero />
  )
}

export default Home
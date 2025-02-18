import React, {useEffect} from 'react'
import Hero from './components/Hero'
import { useGlobalContext } from './Context'

const About = () => {
  const { updateAboutPage } = useGlobalContext()
  useEffect(() =>  updateAboutPage() , [])
  
  
  return (
    <Hero />
  )
}

export default About
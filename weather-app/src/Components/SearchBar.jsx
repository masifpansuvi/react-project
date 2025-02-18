import React, {useState} from 'react'
import { FaCloud, FaSmog } from "react-icons/fa6";

function SearchBar() {
  const [cityName, setCityName] = useState('')
  const [apiData, setApiData] = useState('')
  
  

  const api_key = 'ca247681344dc626d4aea20a681dab71'
  
  const handleChange = (evt) => {
    setCityName(evt.target.value)
  }
  
  const handleKeyDown = async (e) => {
    //fetch weather condition
    // const api_key = ''
    // const city_name = inputValue
    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}`
    if(e.key === 'Enter'){
      e.preventDefault();
     try {
       console.log(cityName)
       const res = await fetch(weatherApi)
       if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
       const data = await res.json()
       console.log(data)
       setApiData({
        temp: data.main.temp,
        name: data.name,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        condition: data.weather[0].main
       })
     } catch (error) {
      console.log('message', error.message)
     }
     setTimeout(() => {
      setCityName('')
     }, 3000);
    }
    
  }
 
  
  
  return (
    <> 
    <div className="flex items-center w-full max-w-md border border-gray-300 rounded-lg overflow-hidden">
        <input
            type="text"
            placeholder="Enter city name..."
            className="flex-1 px-4 py-2 text-gray-700 focus:outline-none"
            value={cityName}            
            onChange={handleChange}
            onKeyDown={handleKeyDown}
        />
    </div>

    <div className="flex justify-center items-center flex-col">
      <div className="temperature mt-5 text-4xl flex justify-center items-center">
        {apiData.condition === 'Clouds' && <FaCloud className='text-white text-9xl '/> }
        {/* <h2>cloudy</h2> */}
        {apiData.condition === 'Haze' && <FaSmog className='text-white text-9xl'/>}

      </div>
      <h1 className='text-5xl text-white'>{apiData.temp}</h1>
    </div>
    <div className='flex items-center justify-between mt-14'>
      <div className='area-name w-24 h-10 text-xl text-left text-red-400 font-semibold'>{apiData.name}</div>
      <div className='border w-24 h-10 text-left'>hello</div>
    </div>



    {/* <div>name: {apiData.name}</div>
    <div>Temperature: {apiData.temp}</div>
    <div>Description: {apiData.description}</div>
    <div>icon: {apiData.icon}</div> 
    <div>condition: {apiData.condition}</div>*/}
    
    </>
  )
}

export default SearchBar
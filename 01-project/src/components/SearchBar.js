import React, { useState } from 'react'

function SearchBar({onSubmit}) {
  const [term, setTerm] = useState('')
  const handleFormSubmit = (evt) =>{
    evt.preventDefault();
  }
  const handleChange = (evt) =>{
    onSubmit(term)
    setTerm(evt.target.value)
  }
  return (
    <>
    <form onSubmit={handleFormSubmit}>
      <input type='text' value={term} onChange={handleChange}/>
    </form>
    
    </>
  )
}

export default SearchBar
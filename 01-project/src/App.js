import React, {useState} from 'react'
import searchImage from './Api';
import './App.css';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

function App() {
  const [images, setImages] = useState([])

  const handleClick = async (term) =>{
    const result = await searchImage(term)
    setImages(result)
  }
  return (
    <>
      
      <SearchBar  onSubmit = {handleClick} />
      <ImageList images = {images}/>
    </>
  );
}

export default App;

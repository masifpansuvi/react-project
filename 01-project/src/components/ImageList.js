import React from 'react'
import ImageShow from './ImageShow'

function ImageList({images}) {
  const listOfImage = images.map((image,index)=>{
    return (
      <>
      <ImageShow key={index} image = {image}/>
      </>
    )
  })
  return(
    <>
    <div>image List: {listOfImage}</div>
    </>
  )
}

export default ImageList
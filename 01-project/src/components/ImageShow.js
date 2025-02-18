import React from 'react'

function ImageShow({image}) {
  return (
    <img src={image.urls.small} alt='images'/>
  )
}

export default ImageShow
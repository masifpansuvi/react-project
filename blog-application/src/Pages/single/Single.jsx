import React from 'react'
import Post from '../../Components/post/Post'
import SIdeBar from '../../Components/SideBar/SIdeBar'

const SinglePost = () => {
  return (
    <>
    <div className="single">
        {/* post */}
        <Post />
        {/* sidebar */}
        <SIdeBar />
    </div>
    </>
  )
}

export default SinglePost
import "./pagesStyle.css"
import Header from '../../Components/Header/Header'
import SIdeBar from '../../Components/SideBar/SIdeBar'
import Posts from '../../Components/Posts/Posts'

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <Posts />
        <SIdeBar />
      </div>
    </div>
  )
}

export default Home
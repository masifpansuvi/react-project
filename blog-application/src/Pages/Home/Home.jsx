//import "./pagesStyle.css"
import Header from '../../Components/Header/Header.jsx'
import SIdeBar from '../../Components/SideBar/SIdeBar.jsx'
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
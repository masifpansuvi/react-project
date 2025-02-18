import "./sidebar.css";
import { FaFacebook, FaInstagram, FaSquareTwitter, FaPinterest, FaSistrix } from "react-icons/fa6";

const SIdeBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebar-heading">ABOUT US</span>
        <img
          src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=350"
          alt=""
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
          dolore ut ratione provident. Assumenda, earum.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebar-heading">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Game</li>
            <li className="sidebarListItem">love</li>
            <li className="sidebarListItem">Family</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cenima</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebar-heading">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon"><FaFacebook /> </i>
            <i className="sidebarIcon"><FaInstagram/></i>
            <i className="sidebarIcon"><FaPinterest /></i>
            <i className="sidebarIcon"><FaSquareTwitter /></i>
        </div>
      </div>

    </div>
  );
};

export default SIdeBar;

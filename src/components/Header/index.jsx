import "./index.css";
import { FaSearch, FaBell, FaPlus, FaUserCircle,FaBars} from "react-icons/fa";

const Header = () => {
  return (
    <div className="header-container">

      <div className="logo-text">
        <h1 style={{ color: "#5fc0d0" }}>
          Health<span style={{ color: "darkblue" }}>care.</span>
        </h1>
      </div>

      <div className="search-bar-notification-container">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>

        <FaBell className="notification-icon" />
      </div>

      <div className="avatar-container">
        <FaUserCircle className="avatar-icon" />
        <FaPlus className="plus-icon" />
         <FaBars className="bar-icon" />
      </div>
    
    </div>
  );
};

export default Header;



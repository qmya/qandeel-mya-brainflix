import React from 'react';
import {Link} from 'react-router-dom'
import "./Header.scss";
import Logo from '../../Assets/Logo/Logo-brainflix.svg';
import Iconsplus from '../../Assets/Icons/SVG/Icon-upload.svg';
import Thumbimage from '../../Assets/Images/Mohan-muruge.jpg';


const Header = (props) => {
 return ( 
     <header className = "header">
        
          <Link  className="header__wrapper" to="/" >
          <img src ={Logo} alt="logo of the site"/>
          </Link>
        
       
       
         
           <form className ="header__formcontainer">
            <input id="searchicon"className ="header__searchicon header__search" type="text" placeholder="  Search" name="search"/>
            <Link to="/UploadPage" style={{ textDecoration: 'none' }}>
           <button className ="header__upload"type="submit"><img className ="header__iconplus" src ={Iconsplus} alt="logo add icon"/>UPLOAD</button>
           </Link>
           <img className ="header__thumbimage" src = {Thumbimage} alt="Nav bar thumb nail"/>
          </form>
          
           
      </header>
      );
}
export default Header;
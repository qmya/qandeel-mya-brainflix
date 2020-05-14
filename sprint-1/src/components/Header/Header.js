import React from 'react';
import "./Header.scss";
import Logo from '../Assets/Logo/Logo-brainflix.svg';
import Thumbimage from '../Assets/Images/Mohan-muruge.jpg';


const Header = (props) => {
  console.log('PROPS', props);
    return ( 
    
      <header className ="header">
       <img className ="header__logo" src ={Logo} alt="logo of the site"/>
           <nav>
           <form className ="header__search">
            <input type="text" placeholder="Search" name="search"/>
           <button className ="header__upload"type="submit">+ UPLOAD</button>
            <img className ="header__thumbimage" src = {Thumbimage} alt="Thumb image"/>
           
            </form>
           </nav>
      </header>
      );
}
export default Header;
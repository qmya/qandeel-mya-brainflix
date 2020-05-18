import React from 'react';
import HeaderLogo from '../../assets/logo/logo-brainflix.svg';



class Logo extends React.Component {
    render() {
      return (     
        <>
        <img src={HeaderLogo} alt="BrainFlix logo"></img>
        </>
      );
    }
  }


export default Logo;
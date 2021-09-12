import React from 'react';
import Tilt from 'react-parallax-tilt';
import ImageLogo from './logo.svg';
import './logo.css'

const Logo = ({ size }) => {
  let computedClassName = "br2 shadow-1 logoBox";
  if(size === 'small') {
    computedClassName += " logoBox-s";
  } else if(size === 'medium') {
    computedClassName += " logoBox-m";
  }
  return(
    <div>
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} className={computedClassName} >
        <img src={ImageLogo} alt="SmartBrain Logo"/>
      </Tilt>
    </div>
  )
}

export default Logo;
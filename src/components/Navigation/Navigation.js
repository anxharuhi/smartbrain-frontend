import React from 'react';
import Logo from './../Logo/Logo';
import TextLogo from './../TextLogo/TextLogo'
import './navigation.css';

const Navigation = ({ onRouteChange }) => {
  return (
    <nav className='flex justify-end items-center'>
      <Logo size="small" />
      <div className="ml3"></div>
      <TextLogo />
      <div className='flex-spacer'></div>
      <p className='f5 f4-ns link dim black underline pointer' onClick={() => onRouteChange('signin')}>Sign Out</p>
    </nav>
  );
};

export default Navigation;
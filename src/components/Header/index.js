import React from 'react';
import {HeaderWrapper} from './style';

export default function Header({}) {
  return <HeaderWrapper>
  <header className="header">
    <div className="left-header">
        <span className="menu">Logo</span>
        <span className="menu">About</span>
        <span className="menu">Community</span>
        <span className="menu">Location</span>
        <span className="menu">Our-Menu</span>
        <span className="menu">Recipes</span>
    </div>
    <div className="right-header"> 
        <span className="menu">Contact</span>
        <span className="menu">Profile</span>
    </div>
  </header>
  </HeaderWrapper>
}
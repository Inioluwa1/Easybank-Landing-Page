import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='HeaderContainer'>
      <div className='Header'>
        <div className='HeaderImageContainer'>
          <img src='logo.svg' alt='Easybank Logo' className='HeaderImage' />
        </div>
        <div className='HeaderLinksContainer'>
          <p> Home </p>
          <p> About </p>
          <p> Contact </p>
          <p> Blog </p>
          <p> Careers </p>
        </div>
        <button className='HeaderButton'> Request Invite </button>
        <img src='icon-hamburger.svg' alt='Hamburger Menu' className='HeaderMenuImage' />
      </div>
    </div>
  )
}

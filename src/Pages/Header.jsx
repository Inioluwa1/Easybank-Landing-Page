import React, { useState } from 'react'
import './Header.css'

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleMenuClick = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <div className='HeaderContainer'>
      <div className='Header'>
        <div className='HeaderImageContainer'>
          <img src='logo.svg' alt='Easybank Logo' className='HeaderImage' />
        </div>
        <div className={`HeaderLinksContainer ${openMenu ? 'MenuOpen' : ''}`}>    
          <p> Home </p>
          <p> About </p>
          <p> Contact </p>
          <p> Blog </p>
          <p> Careers </p>
        </div>
        <button className='HeaderButton'> Request Invite </button>
        {openMenu? 
          <img src='icon-close.svg' alt='Hamburger Menu' className='HeaderMenuImage' onClick={handleMenuClick} /> :
          <img src='icon-hamburger.svg' alt='Hamburger Menu' className='HeaderMenuImage' onClick={handleMenuClick} />}
      </div>
    </div>
  )
}

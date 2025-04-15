import React from 'react'
import "./Footer.css"
import { ImFacebook2, ImYoutube, ImTwitter, ImPinterest } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";


export default function Footer() {
  return (
    <div className='FooterContainer'>
      <div className='FooterImage'>
        <div className='FooterLogo'>
          <img src='logo.svg' alt='Easybank Logo' />
        </div>

        <div className='FooterSocials'>
          <ImFacebook2 className='FooterSocialIcon' size={25} />
          <ImYoutube className='FooterSocialIcon' size={25}/>
          <ImTwitter className='FooterSocialIcon' size={25} />
          <ImPinterest className='FooterSocialIcon' size={25} />
          <FaInstagram className='FooterSocialIcon' size={25} />
        </div>
      </div>
      <div className='FooterLinks'>
          <p>About Us </p>
          <p>Contact </p>
          <p>Blog </p>
      </div>
      <div className='FooterLinks'>
          <p>Careers </p>
          <p>Support </p>
          <p>Privacy Policy </p>
      </div>
      <div className='Footer'>
        <button className='FooterButton'>Request Invite</button>
        <p>© Easybank. All Rights Reserved</p>
      </div>
    </div>
  ) 
}
 
import React from 'react'
import "./Main.css"

export default function Main() {
  return (
    <div className='MainContainer'>
      <div className='MainContent'>
        <h1> Next generation digital banking </h1>
        <p> Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more</p>
        <button className='HeaderButton'> Request Invite </button>
      </div>
      <div className='MainImageContainer'>
        <img src='image-mockups.png' alt='Mockups' className='MainImage' />
      </div> 
    </div>
  )
}

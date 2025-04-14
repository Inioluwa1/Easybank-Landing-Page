import React from 'react'
import "./ChoosingCustomCard.css"

export default function ChoosingCustomCard({src, title, text}) {
  return (
    <div className='ChoosingCustomCardContainer'>
      <img src={src} alt={title} />
      <h1> {title} </h1>
      <p> {text} </p>
    </div>
  )
}

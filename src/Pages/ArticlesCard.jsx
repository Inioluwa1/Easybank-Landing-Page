import React from 'react'
import "./ArticlesCard.css"

export default function ArticlesCard({img, author, header, details}) {
  return (
    <div className='ArticlesCardContainer'>
      <div className='ArticleCardImageContainer'>
        <img src={img} alt={header} />
      </div>
      <div className='ArticleCardContent'>
        <p className='Author'> By: {author} </p>
        <h1> {header} </h1>
        <p className='Details'> {details} </p>
      </div>
    </div>
  )
}

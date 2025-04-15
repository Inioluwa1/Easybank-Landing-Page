import React from 'react'
import "./ArticlesPage.css"
import Articles from './Articles'
import ArticlesCard from './ArticlesCard'

export default function  ArticlesPage() {
  return (
    <div className='ArticlesPageContainer'>
      <h1> Latest Articles </h1>
      <div className='ArticlesContentContainer'>
        {Articles.map((article, index) => (
          <ArticlesCard
            key={index}
            img={article.img}
            author={article.writer}
            header={article.header}
            details={article.details}
          />
        ))}
      </div>
    </div>
  )
}
 
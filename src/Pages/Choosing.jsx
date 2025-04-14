import React from 'react'
import "./Choosing.css"
import ChoosingCards from './ChoosingCards'
import ChoosingCustomCard from './ChoosingCustomCard'

export default function Choosing() {
  return (
    <div className='ChoosingContainer'>
      <h1> Why choose Easybank? </h1>
      <p> We leverage Open Banking to turn your bank account into your financial hub. <br /> Control your finances like never before.</p>
      <div className='ChoosingCardsContainer'>
        {ChoosingCards.map((card, index) => (
          <ChoosingCustomCard
            key={index}
            src={card.img}
            title={card.header}
            text={card.details}
          />
        ))}
      </div>
    </div>
  )
}
 
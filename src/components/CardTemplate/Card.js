import React from 'react'
// Import the context value
import CurrentUserContext from '../../contexts/CurrentUserContext'

const Card = ({ card, onCardClick, handleCardDelete }) => {
  const { currentUser } = React.useContext(CurrentUserContext)
  // Why does this work?  I thought the currentUser value was undined on the first render.
  // console.log('Card.js: currentUser: ', currentUser)
  // console.log('Card.js: card: ', card)

  //Check if the delete icon should be shown on the current card.
  const isOwn = card.owner._id === currentUser._id

  const handleCardClick = () => {
    onCardClick(card)
  }

  const handleCardDeleteClick = () => {
    handleCardDelete(card)
  }

  return (
    <div className="card cards__column">
      <img
        className="card__column-image"
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
      />
      <div className="card__container-titleicon">
        <h2 className="card__column-image-title">{card.name}</h2>
        <div className="card__column-heartcontainer">
          <button
            aria-label="heart"
            type="button"
            className="card__heart-button"
          ></button>
          <span className="card__heart-count">{card.likes.length}</span>
        </div>
      </div>
      {isOwn && (
        <button
          aria-label="trash"
          type="button"
          className="card__trash-button"
          onClick={handleCardDeleteClick}
        ></button>
      )}
    </div>
  )
}

export default Card

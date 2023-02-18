import React from 'react'

const Card = ({
  likesCount,
  name,
  link,
  onCardClick,
  card,
  handleCardDelete,
}) => {
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
        src={link}
        alt={name}
        onClick={handleCardClick}
      />
      <div className="card__container-titleicon">
        <h2 className="card__column-image-title">{name}</h2>
        <div className="card__column-heartcontainer">
          <button
            aria-label="heart"
            type="button"
            className="card__heart-button"
          ></button>
          <span className="card__heart-count">{likesCount}</span>
        </div>
      </div>
      <button
        aria-label="trash"
        type="button"
        className="card__trash-button"
        onClick={handleCardDeleteClick}
      ></button>
    </div>
  )
}

export default Card

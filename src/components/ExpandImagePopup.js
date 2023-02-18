import React from 'react'
import Popup from './Popup'

const ExpandImagePopup = ({ selectedCard, handleCardClick }) => {
  const handleTogglePopup = () => {
    handleCardClick(null)
  }

  return (
    <Popup
      isOpen={selectedCard}
      containerName="imagePopup"
      onClose={handleTogglePopup}
    >
      <img
        className="popup__picture-full"
        src={selectedCard.link}
        alt={selectedCard.name}
      />
      <p className="popup__piture-paragraph">{selectedCard.name}</p>
    </Popup>
  )
}

export default ExpandImagePopup

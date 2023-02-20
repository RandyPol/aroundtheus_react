import React from 'react'
import Popup from './Popup'

const ConfirmDeletePopup = ({
  isLoading,
  isConfirmDeletePopupOpen,
  onConfirmDeleteClick,
  onClose,
}) => {


  return (
    <Popup
      containerName="confirmDelete"
      onClose={onClose}
      isOpen={isConfirmDeletePopupOpen}
    >
      <h2 className="form__title">Are you sure?</h2>
      <button
        onClick={onConfirmDeleteClick}
        aria-label="submit"
        type="submit"
        className="form__button popup__delete_confirm"
      >
        {isLoading ? 'Deleting' : 'Confirm'}
      </button>
    </Popup>
  )
}

export default ConfirmDeletePopup

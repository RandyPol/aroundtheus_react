import React from 'react'
import PopupWithForm from './PopupWithForm'

const ConfirmDeletePopup = ({
  isConfirmDeletePopupOpen,
  onConfirmDeleteClick,
  handleSubmitConfirmDelete,
}) => {
  return (
    <PopupWithForm
      formTitle="Are you sure?"
      name="confirmDelete"
      buttonText="Confirm"
      onClose={onConfirmDeleteClick}
      isOpen={isConfirmDeletePopupOpen}
      handleSubmit={handleSubmitConfirmDelete}
    />
  )
}

export default ConfirmDeletePopup

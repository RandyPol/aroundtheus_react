import React from 'react'
import Popup from './Popup'

const PopupWithForm = ({
  formTitle,
  name,
  buttonText,
  isAddPlacePopupOpen,
  onAddPlaceClick,
  children,
  handleSubmitAddPlace,
}) => {
  return (
    <Popup
      isOpen={isAddPlacePopupOpen}
      containerName={name}
      onClose={onAddPlaceClick}
    >
      <form action="#" name={name} onSubmit={handleSubmitAddPlace} noValidate>
        <h2 className="form__title">{formTitle}</h2>

        {/* Data from the parent component */}
        {children}

        <fieldset className="form__fieldset">
          <button
            aria-label="submit"
            type="submit"
            className="form__button form__submit"
          >
            {buttonText}
          </button>
        </fieldset>
      </form>
    </Popup>
  )
}

export default PopupWithForm

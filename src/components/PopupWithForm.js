import React from 'react'
import Popup from './Popup'

const PopupWithForm = ({
  formTitle,
  name,
  buttonText,
  isOpen,
  onClose,
  children,
  handleSubmit,
  isSubmitDisabled,
}) => {
  return (
    <Popup isOpen={isOpen} containerName={name} onClose={onClose}>
      <form action="#" name={name} onSubmit={handleSubmit} noValidate>
        <h2 className="form__title">{formTitle}</h2>

        {/* Data from the parent component */}
        {children}

        <fieldset className="form__fieldset">
          <button
            aria-label="submit"
            type="submit"
            className={`form__button ${
              isSubmitDisabled ? 'form__button_inactive' : ''
            }`}
            disabled={isSubmitDisabled}
          >
            {buttonText}
          </button>
        </fieldset>
      </form>
    </Popup>
  )
}

export default PopupWithForm

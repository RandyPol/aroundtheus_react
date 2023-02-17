import React from 'react'
import PopupWithForm from './PopupWithForm'

const AddNewPlacePopup = ({
  isAddPlacePopupOpen,
  onAddPlaceClick,
  handleSubmitAddPlace,
}) => {
  return (
    <PopupWithForm
      formTitle="New Place"
      name="addPlace"
      buttonText="Create"
      onAddPlaceClick={onAddPlaceClick}
      isAddPlacePopupOpen={isAddPlacePopupOpen}
      handleSubmitAddPlace={handleSubmitAddPlace}
    >
      <fieldset className="form__fieldset">
        <label className="form__field">
          <input
            type="text"
            className="form__input"
            id="title"
            name="name"
            placeholder="Title"
            minLength="1"
            maxLength="30"
            required
          />
          <span className="form__input-error title-input-error">
            Hello This is an Error
          </span>
        </label>
        <label className="form__field">
          <input
            type="url"
            className="form__input"
            id="link"
            name="link"
            placeholder="Image link"
            required
          />
          <span className="form__input-error link-input-error">
            Hello This is an Error
          </span>
        </label>
      </fieldset>
    </PopupWithForm>
  )
}

export default AddNewPlacePopup

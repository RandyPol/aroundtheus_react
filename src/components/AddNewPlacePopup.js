import React from 'react'
import PopupWithForm from './PopupWithForm'
import { useFormAndValidation } from '../hook/useFormValidation'

const AddNewPlacePopup = ({
  isLoading,
  isAddPlacePopupOpen,
  onAddPlaceClick,
  handleSubmitAddPlace,
}) => {
  const { values, handleChange, errors, isValid } = useFormAndValidation()
  // Check if submit button should be disabled
  const isSubmitDisabled = !isValid

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSubmitAddPlace(values)
  }

  return (
    <PopupWithForm
      formTitle="New Place"
      name="addPlace"
      buttonText={isLoading ? 'Creating...' : 'Create'}
      onClose={onAddPlaceClick}
      isOpen={isAddPlacePopupOpen}
      handleSubmit={handleSubmit}
      isSubmitDisabled={isSubmitDisabled}
    >
      <fieldset className="form__fieldset">
        <label className="form__field">
          <input
            type="text"
            className={`form__input ${
              errors.name ? 'form__input_type_error' : ''
            }`}
            id="title"
            name="name"
            placeholder="Title"
            minLength="2"
            maxLength="30"
            required
            value={values.name || ''}
            onChange={handleChange}
          />
          {errors.name && (
            <span className="form__input-error">
              {errors.name || 'This field is required'}
            </span>
          )}
        </label>
        <label className="form__field">
          <input
            type="url"
            className="form__input"
            id="link"
            name="link"
            placeholder="Image link"
            required
            value={values.link || ''}
            onChange={handleChange}
          />
          {errors.link && (
            <span className="form__input-error">
              {errors.link || 'This field is required'}
            </span>
          )}
        </label>
      </fieldset>
    </PopupWithForm>
  )
}

export default AddNewPlacePopup

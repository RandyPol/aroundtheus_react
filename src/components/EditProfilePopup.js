import React from 'react'
import PopupWithForm from './PopupWithForm'
import { useFormAndValidation } from '../hook/useFormValidation'

const EditProfilePopup = ({
  isLoading,
  isEditProfilePopupOpen,
  onEditProfileClick,
  handleSubmitEditProfile,
}) => {
  const { values, handleChange, errors, isValid } = useFormAndValidation()

  // Check if submit button should be disabled
  const isSubmitDisabled = !isValid

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSubmitEditProfile(values)
  }

  return (
    <PopupWithForm
      formTitle={'Edit Profile'}
      name={'editProfile'}
      buttonText={isLoading ? 'Saving...' : 'Save'}
      isOpen={isEditProfilePopupOpen}
      onClose={onEditProfileClick}
      handleSubmit={handleSubmit}
      isSubmitDisabled={isSubmitDisabled}
    >
      <fieldset className="form__fieldset">
        <label className="form__field">
          <input
            type="text"
            className="form__input"
            id="name"
            name="name"
            placeholder="Name"
            minLength="2"
            maxLength="40"
            required
            value={values.name || ''}
            onChange={handleChange}
          />
          {errors.name && (
            <span className="form__input-error name-input-error">
              {errors.name || 'This field is required'}
            </span>
          )}
        </label>
        <label className="form__field">
          <input
            type="text"
            className="form__input"
            id="about"
            name="about"
            placeholder="About me"
            minLength="2"
            maxLength="200"
            required
            value={values.about || ''}
            onChange={handleChange}
          />
          {errors.about && (
            <span className="form__input-error about-input-error">
              {errors.about || 'This field is required'}
            </span>
          )}
        </label>
      </fieldset>
    </PopupWithForm>
  )
}

export default EditProfilePopup

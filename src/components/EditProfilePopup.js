import React from 'react'
import PopupWithForm from './PopupWithForm'

const EditProfilePopup = ({
  isEditProfilePopupOpen,
  onEditProfileClick,
  handleSubmitEditProfile,
}) => {
  return (
    <PopupWithForm
      formTitle={'Edit Profile'}
      name={'editProfile'}
      buttonText={'Save'}
      isOpen={isEditProfilePopupOpen}
      onClose={onEditProfileClick}
      handleSubmit={handleSubmitEditProfile}
      children
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
          />
          <span className="form__input-error name-input-error">
            Hello This is an Error
          </span>
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
          />
          <span className="form__input-error about-input-error">
            Hello This is an Error
          </span>
        </label>
      </fieldset>
    </PopupWithForm>
  )
}

export default EditProfilePopup

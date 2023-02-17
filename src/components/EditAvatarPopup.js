import React from 'react'
import PopupWithForm from './PopupWithForm'

const EditAvatarPopup = ({
  isEditAvatarPopupOpen,
  onEditAvatarClick,
  handleSubmitEditAvatar,
}) => {
  return (
    <PopupWithForm
      formTitle="Change Profile Picture"
      name="editAvatar"
      buttonText="Save"
      isOpen={isEditAvatarPopupOpen}
      onClose={onEditAvatarClick}
      handleSubmit={handleSubmitEditAvatar}
    >
      <fieldset className="form__fieldset">
        <label className="form__field">
          <input
            type="url"
            className="form__input"
            id="avatarlink"
            name="link"
            placeholder="Image link"
            required
          />
          <span className="form__input-error avatarlink-input-error">
            Hello This is an Error
          </span>
        </label>
      </fieldset>
    </PopupWithForm>
  )
}

export default EditAvatarPopup

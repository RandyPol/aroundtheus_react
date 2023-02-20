import React from 'react'
import PopupWithForm from './PopupWithForm'
import { useFormAndValidation } from '../hook/useFormValidation'

const EditAvatarPopup = ({
  isLoading,
  isEditAvatarPopupOpen,
  onEditAvatarClick,
  handleSubmitEditAvatar,
}) => {
  const { values, handleChange, errors, isValid } = useFormAndValidation()

  // Check if submit button should be disabled
  const isSubmitDisabled = !isValid

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSubmitEditAvatar(values)
  }

  return (
    <PopupWithForm
      formTitle="Change Profile Picture"
      name="editAvatar"
      buttonText={isLoading ? 'Saving...' : 'Save'}
      isOpen={isEditAvatarPopupOpen}
      onClose={onEditAvatarClick}
      handleSubmit={handleSubmit}
      isSubmitDisabled={isSubmitDisabled}
    >
      <fieldset className="form__fieldset">
        <label className="form__field">
          <input
            type="url"
            className="form__input"
            id="avatarlink"
            name="avatar"
            placeholder="Image link"
            required
            value={values.avatar || ''}
            onChange={handleChange}
          />
          {errors.avatar && (
            <span className="form__input-error avatarlink-input-error">
              {errors.avatar || 'This field is required'}
            </span>
          )}
        </label>
      </fieldset>
    </PopupWithForm>
  )
}

export default EditAvatarPopup

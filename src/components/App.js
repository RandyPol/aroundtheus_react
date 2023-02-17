import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import AddNewPlacePopup from './AddNewPlacePopup'
import EditProfilePopup from './EditProfilePopup'

const App = () => {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false)

  // Handle functions for opening/toggling the modals
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen((prevs) => !prevs)
  }
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen((prevs) => !prevs)
  }
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen((prevs) => !prevs)
  }

  // Handle onSubmit functions for the modals
  const handleSubmitEditProfile = (e) => {
    e.preventDefault()
    console.log('Edit Profile')
  }
  const handleSubmitAddPlace = (e) => {
    e.preventDefault()
    console.log('Add Place')
  }
  const handleSubmitEditAvatar = (e) => {
    e.preventDefault()
    console.log('Edit Avatar')
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={() => {
          console.log('KLK')
        }}
      />
      <Footer />

      {isEditProfilePopupOpen && (
        <EditProfilePopup
          isEditProfilePopupOpen={isEditProfilePopupOpen}
          onEditProfileClick={handleEditProfileClick}
          handleSubmitEditProfile={handleSubmitEditProfile}
        />
      )}

      {isAddPlacePopupOpen && (
        <AddNewPlacePopup
          isAddPlacePopupOpen={isAddPlacePopupOpen}
          onAddPlaceClick={handleAddPlaceClick}
          handleSubmitAddPlace={handleSubmitAddPlace}
        />
      )}

      {/* <!--Edit Avatar Modal --> */}
      {/* <div className="modal" id="modalEditAvatar">
        <form
          action="#"
          className="form modal__container"
          name="avatarForm"
          noValidate
        >
          <h2 className="form__title">Change profile picture</h2>
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
          <fieldset className="form__fieldset">
            <button
              aria-label="submit"
              type="submit"
              className="form__button form__submit"
            >
              Save
            </button>

            <button
              aria-label="exit"
              className="form__button modal__button-close"
              type="button"
            >
              <img src={closeIcon} alt="Close icon" className="modal__close" />
            </button>
          </fieldset>
        </form>
      </div> */}

      {/* <!-- Photo Expand Modal --> */}
      {/* <div className="modal" id="modalPicture">
        <div className="modal__container">
          <img className="modal__picture-full" src="#" alt="expandedImage" />
          <p className="modal__piture-paragraph"></p>
          <button
            aria-label="exit"
            className="button modal__button-close"
            type="button"
          >
            <img src={closeIcon} alt="Close icon" className="modal__close" />
          </button>
        </div>
      </div> */}
      {/* <!-- Delete Card Modal --> */}
      {/* <div className="modal" id="modalDelete">
        <div className="modal__deletedcard modal__container">
          <h2 className="modal__confirmation-title">Are you sure?</h2>
          <button className="modal__button-yes">Yes</button>
          <button
            aria-label="exit"
            className="button modal__button-close"
            type="button"
          >
            <img src={closeIcon} alt="Close icon" className="modal__close" />
          </button>
        </div>
      </div> */}
    </div>
  )
}

export default App

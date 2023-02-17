import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import AddNewPlacePopup from './AddNewPlacePopup'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import ConfirmDeletePopup from './ConfirmDeletePopup'

const App = () => {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false)
  const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] =
    React.useState(true)

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
  const handleConfirmDeleteClick = () => {
    setIsConfirmDeletePopupOpen((prevs) => !prevs)
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
  const handleSubmitConfirmDelete = (e) => {
    e.preventDefault()
    console.log('Confirm Delete')
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

      {isEditAvatarPopupOpen && (
        <EditAvatarPopup
          isEditAvatarPopupOpen={isEditAvatarPopupOpen}
          onEditAvatarClick={handleEditAvatarClick}
          handleSubmitEditAvatar={handleSubmitEditAvatar}
        />
      )}

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

      {isConfirmDeletePopupOpen && (
        <ConfirmDeletePopup
          isConfirmDeletePopupOpen={isConfirmDeletePopupOpen}
          onConfirmDeleteClick={handleConfirmDeleteClick}
          handleSubmitConfirmDelete={handleSubmitConfirmDelete}
        />
      )}

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
    </div>
  )
}

export default App

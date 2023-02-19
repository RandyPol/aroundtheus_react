import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import AddNewPlacePopup from './AddNewPlacePopup'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import ConfirmDeletePopup from './ConfirmDeletePopup'
import ExpandImagePopup from './ExpandImagePopup'
import api from '../utils/api'
// Context imports
import CurrentUserContext from '../contexts/CurrentUserContext'

const App = () => {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false)
  const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] =
    React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)
  const [currentUser, setCurrentUser] = React.useState(null)

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        // console.log('User Data', userData)
        setCurrentUser(userData)
      })
      .catch((err) => console.log(err))
  }, [])

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
  const handleConfirmDeleteClick = (card) => {
    console.log('Delete Card', card)
    setIsConfirmDeletePopupOpen((prevs) => !prevs)
  }

  // Handle function for image expand
  const handleCardClick = (card) => {
    setSelectedCard(card)
  }
  // Handle delete card function
  const handleCardDelete = (card) => {
    handleConfirmDeleteClick(card)
    console.log('Going to Confirm Delete Card')
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
    <div className="page page__center">
      <CurrentUserContext.Provider value={{ currentUser }}>
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
          handleCardDelete={handleCardDelete}
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

        {selectedCard && (
          <ExpandImagePopup
            selectedCard={selectedCard}
            handleCardClick={handleCardClick}
          />
        )}
      </CurrentUserContext.Provider>
    </div>
  )
}

export default App

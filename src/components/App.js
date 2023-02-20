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
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)
  const [currentUser, setCurrentUser] = React.useState(null)
  const [cards, setCards] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    api
      .loadData()
      .then(([userData, cardsData]) => {
        setCurrentUser(userData)
        setCards(cardsData)
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
  const handleDeleteClick = () => {
    setIsConfirmDeletePopupOpen((prevs) => !prevs)
  }

  // Handle function for image expand
  const handleCardClick = (card) => {
    setSelectedCard(card)
    setIsImagePopupOpen((prevs) => !prevs)
  }
  // Handle delete card function
  const handleConfirmDeleteClick = () => {
    setIsLoading(true)
    api
      .deleteCard(selectedCard._id)
      .then((res) => {
        const newCards = cards.filter((c) => c._id !== selectedCard._id)
        setCards(newCards)
        setIsConfirmDeletePopupOpen((prevs) => !prevs)
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }

  // Card like function
  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some((user) => user._id === currentUser._id)

    // Send a request to the API and getting the updated card data
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        )
      })
      .catch((err) => console.log(err))
  }

  // Handle onSubmit functions for the modals
  const handleSubmitEditProfile = (data) => {
    setIsLoading(true)
    api
      .patchUserInfo(data)
      .then((res) => {
        console.log('Profile Updated', res)
        setCurrentUser(res)
        setIsEditProfilePopupOpen((prevs) => !prevs)
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }
  // Handle onSubmit functions for the add new card modal
  const handleSubmitAddPlace = (newCard) => {
    setIsLoading(true)
    api
      .postNewCard(newCard)
      .then((res) => {
        console.log('Card Added', res)
        setCards([res, ...cards])
        setIsAddPlacePopupOpen((prevs) => !prevs)
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }

  const handleSubmitEditAvatar = (data) => {
    setIsLoading(true)
    api
      .patchUserAvatar(data)
      .then((res) => {
        setCurrentUser(res)
        setIsEditAvatarPopupOpen((prevs) => !prevs)
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }

  return (
    <div className="page page__center">
      <CurrentUserContext.Provider value={{ currentUser, cards }}>
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          handleCardDelete={handleDeleteClick}
          setSelectedCard={setSelectedCard}
        />
        <Footer />

        {isEditAvatarPopupOpen && (
          <EditAvatarPopup
            isLoading={isLoading}
            isEditAvatarPopupOpen={isEditAvatarPopupOpen}
            onEditAvatarClick={handleEditAvatarClick}
            handleSubmitEditAvatar={handleSubmitEditAvatar}
          />
        )}

        {isEditProfilePopupOpen && (
          <EditProfilePopup
            isLoading={isLoading}
            isEditProfilePopupOpen={isEditProfilePopupOpen}
            onEditProfileClick={handleEditProfileClick}
            handleSubmitEditProfile={handleSubmitEditProfile}
          />
        )}

        {isAddPlacePopupOpen && (
          <AddNewPlacePopup
            isLoading={isLoading}
            isAddPlacePopupOpen={isAddPlacePopupOpen}
            onAddPlaceClick={handleAddPlaceClick}
            handleSubmitAddPlace={handleSubmitAddPlace}
          />
        )}

        {isConfirmDeletePopupOpen && (
          <ConfirmDeletePopup
            isLoading={isLoading}
            isConfirmDeletePopupOpen={isConfirmDeletePopupOpen}
            onConfirmDeleteClick={handleConfirmDeleteClick}
            onClose={handleDeleteClick}
          />
        )}

        {isImagePopupOpen && (
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

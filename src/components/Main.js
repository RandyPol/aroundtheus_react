import React from 'react'
import Card from './CardTemplate/Card'
import pencilEdit from '../images/Edit-Button.svg'
import addIcon from '../images/add-button.svg'
// Import the context value
import CurrentUserContext from '../contexts/CurrentUserContext'

const Main = ({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
  handleCardDelete,
  setSelectedCard,
  onCardLike,
}) => {
  // Get the value of the context
  const { currentUser, cards } = React.useContext(CurrentUserContext)

  const onCardDelete = (card) => {
    setSelectedCard(card)
    handleCardDelete()
  }

  return (
    <main className="main page__main">
      {/* <!-- Profile Section --> */}
      <section className="profile main__profile">
        {currentUser && (
          <div className="profile__container">
            <div className="profile__avatar-container">
              <img
                src={currentUser.avatar}
                className="profile__avatar"
                alt="User Avatar"
              />
              <div
                className="profile__avatar-edit"
                onClick={onEditAvatarClick}
              ></div>
            </div>

            <div className="profile__namerole-container">
              <div className="profile__name-container">
                <h1 className="profile__name">{currentUser.name}</h1>
                <button
                  aria-label="edit"
                  className="profile__name-edit"
                  type="button"
                  onClick={onEditProfileClick}
                >
                  <img
                    src={pencilEdit}
                    alt="Pencil icon"
                    className="profile__pencil"
                  />
                </button>
              </div>
              <p className="profile__role">{currentUser.about}</p>
            </div>
            <button
              aria-label="add"
              type="button"
              className="profile__add-button"
              onClick={onAddPlaceClick}
            >
              <img src={addIcon} alt="Add icon" className="profile__add-icon" />
            </button>
          </div>
        )}
      </section>
      {/* <!-- Cards Section --> */}
      <section className="cards">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardDelete={onCardDelete}
              onCardLike={onCardLike}
            />
          )
        })}
      </section>
    </main>
  )
}

export default Main

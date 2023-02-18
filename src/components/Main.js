import React from 'react'
import Card from './CardTemplate/Card'
import pencilEdit from '../images/Edit-Button.svg'
import addIcon from '../images/add-button.svg'
import api from '../utils/api'

const Main = ({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
  handleCardDelete,
}) => {
  const [userName, setUserName] = React.useState('Username')
  const [userRole, setUserRole] = React.useState('UserRole')
  const [userAvatar, setUserAvatar] = React.useState(null)
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api
      .loadData()
      .then(([userData, cardsData]) => {
        console.log(userData)
        console.log(cardsData)
        setUserName(userData.name)
        setUserRole(userData.about)
        setUserAvatar(userData.avatar)
        setCards(cardsData)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <main className="main page__main">
      {/* <!-- Profile Section --> */}
      <section className="profile main__profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            {userAvatar && (
              <img
                src={userAvatar}
                className="profile__avatar"
                alt="User Avatar"
              />
            )}
            <div
              className="profile__avatar-edit"
              onClick={onEditAvatarClick}
            ></div>
          </div>

          <div className="profile__namerole-container">
            <div className="profile__name-container">
              <h1 className="profile__name">{userName}</h1>
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
            <p className="profile__role">{userRole}</p>
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
      </section>
      {/* <!-- Cards Section --> */}
      <section className="cards">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              likesCount={card.likes.length}
              name={card.name}
              link={card.link}
              onCardClick={onCardClick}
              handleCardDelete={handleCardDelete}
            />
          )
        })}
      </section>
    </main>
  )
}

export default Main

import React from 'react'
import pencilEdit from '../images/Edit-Button.svg'
import addIcon from '../images/add-button.svg'

const Main = ({ onEditProfileClick, onAddPlaceClick, onEditAvatarClick }) => {
  return (
    <main className="main page__main">
      {/* <!-- Profile Section --> */}
      <section className="profile main__profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            <img
              src="https://images.unsplash.com/photo-1513569771920-c9e1d31714af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwaW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="A portrait of User"
              className="profile__avatar"
            />
            <div
              className="profile__avatar-edit"
              onClick={onEditAvatarClick}
            ></div>
          </div>

          <div className="profile__namerole-container">
            <div className="profile__name-container">
              <h1 className="profile__name">Username</h1>
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
            <p className="profile__role">UserRole</p>
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
        {/* <!-- Card Template --> */}
        <template id="card">
          <div className="card cards__column">
            <img className="card__column-image" />
            <div className="card__container-titleicon">
              <h2 className="card__column-image-title"></h2>
              <div className="card__column-heartcontainer">
                <button
                  aria-label="heart"
                  type="button"
                  className="card__heart-button"
                ></button>
                <span className="card__heart-count">0</span>
              </div>
            </div>
            <button
              aria-label="trash"
              type="button"
              className="card__trash-button"
            ></button>
          </div>
        </template>
      </section>
    </main>
  )
}

export default Main

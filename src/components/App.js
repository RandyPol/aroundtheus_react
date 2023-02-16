import logo from '../images/logo_around_us.svg'

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="header__container">
          <img src={logo} alt="The logo of Around The U.S." className="logo" />
        </div>
      </header>
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
              <div className="profile__avatar-edit"></div>
            </div>

            <div className="profile__namerole-container">
              <div className="profile__name-container">
                <h1 className="profile__name"></h1>
                <button
                  aria-label="edit"
                  className="profile__name-edit"
                  type="button"
                >
                  <img
                    src="<%=require('./images/Edit-Button.svg')%>"
                    alt="Pencil icon"
                    className="profile__pencil"
                  />
                </button>
              </div>
              <p className="profile__role"></p>
            </div>

            <button
              aria-label="add"
              type="button"
              className="profile__add-button"
            >
              <img
                src="<%=require('./images/add-button.svg')%>"
                alt="Add icon"
                className="profile__add-icon"
              />
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
      {/* <!-- Footer Section --> */}
      <footer className="footer page__footer">
        <p className="footer__copyright">© 2022 Around The U.S.</p>
      </footer>
      {/* <!-- Profile Modal --> */}
      <div className="modal" id="modalEdit">
        {/* <!-- Form --> */}
        <form
          action="#"
          className="form modal__container"
          name="profileForm"
          noValidate
        >
          <h2 className="form__title">Edit profile</h2>
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
          <fieldset className="form__fieldset">
            <button
              aria-label="submit"
              type="submit"
              className="form__button form__submit"
            >
              Save
            </button>
            {/* <!-- className="profile__name-edit"  --> */}
            <button
              aria-label="exit"
              className="form__button modal__button-close"
              type="button"
            >
              <img
                src="<%=require('./images/CloseIcon.svg')%>"
                alt="Close icon"
                className="modal__close"
              />
            </button>
          </fieldset>
        </form>
      </div>
      {/* <!--Edit Avatar Modal --> */}
      <div className="modal" id="modalEditAvatar">
        {/* <!-- Form --> */}
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
              <img
                src="<%=require('./images/CloseIcon.svg')%>"
                alt="Close icon"
                className="modal__close"
              />
            </button>
          </fieldset>
        </form>
      </div>
      {/* <!-- Add Card Modal --> */}
      <div className="modal" id="modalAdd">
        {/* <!-- Form --> */}
        <form
          action="#"
          className="form modal__container"
          name="cardForm"
          noValidate
        >
          <h2 className="form__title">New Place</h2>
          <fieldset className="form__fieldset">
            <label className="form__field">
              <input
                type="text"
                className="form__input"
                id="title"
                name="name"
                placeholder="Title"
                minLength="1"
                maxLength="30"
                required
              />
              <span className="form__input-error title-input-error">
                Hello This is an Error
              </span>
            </label>
            <label className="form__field">
              <input
                type="url"
                className="form__input"
                id="link"
                name="link"
                placeholder="Image link"
                required
              />
              <span className="form__input-error link-input-error">
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
              Create
            </button>

            <button
              aria-label="exit"
              className="form__button modal__button-close"
              type="button"
            >
              <img
                src="<%=require('./images/CloseIcon.svg')%>"
                alt="Close icon"
                className="modal__close"
              />
            </button>
          </fieldset>
        </form>
      </div>
      {/* <!-- Photo Expand Modal --> */}
      <div className="modal" id="modalPicture">
        <div className="modal__container">
          <img className="modal__picture-full" src="#" alt="expandedImage" />
          <p className="modal__piture-paragraph"></p>
          <button
            aria-label="exit"
            className="button modal__button-close"
            type="button"
          >
            <img
              src="<%=require('./images/CloseIcon.svg')%>"
              alt="Close icon"
              className="modal__close"
            />
          </button>
        </div>
      </div>

      {/* <!-- Delete Card Modal --> */}
      <div className="modal" id="modalDelete">
        <div className="modal__deletedcard modal__container">
          <h2 className="modal__confirmation-title">Are you sure?</h2>
          <button className="modal__button-yes">Yes</button>
          <button
            aria-label="exit"
            className="button modal__button-close"
            type="button"
          >
            <img
              src="<%=require('./images/CloseIcon.svg')%>"
              alt="Close icon"
              className="modal__close"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

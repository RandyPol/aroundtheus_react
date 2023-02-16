import logo from './images/logo_around_us.svg'

function App() {
  return (
    <div class="page">
      <header class="header">
        <div class="header__container">
          <img src={logo} alt="The logo of Around The U.S." class="logo" />
        </div>
      </header>
      <main class="main page__main">
        {/* <!-- Profile Section --> */}
        <section class="profile main__profile">
          <div class="profile__container">
            <div class="profile__avatar-container">
              <img
                src="https://images.unsplash.com/photo-1513569771920-c9e1d31714af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwaW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="A portrait of User"
                class="profile__avatar"
              />
              <div class="profile__avatar-edit"></div>
            </div>

            <div class="profile__namerole-container">
              <div class="profile__name-container">
                <h1 class="profile__name"></h1>
                <button
                  aria-label="edit"
                  class="profile__name-edit"
                  type="button"
                >
                  <img
                    src="<%=require('./images/Edit-Button.svg')%>"
                    alt="Pencil icon"
                    class="profile__pencil"
                  />
                </button>
              </div>
              <p class="profile__role"></p>
            </div>

            <button aria-label="add" type="button" class="profile__add-button">
              <img
                src="<%=require('./images/add-button.svg')%>"
                alt="Add icon"
                class="profile__add-icon"
              />
            </button>
          </div>
        </section>
        {/* <!-- Cards Section --> */}
        <section class="cards">
          {/* <!-- Card Template --> */}
          <template id="card">
            <div class="card cards__column">
              <img class="card__column-image" />
              <div class="card__container-titleicon">
                <h2 class="card__column-image-title"></h2>
                <div class="card__column-heartcontainer">
                  <button
                    aria-label="heart"
                    type="button"
                    class="card__heart-button"
                  ></button>
                  <span class="card__heart-count">0</span>
                </div>
              </div>
              <button
                aria-label="trash"
                type="button"
                class="card__trash-button"
              ></button>
            </div>
          </template>
        </section>
      </main>
      {/* <!-- Footer Section --> */}
      <footer class="footer page__footer">
        <p class="footer__copyright">© 2022 Around The U.S.</p>
      </footer>
      {/* <!-- Profile Modal --> */}
      <div class="modal" id="modalEdit">
        {/* <!-- Form --> */}
        <form
          action="#"
          class="form modal__container"
          name="profileForm"
          novalidate
        >
          <h2 class="form__title">Edit profile</h2>
          <fieldset class="form__fieldset">
            <label class="form__field">
              <input
                type="text"
                class="form__input"
                id="name"
                name="name"
                placeholder="Name"
                minlength="2"
                maxlength="40"
                required
              />
              <span class="form__input-error name-input-error">
                Hello This is an Error
              </span>
            </label>
            <label class="form__field">
              <input
                type="text"
                class="form__input"
                id="about"
                name="about"
                placeholder="About me"
                minlength="2"
                maxlength="200"
                required
              />
              <span class="form__input-error about-input-error">
                Hello This is an Error
              </span>
            </label>
          </fieldset>
          <fieldset class="form__fieldset">
            <button
              aria-label="submit"
              type="submit"
              class="form__button form__submit"
            >
              Save
            </button>
            {/* <!-- class="profile__name-edit"  --> */}
            <button
              aria-label="exit"
              class="form__button modal__button-close"
              type="button"
            >
              <img
                src="<%=require('./images/CloseIcon.svg')%>"
                alt="Close icon"
                class="modal__close"
              />
            </button>
          </fieldset>
        </form>
      </div>
      {/* <!--Edit Avatar Modal --> */}
      <div class="modal" id="modalEditAvatar">
        {/* <!-- Form --> */}
        <form
          action="#"
          class="form modal__container"
          name="avatarForm"
          novalidate
        >
          <h2 class="form__title">Change profile picture</h2>
          <fieldset class="form__fieldset">
            <label class="form__field">
              <input
                type="url"
                class="form__input"
                id="avatarlink"
                name="link"
                placeholder="Image link"
                required
              />
              <span class="form__input-error avatarlink-input-error">
                Hello This is an Error
              </span>
            </label>
          </fieldset>
          <fieldset class="form__fieldset">
            <button
              aria-label="submit"
              type="submit"
              class="form__button form__submit"
            >
              Save
            </button>

            <button
              aria-label="exit"
              class="form__button modal__button-close"
              type="button"
            >
              <img
                src="<%=require('./images/CloseIcon.svg')%>"
                alt="Close icon"
                class="modal__close"
              />
            </button>
          </fieldset>
        </form>
      </div>
      {/* <!-- Add Card Modal --> */}
      <div class="modal" id="modalAdd">
        {/* <!-- Form --> */}
        <form
          action="#"
          class="form modal__container"
          name="cardForm"
          novalidate
        >
          <h2 class="form__title">New Place</h2>
          <fieldset class="form__fieldset">
            <label class="form__field">
              <input
                type="text"
                class="form__input"
                id="title"
                name="name"
                placeholder="Title"
                minlength="1"
                maxlength="30"
                required
              />
              <span class="form__input-error title-input-error">
                Hello This is an Error
              </span>
            </label>
            <label class="form__field">
              <input
                type="url"
                class="form__input"
                id="link"
                name="link"
                placeholder="Image link"
                required
              />
              <span class="form__input-error link-input-error">
                Hello This is an Error
              </span>
            </label>
          </fieldset>
          <fieldset class="form__fieldset">
            <button
              aria-label="submit"
              type="submit"
              class="form__button form__submit"
            >
              Create
            </button>

            <button
              aria-label="exit"
              class="form__button modal__button-close"
              type="button"
            >
              <img
                src="<%=require('./images/CloseIcon.svg')%>"
                alt="Close icon"
                class="modal__close"
              />
            </button>
          </fieldset>
        </form>
      </div>
      {/* <!-- Photo Expand Modal --> */}
      <div class="modal" id="modalPicture">
        <div class="modal__container">
          <img class="modal__picture-full" src="#" alt="expandedImage" />
          <p class="modal__piture-paragraph"></p>
          <button
            aria-label="exit"
            class="button modal__button-close"
            type="button"
          >
            <img
              src="<%=require('./images/CloseIcon.svg')%>"
              alt="Close icon"
              class="modal__close"
            />
          </button>
        </div>
      </div>

      {/* <!-- Delete Card Modal --> */}
      <div class="modal" id="modalDelete">
        <div class="modal__deletedcard modal__container">
          <h2 class="modal__confirmation-title">Are you sure?</h2>
          <button class="modal__button-yes">Yes</button>
          <button
            aria-label="exit"
            class="button modal__button-close"
            type="button"
          >
            <img
              src="<%=require('./images/CloseIcon.svg')%>"
              alt="Close icon"
              class="modal__close"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

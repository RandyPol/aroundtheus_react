// API Token
export const BASE_URL = 'https://around.nomoreparties.co/v1/group-12'
export const AUTH_TOKEN = '04304a71-d9c0-49b2-8283-cfc2c5afdf53'

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl
    this._headers = options.headers
  }

  // here is the code of the checking the response status
  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Error: ${res.status}`)
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse)
  }

  /**
   *
   * @returns {Promise} Promise object represents the result of fetching the initial cards from the server
   */

  getInitialCards() {
    return this._request(`${this._baseUrl}/cards`, {
      headers: this._headers,
    })
  }

  /**
   *
   * @returns {Promise} Promise object represents the result of fetching the user info from the server
   */

  getUserInfo() {
    return this._request(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    })
  }

  /**
   *
   * @returns {Promise} Promise object represents the result of fetching the user info and the initial cards from the server using Promise.all
   */
  loadData() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()])
  }

  /**
   *
   * @param {} data user info to be updated
   * @returns The update user info from the server
   */

  patchUserInfo(data) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data),
    })
  }

  /**
   *
   * @param {*} data card info to be posted
   * @returns
   */

  postNewCard(data) {
    return this._request(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    })
  }

  /**
   *
   * @param {*} cardId card id to be deleted
   * @returns
   */

  deleteCard(cardId) {
    return this._request(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
  }

  /**
   *
   * @param {*} cardId card id to be liked
   * @returns
   */

  putCardLike(cardId) {
    return this._request(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers,
    })
  }

  /**
   *
   * @param {*} card id to be unliked
   * @returns
   */

  deleteCardLike(cardId) {
    return this._request(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
  }

  /**
   *
   * @param {*} data avatar info to be updated
   * @retuns The updated avatar info from the server
   */

  patchUserAvatar(data) {
    return this._request(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data),
    })
  }
}

const api = new Api({
  baseUrl: BASE_URL,
  headers: {
    authorization: AUTH_TOKEN,
    'Content-Type': 'application/json',
  },
})

export default api

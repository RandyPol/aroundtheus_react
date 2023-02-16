import React from 'react'
import logo from '../images/logo_around_us.svg'
const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="The logo of Around The U.S." className="logo" />
      </div>
    </header>
  )
}

export default Header

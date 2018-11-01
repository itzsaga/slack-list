import React, { Component } from 'react'
import { Link } from 'gatsby'

class Hero extends Component {
  state = { burgerOpen: false }

  toggleBurgerMenu = () => {
    this.setState(({ burgerOpen }) => ({ burgerOpen: !burgerOpen }))
  }

  render() {
    const { location } = this.props
    return (
      <section className="hero is-dark is-medium">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                  <strong>{this.props.siteTitle}</strong>
                </Link>
                <span
                  role="button"
                  className={`navbar-burger ${this.state.burgerOpen &&
                    'is-active'}`}
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="nabbarMenuHeroA"
                  onClick={this.toggleBurgerMenu}
                >
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                </span>
              </div>
              <div
                className={`navbar-menu  ${this.state.burgerOpen &&
                  'is-active'}`}
                id="navbarMenuHeroA"
              >
                <div className="navbar-end">
                  <Link
                    className={`navbar-item ${location === '/' && 'is-active'}`}
                    to="/"
                  >
                    Home
                  </Link>
                  <Link
                    className={`navbar-item ${location === 'about' &&
                      'is-active'}`}
                    to="/about"
                  >
                    About
                  </Link>
                  <Link
                    className={`navbar-item ${location === '/list' &&
                      'is-active'}`}
                    to="/list"
                  >
                    The List
                  </Link>
                  <span className="navbar-item">
                    <a
                      className="button is-dark is-inverted"
                      href="https://github.com/itzsaga/slack-list"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon">
                        <i className="fa fa-github" />
                      </span>
                      <span>Contribute</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <div className="container">
            <h1 className="title">Slack List</h1>
          </div>
        </div>

        {location === '/list' && (
          <div className="hero-foot">
            <div className="tabs">
              <div className="container">
                <ul>
                  <li>
                    <a href="#location">Location Based</a>
                  </li>
                  <li>
                    <a href="#it">IT Based</a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="#">Product Based</a>
                  </li>
                  <li>
                    <a href="#programming">Programming Based</a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="#">Hardware Based</a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="#">Finance and Marketing Based</a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="#">Miscellaneous Based</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </section>
    )
  }
}

export default Hero

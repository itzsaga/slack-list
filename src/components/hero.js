import React, { Component } from 'react'
import { Link } from 'gatsby'

class Hero extends Component {
  render() {
    return (
      <section className="hero is-dark is-medium">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="/">
                  <strong>{this.props.siteTitle}</strong>
                </a>
                <span
                  className="navbar-burger burger"
                  data-target="navbarMenuHeroA"
                >
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div className="navbar-menu">
                <div className="navbar-end">
                  <Link className="navbar-item is-active" to="/">
                    Home
                  </Link>
                  <Link className="navbar-item" to="/about">
                    About
                  </Link>
                  <Link className="navbar-item" to="/list">
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
      </section>
    )
  }
}

export default Hero

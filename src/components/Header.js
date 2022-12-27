import React from 'react'

function Header() {
  return (
    <header className="py-4">
      <nav className="navbar navbar-expand-md bg-light navbar-light fixed-top">
        <div className="container">
          <a href="index.html" className="navbar-brand text-uppercase fw-bold">
            <span className="bg-primary bg-gradient p-1 rounded-3 text-light">
              Valdès
            </span>{' '}
            AGBOKONI
          </a>
          <button
            className="navbar-toggler  border border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list"></i>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#valdesagbokoni">
                  Qui suis-je ?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#expertise">
                  Expertises
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

import React from 'react'

function Header() {
  return (
    <div>
      
      <header className="header" id="top">
  <nav className="nav container" aria-label="Primary">
    <a className="brand" href="#top" aria-label="Smart Home Care Home">
      <span className="brand__mark" aria-hidden="true">
        <svg width={28} height={28} viewBox="0 0 28 28" fill="none">
          <path
            d="M14 2.25 24.5 10v15.75a.9.9 0 0 1-.9.9H4.4a.9.9 0 0 1-.9-.9V10L14 2.25Z"
            className="brand__markFill"
          />
          <path d="M14 25.1V15.6" className="brand__markStroke" />
          <path d="M9.4 15.6h9.2" className="brand__markStroke" />
          <path
            d="M14 8.2c1.9-2.1 4.6-.9 4.6 1.4 0 2.5-2.8 4.2-4.6 5.7-1.8-1.5-4.6-3.2-4.6-5.7 0-2.3 2.7-3.5 4.6-1.4Z"
            className="brand__heart"
          />
        </svg>
      </span>
      <span className="brand__text">Smart Home Care</span>
      <span className="brand__pill">Premium</span>
    </a>
    <button
      className="nav__toggle"
      type="button"
      aria-expanded="false"
      aria-controls="navMenu"
    >
      <span className="sr-only">Open menu</span>
      <span className="nav__bars" aria-hidden="true" />
    </button>
    <div className="nav__menu" id="navMenu">
      <a className="nav__link" href="#features">
        Features
      </a>
      <a className="nav__link" href="#how">
        How it works
      </a>
      <a className="nav__link" href="#services">
        Services
      </a>
      <a className="nav__link" href="#reviews">
        Reviews
      </a>
      <a className="nav__link" href="#security">
        Trust &amp; Safety
      </a>
      <a className="nav__link" href="caregiver.html">
        Caretaker View
      </a>
      <a className="nav__link" href="dashboard.html">
        Dashboard
      </a>
      <div className="nav__actions">
        <a className="btn btn--ghost" href="#demo">
          Live Demo
        </a>
        <a className="btn btn--primary" href="#cta">
          Book a caregiver
        </a>
      </div>
    </div>
  </nav>
</header>
      
    </div>
  )
}

export default Header
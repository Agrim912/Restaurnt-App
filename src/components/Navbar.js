import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top bg-body-tertiary">
        <div className="container">
          <button className="btn btn-outline-success me-2" type="button"><a className="navbar-brand" href="/breakfast">BreakFast</a></button>
          <button className="btn btn-outline-success me-2" type="button"><a className="navbar-brand" href="/lunch">Lunch</a></button>
          <button className="btn btn-outline-success me-2" type="button"><a className="navbar-brand" href="/dinner">Dinner</a></button>
          <button className="btn btn-outline-success me-2" type="button"><a className="navbar-brand" href="/">All</a></button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

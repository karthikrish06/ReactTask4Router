import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to='/all' className="nav-link" aria-current="page" href="#">ALL</Link>
            </li>
            <li className="nav-item">
              <Link to='/fsd' className="nav-link" href="#">FULL STACK DEVELOPMENT</Link>
            </li>
            <li className="nav-item">
              <Link to='/datascience' className="nav-link" href="#">DATA SCIENCE</Link>
            </li>
            <li className="nav-item">
              <Link to='/cybersecurity' className="nav-link" href="#">CYBER SECURITY</Link>
            </li>
            <li className="nav-item">
              <Link to='/career' className="nav-link" href="#">CAREER</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
}

export default Navbar
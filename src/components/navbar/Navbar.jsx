import "./navbar.css"
import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div >
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
  <Link className="navbar-brand" to="/">BookingShop.com</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link className="nav-link" href="/">About</Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" href="/">List</Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" href="/">Hotel</Link>
      </li>

      <li class="nav-item">
        <Link className="nav-link" href="/">Contact us</Link>
      </li>
      
      
      
    </ul>

    <ul class="navbar-nav ms-auto">
    <li class="nav-item">
        <button className="nav-link" to="/">Register</button>
      </li>
      <li class="nav-item">
        <button className="nav-link" to="/">Login</button>
      </li>
    </ul>
    
  </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
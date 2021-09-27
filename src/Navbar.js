import React from 'react'
import './Navbar.css'
import logo from './logo.png' 
import { Link } from 'react-router-dom';
const Navbar = () => {
    return(
      <div className="nv">
          <nav class="navbar navbar-light" style={{backgroundColor: '#3778c2'}}>
          
  <div class="container-fluid">
  <Link to="/"><a class="navbar-brand" style={{color:'white'}}>Home</a></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
    
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    );
}

export default Navbar;
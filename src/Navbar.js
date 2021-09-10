import React from 'react'
import './Navbar.css'
import logo from './logo.png' 
import { Link } from 'react-router-dom';
const Navbar = () => {
    return(
      <div className="nv">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
          
  <div class="container-fluid">
    <a class="navbar-brand" href="#">AlgoVis</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link to="/"><a class="nav-link active" aria-current="page">Home</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    );
}

export default Navbar;
import React from 'react';
import card from './card.png'
import './Body.css';
import card2 from './card2.png'
import { Link } from 'react-router-dom';
import search from './search.png'
import sort from './sort.png'
import path from './path.png'


const Body = () => {
    return(
        <div className="body">
  <div className="row">
    <div className="col">
    <div className="card">
  <img src={search} className="card-img-top" alt="..." height="200px" />
  <div className="card-body">
    <h5 className="card-title">Search Methods</h5>
    <p className="card-text">Search an element from array using different methods.</p>
    <Link to="/searchpage"><button className="btn btn-primary">Let's Visualize!</button></Link>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card">
  <img src={sort} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Sorting Algorithms</h5>
    <p className="card-text">Sort array using different sorting algorithms.</p>
    <Link to="/sortingpage"><button className="btn btn-primary">Let's Visualize!</button></Link>
  </div>
</div>
    </div>
    {/* <div className="col">
    <div className="card">
  <img src={card} className="card-img-top" alt="..." height="225px" />
  <div className="card-body">
    <h5 className="card-title">Backtracking</h5>
    <p className="card-text">Coming soon</p>
    <Link to="/backtrackingpage"><button className="btn btn-primary">Let's Visualize!</button></Link>
  </div>
</div>
    </div> */}
    <div className="col">
    <div className="card">
  <img src={path} className="card-img-top" alt="..." height="225px" />
  <div className="card-body">
    <h5 className="card-title">Path Finding</h5>
    <p className="card-text">Coming soon</p>
    <Link to="/graphpage"><button className="btn btn-primary">Let's Visualize!</button></Link>
  </div>
</div>
    </div>
  </div>
</div>
    );
}

export default Body;
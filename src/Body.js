import React from 'react';
import card from './card.png'
import './Body.css';
import card2 from './card2.png'
import { Link } from 'react-router-dom';


const Body = () => {
    return(
        <div className="body">
  <div className="row">
    <div className="col">
    <div className="card">
  <img src={card} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Search Methods</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/searchpage"><button className="btn btn-primary">Let's Visualize!</button></Link>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card">
  <img src={card2} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Sorting Algorithms</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/sortingpage"><button className="btn btn-primary">Let's Visualize!</button></Link>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card">
  <img src={card} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Backtracking</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/backtrackingpage"><button className="btn btn-primary">Let's Visualize!</button></Link>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card">
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Graph Algorithms</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/graphpage"><button className="btn btn-primary">Let's Visualize!</button></Link>
  </div>
</div>
    </div>
  </div>
</div>
    );
}

export default Body;
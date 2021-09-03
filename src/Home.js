import React from 'react';
import abc from './abc.png'
import './Home.css'
import Body from './Body';
const Home = () => {
    return(

        <div className="home" >
            <div className="home2">
            <div className="centered">Algorithm Visualizer</div>
            <Body />
            </div>
        </div>
    
    );
}

export default Home;
import React from "react";
import './Node.css'

const Node = (props) => {
    console.log(props);
    return(
        <div className="node" id={props.key}>
            
        </div>
    )
}

export default Node;
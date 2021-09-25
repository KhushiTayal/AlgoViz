import React from "react";
import './Node.css'

const Node = (props) => {
    const {wallPresent, startNode, endNode, vis, row, col} = props;
    
    const decideClass = () => {
        if(wallPresent===true){
            return "node wall";
        }
        else if(startNode===true){
            return "node start";
        }
        else if(endNode===true){
            return "node end";
        }
        else if(vis===true){
            return "node vis";
        }
        else{
            return "node";
        }
    }

    return(
        <div id={`node ${row}-${col}`} className={decideClass()} >
            
        </div>
    )
}

export default Node;
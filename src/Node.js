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
        <div className={decideClass()} id={props.key}>
            
        </div>
    )
}

export default Node;
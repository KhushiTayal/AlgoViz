import React, {useState} from 'react';
import Node from './Node'
import './Graphpage.css'

const Graphpage = () => {
    const grid=[];
    const width = window.innerWidth;
        const height = window.innerHeight;
        const num_row = Math.max(Math.floor(height/25),10);
        const num_col = Math.floor(width/25) -1;
        const startNode = {
            row:4,
            col:4
        };
        const endNode = {
            row: num_row-5,
            col: num_col-5
        }
    for(let i=0; i<num_row; i++){
        const row=[];
        for(let j=0; j<num_col; j++){
            const col=[];
            row.push(col);
        }
        grid.push(row);
    }
    const renderGrid = grid.map((row, row_idx)=>{
        return(
            <div className="row">
               { row.map((node, node_idx)=>{
                   const {wallPresent, startNode, endNode, vis} = node;
                    return(
                        // <div className="nodes">
                        //     <Node />
                        // </div>
                        <Node
                        key={node_idx}
                        wallPresent={wallPresent}
                        startNode={startNode}
                        endNode={endNode}
                        vis={vis} 
                         />
                    )
                })
            }
            </div>
        )
    })
    
    return(
        <div className="containerrr">
         {renderGrid}
         <div className="container">
         <button type="button" class="btn btn-outline-primary">BFS</button>
         <button type="button" class="btn btn-outline-secondary">DFS</button>
<button type="button" class="btn btn-outline-success">Dijsktra</button>
<button type="button" class="btn btn-outline-danger">Create Maze</button>
<button type="button" class="btn btn-outline-warning">Clear Path</button>
<button type="button" class="btn btn-outline-info">Clear Grid</button>
<button type="button" class="btn btn-outline-light">Light</button>
<button type="button" class="btn btn-outline-dark">Dark</button>
         </div>
        </div>
    )
}

export default Graphpage;
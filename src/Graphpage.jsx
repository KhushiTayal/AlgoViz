import React, {useState, useEffect} from 'react';
import Node from './Node'
import './Graphpage.css'
import bfs from './Bfs';
import { getNodesInShortestPathOrder } from './Bfs';

const Graphpage = () => {
    const [grid, setGrid] = useState([]);
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
    useEffect(() => {
        const mygrid = getgrid(num_row, num_col);
        mygrid[startNode.row][startNode.col].startNode=true;
        mygrid[num_row-5][num_col-5].endNode=true;
        setGrid([...grid, ...mygrid]);
        return () => {
            
        }
    }, [])
    
        const createNode = (row, col) => {
            return(
                {wallPresent:false,
                    startNode:false,
                    endNode:false,
                    vis:false,
                    row,
                    col,
                    distance:Infinity,
                    previousNode:null
                }
            )
        }
    const getgrid = (num_row, num_col) => {
        const grid = [];
        for(let i=0; i<num_row; i++){
            const row=[];
            for(let j=0; j<num_col; j++){
                row.push(createNode(i, j));
            }
            grid.push(row);
        }
        return grid;
    }
    
    const renderGrid = grid.map((row, row_idx)=>{
        return(
            <div className="row">
               { row.map((node, node_idx)=>{
    
                   const {wallPresent, startNode, endNode, vis, row, col} = node;
                    return(
                        // <div className="nodes">
                        //     <Node />
                        // </div>
                        <Node
                        row={row}
                        col={col}
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

    const createMaze = () => {
  //  console.log("Heyya")
    let newBoard = grid.slice();
    const pairs = [];
    for(let i = 0;i<num_row;i++){
        for( let j = 0;j <num_col;j++){
            const random = Math.floor(Math.random()*100)+10;
            if( random%4 === 0 ){
                newBoard[i][j].wallPresent = true;
                pairs.push({
                    xx:i,
                    yy:j
                });
            }
        }
    }
    
    for( let i = 0;i<pairs.length;i++ ){
        setTimeout(() => {
            if((pairs[i].xx!==startNode.row || pairs[i].yy!==startNode.col) && (pairs[i].xx!==endNode.row || pairs[i].yy!==endNode.col) ){
                const a = document.getElementById(`node ${pairs[i].xx}-${pairs[i].yy}`);
               // console.log(a);
                a.className = "node wall";
             }
        }, i*20);
    }
    // setGrid([...grid, ...newBoard]);
    return pairs;
    }

    const callBFS = () => {
        const animations = bfs(grid, startNode, endNode, num_row, num_col);
        const bfsPath = getNodesInShortestPathOrder(endNode, grid, startNode);
        animateGrid(bfsPath, animations);
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function animatePath(bfsPath, animations){
        for(let j=0; j<bfsPath.length; j++){
           // setTimeout(() => {
                if((animations[j].row!==startNode.row || animations[j].col!==startNode.col) && (animations[j].row!==endNode.row || animations[j].col!==endNode.col) ){
                    const a = document.getElementById(`node ${bfsPath[j].row}-${bfsPath[j].col}`);
                    console.log(a);
                    a.className = "node path";
                    await sleep(50);
                 }
           // }, j*50);
        }
    }

    async function animateGrid(bfsPath, animations) {
        for(let i=0; i<=animations.length; i++){
            if(i === animations.length){
                await sleep(1000);
                await animatePath(bfsPath, animations);
                return;
            }
           // setTimeout(() => {
                if((animations[i].row!==startNode.row || animations[i].col!==startNode.col) && (animations[i].row!==endNode.row || animations[i].col!==endNode.col) ){
                    const a = document.getElementById(`node ${animations[i].row}-${animations[i].col}`);
                    //console.log(a);
                    a.className = "node vis";
                    await sleep(10);
                 }
           // }, i*1);
        }
    }

    return(
        <div className="containerrr">
         {renderGrid}
         <div className="container">
         <button type="button" class="btn btn-outline-primary" onClick={callBFS}>BFS</button>
         <button type="button" class="btn btn-outline-secondary">DFS</button>
<button type="button" class="btn btn-outline-success">Dijsktra</button>
<button type="button" class="btn btn-outline-danger" onClick={createMaze}>Create Maze</button>
<button type="button" class="btn btn-outline-warning">Clear Path</button>
<button type="button" class="btn btn-outline-info" onClick={() => window.location.reload(false)}>Clear Grid</button>
<button type="button" class="btn btn-outline-light">Light</button>
<button type="button" class="btn btn-outline-dark">Dark</button>
         </div>
        </div>
    )
}

export default Graphpage;
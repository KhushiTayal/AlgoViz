import React from "react";

function bfs (grid, startNode, endNode, num_row, num_col){
    const sRow = startNode.row;
    const eRow = endNode.row;
    const sCol = startNode.col;
    const eCol = endNode.col;
    const queue = [];
    const nodes=[]
    queue.push(startNode);
    grid[sRow][sCol].vis = true;
    var min_dis = Infinity;
    while(!!queue.length){
        const node = queue[0];
        queue.shift();
        nodes.push(node);
       // console.log(node);
        if(node.endNode == true){
            //console.log(nodes);
            return nodes;
        }
        if(node.col<(num_col - 1) && grid[node.row][node.col +1].vis == false && grid[node.row][node.col +1].wallPresent==false){
            queue.push(grid[node.row][node.col +1]);
            grid[node.row][node.col +1].vis = true;
        }
        if(node.row<(num_row - 1) && grid[node.row +1][node.col].vis == false && grid[node.row + 1][node.col].wallPresent==false){
            queue.push(grid[node.row +1][node.col]);
            grid[node.row +1][node.col].vis = true;
        }
        if(node.row>0 && grid[node.row -1][node.col].vis == false && grid[node.row - 1][node.col].wallPresent==false){
            queue.push(grid[node.row -1][node.col]);
            grid[node.row -1][node.col].vis = true;
        }
        if(node.col>0 && grid[node.row][node.col -1].vis == false && grid[node.row][node.col - 1].wallPresent==false){
            queue.push(grid[node.row][node.col -1]);
            grid[node.row][node.col -1].vis = true;
        }
    }
    //startNode.vis = true;
    return nodes;
}

export default bfs;
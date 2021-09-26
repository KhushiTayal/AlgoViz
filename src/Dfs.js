import React from "react";

const visNodes = [];
function dfs (grid, startNode, endNode, num_row, num_col){
    letsDFS(startNode, grid, num_row, num_col);
    return visNodes;
}

const letsDFS = (currnode, grid, num_row, num_col) =>{
    // if(currnode.endNode === true){
    //     console.log("Yes")
    //     console.log(currnode)
    //     return;
    // }
    const stack = [];
    stack.push(currnode);

    while(!!stack.length){
    const node = stack.pop();

    if(node.endNode == true){
        return visNodes;
    }
    
    grid[node.row][node.col].vis = true;
    visNodes.push(grid[node.row][node.col]);

    if(node.col>0 && grid[node.row][node.col -1].vis == false && grid[node.row][node.col - 1].wallPresent==false){
        grid[node.row][node.col -1].previousNode=node;
        stack.push(grid[node.row][node.col -1]);
        //letsDFS(grid[node.row][node.col -1], grid, num_row, num_col);
    }
    if(node.row>0 && grid[node.row -1][node.col].vis == false && grid[node.row - 1][node.col].wallPresent==false){
        grid[node.row -1][node.col].previousNode=node;
        stack.push(grid[node.row -1][node.col]);
        //letsDFS(grid[node.row -1][node.col], grid, num_row, num_col);
    }
    if(node.row<(num_row - 1) && grid[node.row +1][node.col].vis == false && grid[node.row + 1][node.col].wallPresent==false){
        grid[node.row +1][node.col].previousNode=node;
        stack.push(grid[node.row +1][node.col]);
        //letsDFS(grid[node.row +1][node.col], grid, num_row, num_col);
    }
    if(node.col<(num_col - 1) && grid[node.row][node.col +1].vis == false && grid[node.row][node.col +1].wallPresent==false){
        grid[node.row][node.col +1].previousNode = node;
        stack.push(grid[node.row][node.col +1]);
        //letsDFS(grid[node.row][node.col +1], grid, num_row, num_col);
    }
    else;
 }
}

export function getNodesInShortestPathOrderdfs(finishNode, grid, startNode) {
    const nodesInShortestPathOrder = [];
    let node = grid[finishNode.row][finishNode.col];
    //console.log(grid);
    while (node !== startNode.previousNode) {
        console.log(node);
      nodesInShortestPathOrder.unshift(node);
      node = node.previousNode;
    }
    return nodesInShortestPathOrder;
  }

export default dfs;
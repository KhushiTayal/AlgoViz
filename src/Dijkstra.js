import React from "react";

const dijkstra = (grid, startNode, endNode, num_row, num_col) => {
    const animations = [];
    grid[startNode.row][startNode.col].distance = 0;
    const remainingNodes = [];
    for (const row of grid) {
        for (const node of row) {
          remainingNodes.push(node);
        }
      }

    while(!!remainingNodes.length){
        remainingNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
        
        const nearestNode = remainingNodes.shift();
       // console.log(nearestNode);
        if(nearestNode.wallPresent == true){
            continue;
        }
        if(nearestNode.distance == Infinity){
            return animations;
        }

        nearestNode.vis = true;
        animations.push(nearestNode);
        if(nearestNode.endNode == true){
            return animations;
        }
        updateUnvisitedNeighbors(nearestNode, grid);
    }
    return animations;
}

function updateUnvisitedNeighbors(node, grid) {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
    for (const neighbor of unvisitedNeighbors) {
      neighbor.distance = node.distance + 1;
      neighbor.previousNode = node;
     
    }
  }
  
  function getUnvisitedNeighbors(node, grid) {
    const neighbors = [];
    const {col, row} = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    return neighbors.filter(neighbor => !neighbor.vis);
  }

  export function getNodesInShortestPathOrderDijkstra(finishNode, grid, startNode) {
    const nodesInShortestPathOrder = [];
    let node = grid[finishNode.row][finishNode.col];
    //console.log(grid);
    while (node !== null) {
        console.log(node);
      nodesInShortestPathOrder.unshift(node);
      node = node.previousNode;
      
    }
    return nodesInShortestPathOrder;
  }

export default dijkstra;
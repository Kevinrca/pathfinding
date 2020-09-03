




function dijkstra(grid, startNode, finishNode) {
    // handle unexpected situations
    if(!startNode || !finishNode || startNode === finishNode) {
        return false;
    }

    const visitedNodesInOrder = [];
    startNode.distance = 0;
    const unvisitedNodes = getAllNodes(grid);

    while(!!unvisitedNodes.length) {
        sortNodes(unvisitedNodes);
        const closestNode = unvisitedNodes.shift();

        // if we hit a wall, stop and render the next closest node
        if(closestNode.isWall === true) continue;
        // if we don't have any nodes available, stop and return visitedNodeInOrder
        if(closestNode.distance === Infinity) return visitedNodesInOrder;

        closestNode.isVisited = true;
        visitedNodesInOrder.push(closestNode);

        if(closestNode === finishNode) {
            return visitedNodesInOrder;
        }

        updateUnvisitedNeighbors(closestNode, grid);
    }
}





function getAllNodes(grid) {
    const nodes = [];
    for (const row of grid) {
        for (const node of row) {
            nodes.push(node);
        }
    }
    return nodes;
}

function sortNodes(unvisitedNodes) {
    unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance );
}


function updateUnvisitedNeighbors(node, grid) {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
    for(const neighbor of unvisitedNeighbors) {
        neighbor.distance = node.distance + 1;
        neighbor.previousNode = node;
    }
}

function getUnvisitedNeighbors(node, grid) {
    const neighbors = [];
    const { row, col } = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);

    return neighbors.filter(neighbor => !neighbor.isVisited);
}


export { dijkstra };
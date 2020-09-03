




function dijkstra(grid, startNode, finishNode) {
    if(!startNode || !finishNode || startNode === finishNode) {
        return false;
    }

    const visitedNodesInOrder = [];
    startNode.distance = 0;
    const unvisitedNodes = getAllNodes(grid);

    while(!!unvisitedNodes.length) {
        sortNodes(unvisitedNodes);
        const closestNode = unvisitedNodes.shift();
        closestNode.isVisited = true;
        visitedNodesInOrder.push(closestNode);

        console.log(closestNode);

        if(closestNode === finishNode) {
            console.log('success');
            return visitedNodesInOrder;
        }
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



export { dijkstra };
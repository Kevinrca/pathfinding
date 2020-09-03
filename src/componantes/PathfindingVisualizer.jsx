import React, { useState, useEffect } from 'react'
import '../css/PathfindingVisualizer.css'
import Node from './node.jsx';

import { dijkstra } from '../algorithm/dijkstra'

const START_NODE_ROW = 9;
const START_NODE_COL = 9;
const FINISH_NODE_ROW = 9;
const FINISH_NODE_COL = 39;



function PathfindingVisualizer() {
    // Variables
    const [grid, setGrid] = useState([]);


    // Create a grid of nodes
    useEffect(() => {
        setGrid(createGrid());
    }, []);


    function vizualiseDijkstra() {
        const startNode = grid[START_NODE_ROW][START_NODE_COL];
        const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
        const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
        console.log(visitedNodesInOrder);
        return visitedNodesInOrder;
    }



    // Render
    return (
        <div className="Pathfinding">
            <button onClick={() => vizualiseDijkstra()}>
                Vizualise dijkstra algorithm
            </button>
            {grid.map((row, rowIndex) => {
                return (
                    <div key={rowIndex}>
                        {row.map((node, nodeIndex) => {
                            const {row, col, isStart, isFinish, distance, isVisited, previousNode } = node;
                            return (
                                <Node 
                                    key={nodeIndex}
                                    row={row}
                                    col={col}
                                    isStart={isStart}
                                    isFinish={isFinish}
                                    distance={distance}
                                    isVisited={isVisited}
                                />
                                )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default PathfindingVisualizer





// Functions
function createGrid() {
    const grid = [];

    for(let row = 0; row < 20; row++) {
        const currentRow = [];

        for(let colum = 0; colum < 50; colum++) {
            currentRow.push(createNode(row, colum));
        }

        grid.push(currentRow);
    }

    return grid;
}


function createNode(row, col) {
    return {
        row,
        col,
        isStart: row === START_NODE_ROW && col === START_NODE_COL,
        isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
        distance: Infinity,
        isVisited: false,
        previousNode: null
    }
}

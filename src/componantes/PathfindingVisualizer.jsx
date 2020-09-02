import React, { useState, useEffect } from 'react'
import '../css/PathfindingVisualizer.css'
import Node from './node.jsx';

const START_NODE_ROW = 9;
const START_NODE_COL = 9;
const FINISH_NODE_ROW = 9;
const FINISH_NODE_COL = 39;



function PathfindingVisualizer() {
    
    // Variables
    const [nodes, setNodes] = useState([]);

    // Create a grid of nodes
    useEffect(() => {
        const grid = []
        for(let row = 0; row < 20; row++) {
            const currentRow = [];
            for(let colum = 0; colum < 50; colum++) {
                currentRow.push(createNode(row, colum));
            }
            grid.push(currentRow);
        }
        setNodes(grid);
    }, []);



    
    return (
        <div className="Pathfinding">
            {nodes.map((row, rowIndex) => {
                return (
                    <div key={rowIndex}>
                        {row.map((node, nodeIndex) => {
                            const {row, col, isStart, isFinish} = node;
                            return (
                                <Node 
                                    key={nodeIndex}
                                    isStart={isStart}
                                    isFinish={isFinish}
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
function createNode(row, col) {
    return {
        row,
        col,
        isStart: row == START_NODE_ROW && col == START_NODE_COL,
        isFinish: row == FINISH_NODE_ROW && col == FINISH_NODE_COL
    }
}

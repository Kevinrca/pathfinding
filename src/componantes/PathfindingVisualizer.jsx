import React, { useState, useEffect } from 'react'
import '../css/PathfindingVisualizer.css'
import Node from './node.jsx';



function PathfindingVisualizer() {
    
    // Variables
    const [nodes, setNodes] = useState([]);

    // Create a grid of nodes
    useEffect(() => {
        const temporaryNodes = []
        for(let rows = 0; rows < 15; rows++) {
            const currentRow = [];
            for(let colums = 0; colums < 50; colums++) {
                currentRow.push([]);
            }
            temporaryNodes.push(currentRow);
        }
        setNodes(temporaryNodes);
    }, []);


    
    return (
        <div className="Pathfinding">
            {nodes.map((row, rowIndex) => {
                return (
                    <div key={rowIndex}>
                        {row.map(node => <Node></Node>)}
                    </div>
                )
            })}
        </div>
    )
}

export default PathfindingVisualizer

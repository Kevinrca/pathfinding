import React from 'react'
import '../css/Node.css'

function Node({ row, col, isStart, isFinish, isVisited, isWall, onMouseDown, onMouseEnter, onMouseUp }) {
    const extendedClassName = isStart 
        ? "start-node" 
        : isFinish 
        ? "finish-node"
        : isWall 
        ? "node-wall"
        : "";

    return (
        <div 
            id={`node-${row}-${col}`}
            className={`node ${extendedClassName}`}
            onMouseDown={() => onMouseDown(row, col)}
            onMouseEnter={() => onMouseEnter(row, col)}
            onMouseUp={() => onMouseUp()}
        >
            
        </div>
    )
}

export default Node

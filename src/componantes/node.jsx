import React from 'react'
import '../css/Node.css'

function Node({ row, col, isStart, isFinish, isVisited, isWall, onMouseDown, onMouseEnter, onMouseUp, isShortestPath }) {
    const extendedClassName = isStart 
        ? "start-node" 
        : isFinish 
        ? "finish-node" 
        : isVisited 
        ? "node-visited" 
        : isWall 
        ? "node-wall"
        : isShortestPath
        ? "node-shortest-path"
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

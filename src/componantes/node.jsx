import React from 'react'
import '../css/Node.css'

function Node({ row, col, isStart, isFinish, isVisited }) {
    const extendedClassName = isStart ? "start-node" : isFinish ? "finish-node" : isVisited ? "node-visited" : "";

    return (
        <div 
            id={`node-${row}-${col}`}
            className={`node ${extendedClassName}`}>
            
        </div>
    )
}

export default Node

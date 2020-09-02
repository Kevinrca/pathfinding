import React from 'react'
import '../css/Node.css'

function Node({ isStart, isFinish, distance, isVisited }) {
    const extendedClassName = isStart ? "start-node" : isFinish ? "finish-node" : "";

    return (
        <div className={`node ${extendedClassName}`}>
            
        </div>
    )
}

export default Node

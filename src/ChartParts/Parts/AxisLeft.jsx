import React from 'react'

const AxisLeft = ({yScale}) => 
    yScale.domain().map(tickValue => (
        <text
            key={tickValue}
            style={{ textAnchor: 'end' }}
            x={-3}
            dy=".32em"
            y={yScale(tickValue) + yScale.bandwidth() / 2}
        >
            {tickValue}
        </text>
    ))
    
export default AxisLeft
import React from "react"
// import PropTypes from "prop-types"
import { max, scaleBand, scaleLinear } from "d3"
import "./styles.css"
import Chart from "../ChartFrame/Chart"
import { useChartDimensions } from "../ChartFrame/utils";

const goalsAccessor = d => d.goals
const keyAccessor = (d, i) => i

const BarChart = ({ data }) => {
    const [ref, dimensions] = useChartDimensions()

    const yScale = scaleBand()
        .domain(data.map(d => d.abbr))
        .range([0, dimensions.height - dimensions.marginTop - dimensions.marginBottom])

    const xScale = scaleLinear()
        .domain([0, max(data, goalsAccessor)]) // accessor is for the metric
        .range([0, dimensions.width - dimensions.marginLeft - dimensions.marginRight])

    return (
        <div className="BarChart" ref={ref}>
            <Chart dimensions={dimensions}> 
                {data.map((d, i) => <rect x={0} y={yScale(d.abbr)} width={xScale(goalsAccessor(d))} height={yScale.bandwidth()} key={keyAccessor(d, i)} />)}
            </Chart>
        </div>
    )
}

export default BarChart
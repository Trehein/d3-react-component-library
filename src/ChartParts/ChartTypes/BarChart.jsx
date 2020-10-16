import React from "react"
// import PropTypes from "prop-types"
// import * as d3 from "d3"
import "./styles.css"
import Chart from "../ChartFrame/Chart"
import { useChartDimensions } from "../ChartFrame/utils";

const BarChart = ({ data }) => {
    const [ref, dimensions] = useChartDimensions()

    return (
        <div className="BarChart" ref={ref}>
            <Chart dimensions={dimensions}>
                <g>

                </g>
            </Chart>
        </div>
    )
}

export default BarChart
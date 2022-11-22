import React from 'react'
import { Chart } from "react-google-charts";

const PieChart = (props) => {
  return (
    <Chart
      chartType="PieChart"
      data={props.data}
      options={props.options}
      width={"100%"}
      height={"400px"}
    />
  )
}

export default PieChart
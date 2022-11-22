import React from 'react'
import { Chart } from "react-google-charts";


const ChartComponent = (props) => {
  return (
      <Chart chartType="ColumnChart" width="100%" height="400px" data={props.data} format="currency" options={props.options} />
  )
}

export default ChartComponent
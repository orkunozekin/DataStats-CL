import React from 'react'
import { Line } from 'react-chartjs-2'
import { useDataContext } from '../../Context/DataContext';

import './Chart.css'

const Chart = () => {

  const { labels, dataSets } = useDataContext()

  const data = {
    labels: labels,
    datasets: dataSets
  }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }


  return (
    <div className="line-chart-wrapper">
      <Line data={data} options={options} />
    </div>
  )
}

export default Chart

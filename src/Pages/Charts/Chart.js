import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { useDataContext } from '../../Context/DataContext';

import './Chart.css'

const Chart = () => {

  const { labels, dataSets, header } = useDataContext()

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

  const [option, setOption] = useState('Graph')
  const formatOptions = ['Graph', 'Table']

  return (
    <div className="line-chart-wrapper">
      <h2>{header}</h2>
      <select className="dropdown" name="format options" onChange={(e) => setOption(e.target.value)}>
        {formatOptions.map((eachOption, idx) => (
          <option key={idx} value={eachOption} >{eachOption}</option>
        )
        )}
      </select>
      {option === 'Graph' && <Line data={data} options={options} />}
      {/* {option === 'Table' && } */}
    </div>
  )
}

export default Chart

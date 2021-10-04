import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { useDataContext } from '../../Context/DataContext';
import Chart from '../Chart/Chart';
import TableFormat from '../TableFormat/TableFormat';

import './DataDisplay.css'

const DataDisplay = () => {


  const [option, setOption] = useState('Graph')
  const formatOptions = ['Graph', 'Table']


  return (
    <div className="line-chart-wrapper">
      <h1>Data Stats</h1>
      <select className="dropdown" name="format options" onChange={(e) => setOption(e.target.value)}>
        {formatOptions.map((eachOption, idx) => (
          <option key={idx} value={eachOption} >{eachOption}</option>
        )
        )}
      </select>
      {option === 'Graph' && <Chart />}
      {option === 'Table' && <TableFormat />}
    </div>
  )
}

export default DataDisplay

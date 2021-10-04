import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import ToggleBtn from '../../Components/ToggleBtn/ToggleBtn';
import { useDataContext } from '../../Context/DataContext';
import Chart from '../Chart/Chart';
import TableFormat from '../TableFormat/TableFormat';

import './DataDisplay.css'

const DataDisplay = () => {

  const { header } = useDataContext()

  const [option, setOption] = useState('Graph')

  return (
    <div className="data-display-wrapper">
      <header>
        <h1>{header}</h1>
        <ToggleBtn setOption={setOption} />
      </header>
      {option === 'Graph' && <Chart />}
      {option === 'Table' && <TableFormat />}
    </div>
  )
}

export default DataDisplay

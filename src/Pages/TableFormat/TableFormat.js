import React from 'react'

import Table from 'react-bootstrap/Table'
import { TableData, TableDataHeaders } from '../../MockData/MockData'

import './TableFormat.css'

const TableFormat = () => {

  const renderDate = (item, index) => {
    return (
      <tr key={index}>
        <td>{item.date}</td>
        <td>{item.ce}</td>
        <td>{item.cp}</td>
      </tr>
    )
  }

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            {
              TableDataHeaders.map((item, idx) => (
                <th key={idx}>{item}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {TableData.map(renderDate)}
        </tbody>
      </Table>
    </div>
  )
}


export default TableFormat

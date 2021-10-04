import React, { useContext, useState, useEffect } from 'react'

import MockData from '../MockData/MockData'

const DataContext = React.createContext()

export const useDataContext = () => useContext(DataContext)

export const DataProvider = ({ children }) => {

  const [labels, setLabels] = useState([])
  const [dataSets, setDataSets] = useState([])
  const [header, setHeader] = useState('')

  const getData = () => {
    const { labels, datasets, header } = MockData
    setLabels(labels)
    setDataSets(datasets)
    setHeader(header)
  }

  useEffect(() => {
    getData()
  }, [])

  const value = {
    labels,
    dataSets,
    header
  }



  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}
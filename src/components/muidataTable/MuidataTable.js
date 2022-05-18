import React from 'react'
import MUIDataTable from 'mui-datatables'
import { useSelector } from 'react-redux'
import columns from './columns'
import './MuidataTable.css'

const MuidataTable = () => {
  const arrayEmployee = useSelector(state => {
    return state
  })

  const data = arrayEmployee.employee.arrayEmployee

  /* A configuration for the table. */
  const options = {
    filterType: 'dropdown',
    selectableRows: 'none',
    print: false,
    download: false,
    responsive: 'simple',
    customBodyRender: (rowIndex, dataIndex) => dataIndex.rowIndex + 1,
  }

  return (
    <MUIDataTable
      title={'Employee List'}
      data={data}
      columns={columns}
      options={options}
    />
  )
}
export default MuidataTable

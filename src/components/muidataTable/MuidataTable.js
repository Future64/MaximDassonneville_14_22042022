import React from 'react'
import MUIDataTable from 'mui-datatables'
import './MuidataTable.css'

const MuidataTable = () => {

    const columns = [
        {
            name: 'firstName',
            label: 'First name',
            options: {
                filter: true,
                sort: true
            }
        },
        {
            name: 'lastName',
            label: 'Last name',
            options: {
                filter: true,
                sort: true
            }
        },
        {
            name: 'dateBirth',
            label: 'Date of birth',
            options: {
                filter: true,
                sort: true
            }
        },
        {
            name: 'startDate',
            label: 'Start date',
            options: {
                filter: true,
                sort: true
            }
        },
        {
            name: 'street',
            label: 'Street',
            options: {
                filter: true,
                sort: true
            }
        },
        {
            name: 'city',
            label: 'City',
            options: {
                filter: true,
                sort: true
            }
        },
        {
            name: 'state',
            label: 'State',
            options: {
                filter: true,
                sort: true
            }
        },
        {
            name: 'zipCode',
            label: 'Zip code',
            options: {
                filter: true,
                sort: true
            }
        },
        {
            name: 'departement',
            label: 'Departement',
            options: {
                filter: true,
                sort: true
            }
        }
    ]

    const data = [
        {
            firstName: 'Joe',
            lastName: 'James',
            dateBirth: '04/05/1955',
            startDate: '04/09/2022',
            street: '42 street Alley Raoth',
            city: 'Denver',
            state: 'DEN',
            zipCode: '45638',
            departement: 'Co'
        },
        {
            firstName: 'Ellioth',
            lastName: 'Reeds',
            dateBirth: '06/10/1995',
            startDate: '04/09/2022',
            street: '78 Arnold Shmith street',
            city: 'Denver',
            state: 'DEN',
            zipCode: '45638',
            departement: 'Co'
        }
    ]


    const options = {
        filterType: 'dropdown',
        selectableRows: 'none',
        print: false,
        download: false,
        responsive: 'simple',
        customBodyRender: (rowIndex, dataIndex) => dataIndex.rowIndex + 1
    }

    return (
        <MUIDataTable
            title={ 'Employee List' }
            data={ data }
            columns={ columns }
            options={ options }
        />
    )
}
export default MuidataTable
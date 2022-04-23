import React from 'react'
import MUIDataTable from "mui-datatables";
import { useState, useEffect, useContext, useRef, useMemo, useCallback } from 'react'
import { useParams, useLocation, useMatch} from 'react-router-dom'
import './MuidataTable.css'

const MuidataTable = () => {

  const columns = [
    {
      name: "firstName",
      label: "First name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "lastName",
      label: "Last name",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "dateBirth",
      label: "Date of birth",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "startDate",
      label: "Start date",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "street",
      label: "Street",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "city",
      label: "City",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "state",
      label: "State",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "zipCode",
      label: "Zip code",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "departement",
      label: "Departement",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];


  const data = [
    {
      firstName: "Joe",
      lastName: "James",
      dateBirth: "04/05/1955",
      startDate: "04/09/2022",
      street: "42 street Alley Raoth",
      city: "Denver",
      state: "DEN",
      zipCode: "45638",
      departement: "Co",
    },
  ];


  const options = {
    filterType: "'textField",
  };

  return (
    <MUIDataTable
      title={"Employee List"}
      data={data}
      columns={columns}
      options={options}
    />
  )
}
export default MuidataTable
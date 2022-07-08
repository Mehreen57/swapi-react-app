import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { Container } from '@mui/material';
import tableIcons from '../components/table/MaterialTableIcons';
import { Link } from '@material-ui/core';
import '../components/table/table.css'
import Bmi from '../components/Bmi/Bmi';
import Date from '../components/dateFormat/Date';
import {fetchPeople} from '../api/axios';


const Home = () => {
const [tableData, setTableData] = useState([]);


const getPeopleDetails = async () =>{
    setTableData(await fetchPeople())
}

useEffect(()=>{
  getPeopleDetails();
}, [])

// edit handler function
const editHandler = (resolve, reject, selectedRows) => {
  const rows = Object.values(selectedRows)
  const updatedRows = [...tableData]
  let index;
  rows.map(emp => {
    index = emp.oldData.tableData.id
    return updatedRows[index] = emp.newData
  })
  setTimeout(() => {
    setTableData(updatedRows)
    resolve()
  },2000)
}

  const columns = [
    { title: "Name", field: "name", headerStyle: { fontWeight: "bold", fontSize: 18 }},

    { title: "Height", field: "height", type: "numeric",  headerStyle: { fontWeight: "bold", fontSize: 16 }},

    { title: "Mass", field: "mass", type: "numeric",  headerStyle: { fontWeight: "bold", fontSize: 16 }},

    { title: "BMI", field: "bmi", type: "numeric",  editable: 'never',  headerStyle: { fontWeight: "bold", fontSize: 16 }, render: (row) => <Bmi height={row.height} mass={row.mass}/>},

    { title: "Gender", field: "gender", lookup:{male: "Male", female: "Female", "n/a": "Other"},  headerStyle: { fontWeight: "bold", fontSize: 16 }},

    { title: "Films", field: "films", type: "numeric", editable: 'never',  headerStyle: { fontWeight: "bold", fontSize: 16 }, render: (row) => <Link href={`films/${row.tableData.id + 1}`}>{row.films.length}</Link>},

    { title: "Vehicles", field: "vehicles", type: "numeric", editable: 'never',  headerStyle: { fontWeight: "bold", fontSize: 16 }, render: (row) => <Link href={`vehicles/${row.tableData.id + 1}`}>{ row.vehicles.length }</Link>},

    { title: "Starship", field: "starships", type: "numeric", editable: 'never',  headerStyle: { fontWeight: "bold", fontSize: 16 }, render: (row) =>  <Link href={`starships/${row.tableData.id + 1}`}>{row.starships.length}</Link> },

    { title: "Date", field: "created", type: "date", editable: 'never', headerStyle: { fontWeight: "bold", fontSize: 16 }, render: (row) => <Date created={row.created}/>},
  ];

  return (
    <Container className='table_wrapper'>
      <MaterialTable title="StarWar Details" icons={tableIcons} columns={columns} data={tableData} options={{ search: false, actionsColumnIndex: -1 }}  editable={{
            onBulkUpdate:(selectedRows) => new Promise((resolve,reject) => {
              editHandler(resolve, reject, selectedRows)
            })
          }}/>

    </Container>

  )
}

export default Home;
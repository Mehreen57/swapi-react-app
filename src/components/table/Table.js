import React, { useEffect, useState } from 'react';
import './table.css';
import MaterialTable from 'material-table';
import { Container } from '@mui/material';
import tableIcons from './MaterialTableIcons';
import { Link } from '@material-ui/core';
import Bmi from '../Bmi/Bmi';
import Date from '../dateFormat/Date';
import api from '../../api/axios';


const Table = ({tableData, setTableData}) => {
  const [nextPage, setNextPage] = useState([])

  
// fetch data from api
const getNextPage = async()=>{
  try{
    const response = await api.get('people');
    const displayResults = response.data.next;
    setNextPage(displayResults)
    console.log(displayResults)

  } catch(error){
    alert("you have following" + error)
    }
}

useEffect(()=>{
  getNextPage();
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
    { title: "Name", field: "name"},
    { title: "Height", field: "height", type: "numeric" },
    { title: "Mass", field: "mass", type: "numeric" },
    { title: "BMI", field: "bmi", type: "numeric",  editable: 'never', render: (row) => <Bmi height={row.height} mass={row.mass}/>},
    { title: "Gender", field: "gender", lookup:{male: "Male", female: "Female", "n/a": "Other"}},
    { title: "Films", field: "films", type: "numeric", editable: 'never',  render: (row) =>  <Link href={`people/${row.tableData.id}`}>{row.films.length}</Link>},
    { title: "Vehicles", field: "vehicles", type: "numeric", editable: 'never', render: (row) => row.vehicles.length },
    { title: "Starship", field: "starships", type: "numeric", editable: 'never',  render: (row) => row.starships.length },
    { title: "Date", field: "created", type: "date", editable: 'never', render: (row) => <Date created={row.created}/>},
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

export default Table;
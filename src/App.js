import React,{useState, useEffect} from 'react';
import './App.css';
import Table from './components/table/Table';
import api from './api/axios';
import DetailPage from './pages/Films';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  const [tableData, setTableData] = useState([]);

  // fetch data from api
const peopleDetails = async()=>{
      try{
        const response = await api.get('people');
        const displayResults = response.data.results;
        setTableData(displayResults);

      } catch(error){
        alert("you have following" + error)
        }
  }

  // redering on ui using useEffetc
  useEffect(()=>{
    peopleDetails();
  }, [])


  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Table tableData={tableData} setTableData={setTableData} />}/>
          <Route path='people/:id' element = {<DetailPage tableData={tableData} />}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

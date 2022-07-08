import React from 'react';
import './App.css';
import Table from './components/table/Table';
import Films from './pages/Films';
import Vehicles from './pages/Vehicles';
import Starships from './pages/Starships';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Table />}/>
          <Route path='/films/:id' element = {<Films />}/>
          <Route path='/vehicles/:id' element = {<Vehicles />}/>
          <Route path='/starships/:id' element = {<Starships />}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

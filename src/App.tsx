import React from 'react';
import logo from './logo.svg';
import './App.css';
import HOME from './PAGE/HOME';
import { Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Menu from './Components/Menu';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route>
          <Route index element={<Menu />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

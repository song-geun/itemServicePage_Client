import React from 'react';
import logo from './logo.svg';
import './App.css';
import HOME from './PAGE/HOME';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="App">
        <Route index element={<HOME />} />
      </Route>
    </Routes>

  );
}

export default App;

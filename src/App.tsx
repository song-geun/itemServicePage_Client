import React from 'react';
import logo from './logo.svg';
import './App.css';
import HOME from './PAGE/HOME';
import { Route } from 'react-router-dom';
import Nav from './Components/Nav';

function App() {
  return (
    <Route path="App">
      <Route index element={<Nav/>}/>
    </Route>
  );
}

export default App;

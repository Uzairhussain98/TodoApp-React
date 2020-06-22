import React from 'react';
import './App.css';
import Header from './components/Header';
import Todotasks from './components/Todotasks';
import Todolist from './components/Todolist';

function App() {
  return (
    <div>
      <Header/>
      <Todotasks/>
      <Todolist/>
   
    </div>
  );
}

export default App;

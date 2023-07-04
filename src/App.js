import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Register from './components/Register';
import Edit from './components/Edit';
import Details from './components/Details';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path='/register' exact element={<Register />} />
        {/* /:id is used to match the valid user from backend. */}
        <Route path="/edit/:id" exact element={<Edit />}/>
        <Route path="/details" exact element={<Details />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
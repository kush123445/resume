
import './App.css';
import Screen from './Components/screen';
import I from './Components/I';
import C from './Components/C';
import P from './Components/P';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  
  return (
    <>
               <Router>
      <Routes>
        <Route exact path="/" element={<Screen />} />
        <Route path="/I" element={<I />} />
        <Route path="/C" element={<C/>} />
        <Route path="/P" element={<P />} />
      </Routes>
    </Router>
   
    </>
  );
}

export default App;

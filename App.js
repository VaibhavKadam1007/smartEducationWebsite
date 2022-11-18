import React from 'react';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App=()=>{
    return(
        <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<List />} />
          <Route path="/hotels:id" element={<Hotel/>} />
        </Routes>
      </Router>
    )
}

export default App;
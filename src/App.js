import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.js';
import Home from './components/home/Home.js';
import Stock from './components/stock/Stock.js';
import StockChart from './components/stockchart/StockChart.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={<Home />}
          />
          <Route 
            path="/stocks/:symbol" 
            element={<Stock />}
          />
          <Route
            path="/stocks/:symbol/chart"
            element={<StockChart />}
          />
          <Route 
            path="*"
            element={<Home />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

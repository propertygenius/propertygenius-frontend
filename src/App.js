import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import RentBenchmarking from "./pages/RentBenchmarking"; // Make sure you create this file

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/rent-benchmarking" element={<RentBenchmarking />} />
      </Routes>
    </Router>
  );
}

export default App;


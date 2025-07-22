import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import RentBenchmarking from "./pages/RentBenchmarking"; // Make sure you create this file
import LegalTerms from "./pages/LegalTerms";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/rent-benchmarking" element={<RentBenchmarking />} />
        <Route path="/legal-terms" element={<LegalTerms />} />
      </Routes>
    </Router>
  );
}

export default App;


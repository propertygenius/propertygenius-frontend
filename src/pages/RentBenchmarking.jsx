import React, { useState } from "react";

const RentBenchmarking = () => {
  const [postcode, setPostcode] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentRent, setCurrentRent] = useState("");

  const handleSearch = async () => {
    if (!postcode.trim()) {
      setError("Please enter a valid postcode.");
      return;
    }

    setLoading(true);
    setError("");
    setResults(null);

    try {
      // Simulated API call – replace with real endpoint
      const response = await fetch(`/api/rent-benchmarking?postcode=${encodeURIComponent(postcode)}`);

      if (!response.ok) {
        throw new Error("Failed to fetch benchmarking data.");
      }

      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Rent Benchmarking Tool</h1>
      <p className="mb-6">
        Use this tool to check if your property's rent is competitive based on market data from
        portals like Rightmove and Zoopla.
      </p>

      <input
        type="text"
        placeholder="Enter postcode (e.g. SW1A 1AA)"
        className="border border-gray-300 p-3 w-full rounded mb-4"
        value={postcode}
        onChange={(e) => setPostcode(e.target.value)}
      />

      <button
        className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
        onClick={handleSearch}
        disabled={loading}
      >
        {loading ? "Checking..." : "Check Rent"}
      </button>

      {error && (
        <p className="mt-4 text-red-600 font-medium">
          {error}
        </p>
      )}

      {results && (
        <div className="mt-8 bg-gray-100 p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Results for {postcode.toUpperCase()}</h2>
          <p className="mb-1">📊 Average Rent: <strong>£{results.avgRent}</strong></p>
          <p className="mb-1">🔻 Min Rent: £{results.minRent}</p>
          <p className="mb-1">🔺 Max Rent: £{results.maxRent}</p>
          <p className="text-sm text-gray-600 mt-2">
            Based on <strong>{results.numListings}</strong> listings in the area.
          </p>
        </div>
      )}
      {results && (
  <>
    <div className="mt-8">
      <label className="block text-lg font-medium mb-2">
        Your Current Monthly Rent (£)
      </label>
      <input
        type="number"
        className="border border-gray-300 p-3 w-full rounded mb-4"
        placeholder="e.g. 1500"
        value={currentRent}
        onChange={(e) => setCurrentRent(e.target.value)}
      />

      {currentRent && (
        <div className="mt-2 p-4 bg-white border-l-4 rounded border-green-500 shadow-sm">
          <p className="text-green-700 font-semibold">
            Your rent is {currentRent > results.avgRent ? "above" : "below"} the market average by{" "}
            <strong>£{Math.abs(currentRent - results.avgRent)}</strong> per month.
          </p>
        </div>
      )}
    </div>
  </>
)}
    </div>
  );
};

export default RentBenchmarking;

import React, { useState, useEffect } from 'react';
import SearchBox from './components/SearchBox';
import MedCard from './components/MedCard';

const App = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState('idle');

  const fetchMeds = async (searchTerm) => {
    setStatus('loading');
    try {
      const q = searchTerm && searchTerm.trim().length > 0
        ? `openfda.brand_name:"${searchTerm}"`
        : 'openfda.brand_name:*'; 
      
      const response = await fetch(
        `https://api.fda.gov/drug/label.json?search=${q}&limit=50`
      );
      const data = await response.json();

      const invalids = ['unknown', '', 'n/a', 'not specified'];
      
      const filteredResults = (data.results || []).filter(med => {
        const brandName = med.openfda?.brand_name?.[0]?.trim();
        const hasValidBrandName = brandName && !invalids.includes(brandName.toLowerCase());
        return hasValidBrandName;
      });

      setResults(filteredResults.slice(0, 10));
      setStatus('success');
    } catch (err) {
      console.error("Error fetching FDA data:", err);
      setStatus('error');
    }
  };

  useEffect(() => {
    fetchMeds('');
  }, []);

  return (
    // Updated main container with a new background color
    <div className="min-h-screen bg-teal-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Updated header with new font size, color, and tracking */}
        <h1 className="text-4xl font-extrabold text-center mb-8 text-teal-600 tracking-wide drop-shadow-md">
          MedFinder Dashboard
        </h1>

        {/* Updated SearchBox component, assuming it will handle its own styling */}
        <SearchBox
          query={query}
          setQuery={setQuery}
          onSearch={() => fetchMeds(query)}
        />

        {status === 'loading' && <p className="text-center mt-6 text-gray-600 text-lg">Loading...</p>}
        {status === 'error' && <p className="text-center mt-6 text-red-600 text-lg">Error fetching data.</p>}
        {status === 'success' && results.length === 0 && (
          <p className="text-center mt-6 text-gray-500 text-lg">No results found.</p>
        )}

        {/* Updated grid container with more space */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {results.map((med, index) => (
            // The MedCard component would need to be updated to use the styling suggestions above
            <MedCard key={index} med={med} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
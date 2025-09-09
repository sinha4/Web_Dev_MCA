import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';

function App() {
  const [breeds, setBreeds] = useState(() => {
    const savedBreeds = localStorage.getItem('dogBreeds');
    return savedBreeds ? JSON.parse(savedBreeds) : [];
  });

  useEffect(() => {
    localStorage.setItem('dogBreeds', JSON.stringify(breeds));
  }, [breeds]);

  const addBreed = (newBreed) => {
    setBreeds((prevBreeds) => [
      ...prevBreeds,
      { id: Date.now(), ...newBreed },
    ]);
  };

  const updateBreed = (id, updatedBreed) => {
    setBreeds((prevBreeds) =>
      prevBreeds.map((breed) =>
        breed.id === parseInt(id) ? { id: parseInt(id), ...updatedBreed } : breed
      )
    );
  };

  const deleteBreed = (id) => {
    setBreeds((prevBreeds) =>
      prevBreeds.filter((breed) => breed.id !== parseInt(id))
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-8">
      <nav className="p-4 h-24 h-40 text-white" style={{ 
  backgroundImage: "url('src/assets/76ca70a3e12ca472b6baa51470056a32.jpg')", 
  backgroundSize: 'cover', 
  backgroundPosition: 'center' 
}}>
  <div className="container mx-auto flex items-center justify-between">
    <div className="flex items-center space-x-[27rem]">
      <Link to="/">
  <img src="src/assets/images-2-removebg-preview.png" alt="Dog Logo" className="h-22 w-22" />
</Link> 
<Link to="/" className="text-4xl text-amber-900 mb-6 font-bold">
        Doggie Breed
      </Link>
    </div>
  </div>
</nav>
      {/* Navbar Code End */}

      <div className="container mx-auto max-w-4xl bg-white p-8 rounded-lg shadow-xl mt-8">
        <header className="flex justify-between items-center mb-6 border-b pb-4">
          <h1 className="text-3xl mb-4 font-extrabold text-amber-900">
            Add and track dog breeds!
          </h1>
          <Link
            to="/create"
            className="bg-amber-900 w-70 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-amber-400 transition"
          >
            + Add New Breed
          </Link>
        </header>
        <Outlet context={{ breeds, addBreed, updateBreed, deleteBreed }} />
      </div>
    </div>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import SearchImages from './api';
import ImageList from './ImageList';
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const response = await SearchImages(term);
    setImages(response);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-800 p-6">
      <div className="max-w-3xl mx-auto p-6 bg-blue-100 rounded-lg shadow-md ">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">
          Search Your Favourite Images!
        </h1>
        <div className='mb-8'>
        <SearchBar onSubmit={handleSubmit} />
        </div>
        <ImageList images={images} />
      </div>
    </div>
  );
}

export default App;
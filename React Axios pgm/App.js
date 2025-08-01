import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import SearchImages from './api';
import ImageList from './ImageList';
import { useState } from "react";

function App() {
  const [images,setImages]=useState([])

    const handleSubmit=async (term)=>{
     const response=  await SearchImages(term)  
     setImages(response)
    }
    return (    
    <div>
        <SearchBar onSubmit={handleSubmit} />
        <ImageList images={images} />
    </div>
    )
}

export default App;

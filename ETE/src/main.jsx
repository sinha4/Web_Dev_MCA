import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import BreedList from './components/breedList.jsx';
import BreedCreate from './components/BreedCreate.jsx';
import BreedEdit from './components/BreedEdit.jsx';
import BreedShow from './components/BreedShow.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<BreedList />} />
          <Route path="create" element={<BreedCreate />} />
          <Route path="edit/:id" element={<BreedEdit />} />
          <Route path=":id" element={<BreedShow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
import * as React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import List from "./routes/List";
import Write from "./routes/Write";
import Header from './components/header/Header';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/write" element={<Write />} />
      <Route path="/list" element={<List />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

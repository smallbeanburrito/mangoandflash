import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import CatGen from "./cat-gen";
import CatGenGrid from "./cat-gen-grid";
import Options from "./options";
import Header from "./header";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<CatGen/>} />
      <Route path="/grid" element={<CatGenGrid/>}/>
      </Routes>
      <Options/>
    </Router>
  );
}

export default App;

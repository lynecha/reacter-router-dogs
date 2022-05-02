import React from "react";
import './App.css';
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Doglist from "./Doglist.js"
import Nav from "./Nav.js"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/dogs" >
          <Route element={<DogList />} path="/" />
          <Route element={<DogDetails />} path="/dogs/:name" />
          <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

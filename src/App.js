import React, {useState} from "react";
import './App.css';
import { Route, BrowserRouter, Routes, Navigate} from "react-router-dom";
import Doglist from "./Doglist.js"
import Nav from "./Nav.js"
import axios from "axios"

function App() {
  const [dogs, setDogs] = useState([]);
  async function getDogs() {
      let resp = await axios.get(`http://localhost:5001/dogs`)
      setDogs(resp.data)
  }
  if (dogs.length===0) {
    getDogs()

  }
  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={dogs}/>
        <Routes>
          {/* <Route path="/dogs" /> */}
          <Route element={<Doglist dogs={dogs} />} path="/" />
          {/* <Route element={<DogDetails />} path="/dogs/:name" /> */}
          <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

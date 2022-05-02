import React from "react";
import './App.css';
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Dogs from "./Dogs.js"
import Nav from "./Nav.js"


function Doglist() {
    const [dogs, setDogs] = useState([]);
    async function getDogs() {
        resp = await axios.get(`http://localhost:5001/dogs`)
        setDogs(resp.data)
    }

    return (
        <div>
            {dogs.map(dog => (
                <div>
                    <Link to={`/dogs/${dog.name}`}>
                        {dog.name}
                    </Link>
                    <img src={`../public/${dog.src}`} alt={dog.name} />
                </div>

            ))}
        </div>

    )
}

export default Doglist
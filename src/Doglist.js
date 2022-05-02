import React from "react";
import {Link } from "react-router-dom";



function Doglist({dogs}) {
    

    return (
        <div>
            {dogs.map(dog => (
                <div>
                    <Link to={`/dogs/${dog.name}`}>
                        {dog.name}
                    </Link>
                    <img src={`./${dog.src}`} alt={dog.name} />
                </div>

            ))}
        </div>

    )
}
export default Doglist;
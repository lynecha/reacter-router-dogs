import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

/** props dogs = [whiskey,duke,perry] */
function Nav({ dogs }) {

    return (
        dogs.map(dog => {
            <Link to={`/dogs/${dog}`}>
                {dog}
            </Link>
        })
    )

}
export default Nav
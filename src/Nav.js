import React from "react";
import { Link } from "react-router-dom";

/** props dogs = [{name:whiskey,}, etc] */
function Nav({ dogs }) {

    return (
        dogs.map(dog => {
            return (
                <i>
                    <Link to={`/dogs/${dog.name}`}>
                        {dog.name}
                    </Link>
                </i>
            )

        })
    )

}
export default Nav
import React from "react";
import { Link } from "react-router-dom";

/** props dogs = [{name:whiskey,}, etc] */
function Nav({ dogs }) {

    return (
        dogs.map(dog => {
            return (
                <div>
                    <Link to={`/dogs/${dog.name}`}>
                        {dog.name}
                    </Link>
                </div>
            )

        })
    )

}
export default Nav
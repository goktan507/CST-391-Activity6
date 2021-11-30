import React from "react";
import { useParams } from "react-router";
const User = () => {
    const {username} = useParams();
    return (
        <div>
            <h2>Hello {username}</h2>
        </div>
    )
}

export default User;
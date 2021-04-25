import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const ViewUser = () => {
    const [ user, setUser ] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });
    const { id } = useParams();
    useEffect(() => {
        loadUSer();
    }, []);
    const loadUSer = async () => {
        const user = await axios.get("http://localhost:5000/users/"+id);
        setUser(user.data);
    }

    return (
        <div className="container py-4">
            <h1>View User</h1>
            <Link className="btn btn-outline-primary my-2" to="/">Back to Home</Link>
            <hr />
            <label className="legend font-weight-bold">Name: </label> {user.name}<br/>
            <label className="legend font-weight-bold">User Name: </label> {user.username}<br/>
            <label className="legend font-weight-bold">Email: </label> {user.email}<br/>
            <label className="legend font-weight-bold">Phone: </label> {user.phone}<br/>
            <label className="legend font-weight-bold">Website: </label> {user.website}
        </div>
    );
}

export default ViewUser;
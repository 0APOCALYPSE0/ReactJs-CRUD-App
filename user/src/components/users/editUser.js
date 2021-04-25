import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
    const [ user, setUser ] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const { name, username, email, phone, website} = user;

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    useEffect(() => {
        loadUSer();
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put("http://localhost:5000/users"+id, user);
        history.push("/");
    }

    const loadUSer = async () => {
        const user = await axios.get("http://localhost:5000/users/"+id);
        setUser(user.data);
    }

    return (
        <div className="container py-4">
            <h1>Edit User</h1>
            <form onSubmit={(e) => { onSubmit(e) }}>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" value={name} onChange={(e) => { onInputChange(e) }} />
                </div>
                <div class="form-group">
                    <label for="username">User Name</label>
                    <input type="text" class="form-control" id="username" value={username} onChange={(e) => { onInputChange(e) }} />
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" value={email} onChange={(e) => { onInputChange(e) }} />
                </div>
                <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="text" class="form-control" id="phone" value={phone} onChange={(e) => { onInputChange(e) }} />
                </div>
                <div class="form-group">
                    <label for="website">Website</label>
                    <input type="text" class="form-control" id="website"  value={website} onChange={(e) => { onInputChange(e) }} />
                </div>
                <button type="submit" class="btn btn-outline-warning">Update</button>
            </form>
        </div>
    )
}

export default EditUser;
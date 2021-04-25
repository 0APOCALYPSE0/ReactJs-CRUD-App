import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:5000/users");
        setUser(result.data);
    }

    const deleteUser = async (id) => {
        await axios.delete("http://localhost:5000/users/"+id);
        loadUsers();
    }

    return (
       <div className="container py-4">
           <h1>Home Page</h1>
           <Link className="btn btn-outline-primary my-2" to="users/add">Add User</Link>
           <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link className="btn btn-sm btn-outline-primary mr-2" to={`/users/view/${user.id}`}>View</Link>
                                        <Link className="btn btn-sm btn-outline-warning mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                                        <Link className="btn btn-sm btn-outline-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
       </div> 
    );
}

export default Home;
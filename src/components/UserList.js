import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserAlbums from './UserAlbums';

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the users!', error);
            });
    }, []);

    return (
        <div>
            <h1>User List</h1>
            {users.map(user => (
                <div key={user.id} className="user-card">
                    <h2>{user.name}</h2>
                    <UserAlbums userId={user.id} />
                </div>
            ))}
        </div>
    );
}

export default UserList;

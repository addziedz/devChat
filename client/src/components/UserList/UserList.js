import React from 'react';
import './UserList.css';

const userList = (props) => {
    const userList = props.users.map(user => {
        return (
            <li key={user.id} className="UserItem">
                {user.username}
            </li>
        );
    });
    return (
        <div className="Users">
            <div className="UsersOnline">
                {props.users.length} people online
            </div>
            <ul className="UsersList">
                {userList}
            </ul>
        </div>
    );
};

export default userList;
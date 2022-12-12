import React from 'react';

const List = ({ users }) => {
    return (
        <>
            <div className="card">
                <ul className="list">
                    {users.map((user) => (
                        <li className="list-item" key={user.id}>
                            <h6>{user.name}</h6>
                            <p>{user.age}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default List;
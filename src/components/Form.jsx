import React, { useState } from 'react';
import Modal from './Modal';

const Form = ({ onAddUser }) => {
    // State
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    // Functions
    const usernameChangeandler = (e) => {
        setEnteredUsername(e.target.value);
    };
    const ageCangeHandler = (e) => {
        setEnteredAge(e.target.value);
    };
    const formSubmitHandler = (e) => {
        e.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                description: 'Please enter a valid name and age!'
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid Age',
                description: 'Please enter a valid age!'
            });
            return;
        }
        onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };
    const errorHandler = () => {
        setError(null);
    };

    return (
        <>
            {error && <Modal title={error.title} description={error.description} onConfirm={errorHandler} />}
            <form className="card" onSubmit={formSubmitHandler}>
                <h4 className="heading">User List</h4>
                <input type="text" className="form-control" value={enteredUsername} placeholder="Name" onChange={usernameChangeandler} />
                <input type="number" className="form-control" value={enteredAge} placeholder="Age" onChange={ageCangeHandler} />
                <button type="submit" className="button">Add User</button>
            </form>
        </>
    );
};

export default Form;
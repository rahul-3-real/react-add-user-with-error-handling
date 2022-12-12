import React from 'react';

const Modal = ({ title, description, onConfirm }) => {
    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <button className="close-btn" onClick={onConfirm}>x</button>
                </div>
            </div>
        </>
    );
};

export default Modal;
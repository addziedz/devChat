import React from 'react';
import './Message.css';

const message = (props) => {
    return (
        <div className='Message'>
            <strong>{props.from}: </strong>
            <span>{props.text}</span>
        </div>
    );
};

export default message;
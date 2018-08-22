import React from 'react';

const message = (props) => {
    return (
        <div>
            <strong>{props.from}: </strong>
            <span>{props.text}</span>
        </div>
    );
};

export default message;
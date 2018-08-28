import './MessageTyping.css';
import React from "react";

const messageTyping = (props) => {
    return (
        <div className="MessageTyping">{props.typing} is Typing...</div>
    );
};

export default messageTyping;
import React from 'react';
import Message from './Message/Message';

import './MessageList.css';

const messageList = (props) => {
    const messageItems = props.messages.map((message, idx) => {
        return (
            <Message
                key={idx}
                from={message.from}
                text={message.text}
                currentUser={props.currentUser}
            />
        )
    });
    return (
        <div className="MessageList">
            {messageItems}
        </div>
    )
};

export default messageList;
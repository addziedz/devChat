import React from 'react';
import './Message.css';
import Auxx from "../../../hoc/Auxx";

const message = (props) => {
    const messageTime = new Date().toLocaleTimeString().slice(0, 5);

    const messageUser = (
        <div className='Message'>
            <div className='MessageUser'><strong>{props.from}</strong></div>
            <div className='MessageText'>{props.text}</div>
            <div className='MessageTime'>{messageTime}</div>
        </div>

    );

    const messageOtherUser = (
        <div className='MessageOther'>
            <div className='MessageTime'>{messageTime}</div>
            <div className='MessageOtherText'>{props.text}</div>
            <div className='MessageOtherUser'><strong>{props.from}</strong></div>
        </div>
    );
    return (
        <Auxx>
            {props.from === props.currentUser ? messageUser : null}
            {props.from !== props.currentUser ? messageOtherUser : null}
        </Auxx>
    );
};


// message.propType = {
//     text: PropTypes.string.isRequired
// };

export default message;
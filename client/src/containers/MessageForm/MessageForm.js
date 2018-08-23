import React, {Component} from 'react';
import "./MessageForm.css"

export default class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    handleSubmit(e) {
        e.preventDefault();
        const message = {
            from: this.props.username,
            text: this.state.text
        };
        this.props.onMessageSubmit(message);
        this.setState({text: ''});
    }

    changeHandler(e) {
        this.setState({text: e.target.value});
    }

    render() {
        return (
            <form className="MessageForm" onSubmit={e => this.handleSubmit(e)}>
                <input
                    className="MessageInput"
                    onChange={e => this.changeHandler(e)}
                    placeholder="Message"
                    value={this.state.text}
                />
            </form>
        );
    }
}
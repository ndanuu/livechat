import { Component } from "react";
import React from "react";
import { Button } from "../common";

class Input extends Component {
  state = {
    text: ""
  };

  onChange(e) {
    this.setState({ text: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ text: "" });
    this.props.onSendMessage(this.state.text);
  }
  customerSubmitDetails = () => {
    const { checkUserDetails } = this.state;
    this.setState({
      checkUserDetails: !checkUserDetails
    });
  };

  render() {
    return (
      <div className="Input">
        <form onSubmit={e => this.onSubmit(e)}>
          <textarea
            messages={this.state.messages}
            currentMember={this.state.member}
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Type message.."
            autofocus="true"
          />
          <Button
            type="submit"
            className="btn"
            label="Send"
            onClick={this.customerSubmitDetails}
          />
        </form>
      </div>
    );
  }
}

export default Input;

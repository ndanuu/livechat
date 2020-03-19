import React, { Component } from "react";
import { Button, InputFields, Input, Messages } from "../common";
import FA from "react-fontawesome";
import { connect } from "react-redux";
import { postCustomerDetails } from "../../actions/customerDetailsAction";
// service live chat setup
function randomName() {
  const adjectives = [""];
  const nouns = [""];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + noun;
}

function randomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}
class ChatPopup extends Component {
  state = {
    style: "none",
    messages: [],
    member: {
      username: randomName(),
      color: randomColor()
    },
    checkUserDetails: false,
    text: "",
    name: "",
    phone: "",
    email: "",
    showForm: true
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onChangeText(e) {
    this.setState({ text: e.target.value });
  }
  onSendMessage = message => {
    this.drone.publish({
      room: "observable-client",
      message
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ text: "", style: "block" });
    this.onSendMessage(this.state.text);
  };
  customerSubmitDetails = () => {
    const { checkUserDetails } = this.state;
    this.setState({
      checkUserDetails: !checkUserDetails
    });
  };
  Open = () => {};

  OpenForm = (e, showForm) => {
    e.preventDefault();
    // const { showForm } = this.state;
    console.log(showForm);
    if (showForm === true) {
      this.setState({
        style: "block",
        showForm: true
      });
    } else {
      this.setState({
        style: "block",
        showForm: false
      });
    }
  };

  closeForm = e => {
    e.preventDefault();
    this.setState({
      style: "none"
    });
  };

  minimizeForm = () => {
    // e.preventDefault();
    this.setState({
      style: "none",
      showForm: false
    });
  };

  onSubmitUserDetails = e => {
    e.preventDefault();

    const { name, phone, email } = this.state;
    if (name === "" || phone === "" || email === "") {
      alert("all details are required");
    } else {
      this.setState({
        showForm: false
      });

      const userDetails = {
        customer_name: name,
        customer_email: email,
        customer_phone: phone
      };

      this.props.postCustomerDetails(userDetails);
    }
  };

  constructor() {
    super();
    this.drone = new window.Scaledrone("E9h7JktHk3eWgAcr", {
      data: this.state.member
    });
    this.drone.on("open", error => {
      if (error) {
        return console.error(error);
      }
      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });
    });
    const room = this.drone.subscribe("observable-client");
    room.on("data", (data, member) => {
      const messages = this.state.messages;
      messages.push({ member, text: data });
      this.setState({ messages });
    });
  }

  render() {
    const { style, name, phone, email, showForm } = this.state;
    // console.log(showForm);

    return (
      <React.Fragment>
        <button
          className="open-button"
          onClick={e => this.OpenForm(e, showForm)}
          type="button"
        >
          <FA name="comment-dots" />
        </button>

        {showForm === true ? (
          <div style={{ display: style }}>
            <form
              className="form-container form-container1 d-flex flex-column"
              onSubmit={e => this.onSubmitUserDetails(e)}
            >
              <div className="d-flex align-items-center mb-4">
                <h4>Chat with Us</h4>
                <button
                  className="btn btn-danger rounded-0 d-flex ml-auto"
                  onClick={this.closeForm}
                >
                  X
                </button>
              </div>
              <div
                className=""
                style={{ position: "absolute", bottom: "0px", width: "380px" }}
              >
                <InputFields
                  onChange={e => this.onChange(e)}
                  value={name}
                  name="name"
                  type="text"
                  placeholder="Type message.."
                  label="Name"
                  autoFocus={true}
                />
                <InputFields
                  onChange={e => this.onChange(e)}
                  value={email}
                  type="text"
                  placeholder="Type message.."
                  label="Email"
                  autoFocus={true}
                  name="email"
                />
                <InputFields
                  onChange={e => this.onChange(e)}
                  value={phone}
                  type="number"
                  placeholder="Type message.."
                  label="Phone"
                  autoFocus={true}
                  name="phone"
                />
                <Button type="submit" className="button" label="Submit" />
              </div>
            </form>
          </div>
        ) : (
          <div style={{ display: style }}>
            <form className="form-container" onSubmit={this.onSubmit}>
              {/* inline styling */}
              <div className="d-flex align-items-center mb-4">
                <h4
                  style={{
                    position: "relative",
                    zIndex: 99999,
                    textAlign: "center"
                  }}
                >
                  Chat test
                </h4>
                <p
                  className="btn btn-danger rounded-0 d-flex ml-auto"
                  onClick={this.minimizeForm}
                >
                  -
                </p>
              </div>

              <Messages
                messages={this.state.messages}
                currentMember={this.state.member}
              />
              <InputFields
                onChange={e => this.onChangeText(e)}
                value={this.state.text}
                type="text"
                placeholder="Type message.."
                autoFocus={true}
              />

              {/* <Button type="submit" className="button" label="Send" />
            <button
              type="button"
              class="button cancel"
              onClick={this.closeForm}
            >
              Close
            </button> */}
            </form>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default connect(null, { postCustomerDetails })(ChatPopup);

import React, {Component} from "react";

class Messages extends Component {
  
  // Element used to enable auto-scrolling
  msgsBottom = React.createRef();

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  // Scrolls to msgsBottom element
  scrollToBottom() {
    this.msgsBottom.current.scrollIntoView({ behavior: "smooth" });
  }

  // Renders the list of messages
  render() {
    const {messages} = this.props;
    return (
        <ul className="Messages-list">
          {messages.map(m => this.renderMessage(m))}
          <div ref={this.msgsBottom}>
        </div>
        </ul>
    );
  }

  // Renders a single message object and returns formatted message to display
  renderMessage(message) {
    const {member, text} = message;
    const {currentMember} = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe ?
      "Messages-message currentMember" : "Messages-message";
    return (
      <li className={className}>
      <span
        className="avatar"
        style={{backgroundColor: member.clientData.color}}
      />
        <div className="Message-content">
          <div className="username">
            {member.clientData.username}
          </div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }
}

export default Messages;
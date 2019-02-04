import React, {Component} from "react";


class Members extends Component {
    render() {
        const {membersCount, members} = this.props
        // Renders the list of members currently online
        return (
            <div className="members-count">
                <p>{membersCount} member(s) are currently in the chatroom.</p>
                <details><summary><b>Members Online</b></summary><div className="member-details">{members.map(m => this.renderMember(m))}</div></details>
            </div>
        );
    }

    renderMember(member) {
        // Defaults incase member object is never defined
        var username = "UnknownAccount";
        var color = "blue";


        const {currentMember} = this.props;
        const messageFromMe = member.id === currentMember.id;
        // Class depends on whether the current user is the member object being passed
        const className = messageFromMe ? 
        "self" : "username"
        
        // Note -- need to sort out why it comes as member.member.clientData sometimes
        if (member.clientData !== undefined){
            username = member.clientData.username;
            color = member.clientData.color;
        }
        else if (member.member.clientData !== undefined) {
            username = member.member.clientData.username;
            color = member.member.clientData.color;
        } else {
            this.forceUpdate();
        }
        // Returns a styled member element
        return (
            <div>
                <div className={className} style={{color: color}}>
                    {username}
                </div>
            </div>
        )
    }
}

export default Members;
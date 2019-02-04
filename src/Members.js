import React, {Component} from "react";


class Members extends Component {
    render() {
        const {membersCount, members} = this.props
        console.log(members);
        //const listItems = members.map((m) => <li key={m.clientData.username}>{m.clientData.username}</li>)
        return (
            <div className="members-count">
                <p>{membersCount} member(s) are currently in the chatroom.</p>
                <details><summary><b>Members Online</b></summary><div className="member-details">{members.map(m => this.renderMember(m))}</div></details>
            </div>
            
        );
    }

    renderMember(member) {
        var username = "UnknownAccount";
        var color = "blue";
        const {currentMember} = this.props;
        const messageFromMe = member.id === currentMember.id;
        const className = messageFromMe ? 
        "self" : "username"
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
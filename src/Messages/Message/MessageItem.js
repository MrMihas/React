import React from "react";
import s from "../Dialogs.module.css";

import messagesData from "./MessageData";

class MessageItem extends React.Component {
    render() {
                    const MessageData = messagesData.map(message =>{
                        return(
                            <div className={s.message} id={message.id}>{message.message} </div>
                        )
                    })
        return (
            <React.Fragment>
                {MessageData}
            </React.Fragment>
        )
    }
}

export default MessageItem;
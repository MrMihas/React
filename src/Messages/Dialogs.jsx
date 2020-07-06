import React from "react";
import s from "./Dialogs.module.css";
import UserItem from "./Dialog/UserItem";
import MessageItem from "./Message/MessageItem";


const Dialogs = (props) => {

        return (
            <section className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <UserItem dialogs={props.state.dialogs} />
                </div>
                <div className={s.messages__item}>
                    <MessageItem messages={props.state.messages}/>
                </div>

            </section>
        );

}

export default Dialogs;

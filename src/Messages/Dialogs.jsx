import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import UserItem from "./Dialog/UserItem";
import MessageItem from "./Message/MessageItem";


class Dialogs extends React.Component {

    render() {
        let messagesData = () => [
            {id: 1, mess: 'Mishka'},
            {id: 2, mess: 'Sasha'},
            {id: 3, mess: 'Tanya'}
        ];

        return (
            <section className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <UserItem/>

                </div>
                <div className={s.messages__item}>
                    <MessageItem/>
                </div>

            </section>
        );
    }

}

export default Dialogs;
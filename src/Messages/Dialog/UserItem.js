import React from "react";
import s from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";


const UserItem = (props) => {
        const dialogElement = props.dialogs.map(dialog => {
            return (
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1' data-id={dialog.id}> {dialog.name} </NavLink>
                </div>
            )
        })
        return (
            <div className={`${s.dialog} ${s.active}`}>
                {dialogElement}
            </div>
        )
};


export default UserItem;
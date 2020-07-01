import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import test from './UserList';



class  UserItem extends React.Component{

render() {

    const dialogElement = test.map(dialog => {
        return(
            <div className={s.dialog}>
                <NavLink to='/dialogs/1' id={dialog.id}> {dialog.name} </NavLink>
            </div>
        )
    });
    return (
        <div className={`${s.dialog} ${s.active}`}>
            {dialogElement}
        </div>
    )
}
};


export default UserItem;
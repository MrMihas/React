import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

class Dialogs extends React.Component {

    render() {
        return (
            <section className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={`${s.dialog} ${s.active}`}>
                       <NavLink to='/dialogs/1'> Misha</NavLink>
                    </div>
                    <div className={s.dialog}>
                        sasha
                    </div>
                    <div className={s.dialog}>
                        Tanya
                    </div>
                </div>
                <div className={s.messages__item}>
                    <div className={s.message}>Hi</div>
                    <div className={s.message}>hello</div>
                    <div className={s.message}>yo</div>
                </div>

            </section>
        );
    }

}

export default Dialogs;
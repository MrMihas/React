import React from "react";
import s from "./MainInfo.module.css";
import "./aboutUser.css";

class AboutUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userIcon: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg",
            userName: "Генадій Сергійович",
            more: "hidden"

        }
        this.moreInfo = this.moreInfo.bind(this);
    }

    // moreInfo = () => {
    //     this.setState({more: "show"});
    // }
    // or with bind
    moreInfo (){
        this.setState({more: "show"});
    }

    render() {
        return (
            <React.Fragment>
                <div className={s.aboutUser}>
                    <div className={s.userAvatar}>
                        <img src={this.state.userIcon} alt=""/>
                    </div>

                    <div className={s.userInfo}>
                        <h4> {this.state.userName}</h4>

                        <button onClick={this.moreInfo}>more info</button>
                        <div className={this.state.more}>
                            <div className={s.otherInfo}>
                                <p>Lorem ipsum dolor.</p>
                                <p>Lorem ipsum dolor.</p>
                                <p>Lorem ipsum dolor.</p>
                                <p>Lorem ipsum dolor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default AboutUser;
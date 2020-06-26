import React from "react";
import s from "./MainInfo.module.css";
import Post from "../MyPosts/MyPosts";

class MainInfo extends React.Component{

    render() {
        return (
            <main>

                <section>
                    <div className={s.headPhoto}>
                        <img src='https://s32677.pcdn.co/wp-content/uploads/2020/03/bic_coronavirus_panic.jpg.optimal.jpg' />
                    </div>

                    <div className={s.aboutUser}>
                        <div className={s.userAvatar}>
                            <img src="https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg" alt="" />
                        </div>

                        <div className={s.userInfo}>
                            <h4> Name User</h4>

                            <div className={s.otherInfo}>
                                <p className='App-link'>Lorem ipsum dolor.</p>
                                <p>Lorem ipsum dolor.</p>
                                <p className='App-link'>Lorem ipsum dolor.</p>
                                <p>Lorem ipsum dolor.</p>
                            </div>
                        </div>
                    </div>

                </section>
            <Post/>
            </main>
        );
    }

}


export default MainInfo;
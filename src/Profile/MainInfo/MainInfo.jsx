import React from "react";
import s from "./MainInfo.module.css";
import Post from "../MyPosts/MyPosts";
import AboutUser from "./AboutUser";

class MainInfo extends React.Component {

    render() {
        return (
            <main>

                <section>
                    <div className={s.headPhoto}>
                        <img
                            src='https://s32677.pcdn.co/wp-content/uploads/2020/03/bic_coronavirus_panic.jpg.optimal.jpg'/>
                    </div>

                    <AboutUser/>

                </section>
                <Post/>
            </main>
        );
    }

}


export default MainInfo;
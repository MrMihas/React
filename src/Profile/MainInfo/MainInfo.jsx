import React from "react";
import s from "./MainInfo.module.css";
import Post from "../Post/Post";
import AboutUser from "./AboutUser";

const MainInfo = (props) => {

    let newPostElem;
    newPostElem = React.createRef();

    let addPost = () => {
        props.addPost();
    };
    let onChangePost = () => {
        let text = newPostElem.current.value;
        props.updateNewPostText(text);
    };

    return (
        <main>

            <section>
                <div className={s.headPhoto}>
                    <img src='https://s32677.pcdn.co/wp-content/uploads/2020/03/bic_coronavirus_panic.jpg.optimal.jpg' />
                </div>
                <AboutUser />
                <h3>My Posts</h3>

                <div>
                    <textarea onChange={onChangePost} ref={newPostElem} />
                    <button onClick={addPost}>Send</button>
                </div>
            </section>
            <Post posts={props.profilePage.posts} addPost={props.addPost} />
        </main>
    );

}


export default MainInfo;
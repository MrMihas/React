import React from "react";
import Post from "../Post/Post";
import news from './PostsData';



class MyPosts extends React.Component {
    render() {
        return (
            <section>
                <h3>My Posts</h3>

                <div>
                    <textarea></textarea>
                    <button>Send</button>
                </div>
                < Post data={news}/>
                {/*< Post message='world'/>*/}
            </section>
        )
    }
}

export default MyPosts;
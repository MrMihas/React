// import React from 'react';
// import './index.css';
// // import {rerenderEntareTree} from "./render";
// import state from "./redux/State";
// import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import {addPost, subscribe, updateNewPostText} from "./redux/State";
import state from "./redux/State";
import * as serviceWorker from './serviceWorker';

const rerenderEntareTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        </BrowserRouter>, document.getElementById('root'));

}
rerenderEntareTree(state);

subscribe(rerenderEntareTree);

serviceWorker.unregister();
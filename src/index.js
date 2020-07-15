import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import {addPost, subscribe, updateNewPostText} from "./redux/State";
import store from "./redux/State";
import * as serviceWorker from './serviceWorker';

const rerenderEntareTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
        </BrowserRouter>, document.getElementById('root'));

}
rerenderEntareTree(store.getState());

store.subscribe(rerenderEntareTree);

serviceWorker.unregister();
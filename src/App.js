import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Aside from "./aside/Aside";
import Header from "./Header/Header.jsx";
import Dialogs from "./Messages/Dialogs";
import MainInfo from "./Profile/MainInfo/MainInfo";
import {Route} from "react-router-dom";


const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Aside state={props.state.sidebar}/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={
                    () => <MainInfo profilePage={props.state.profilePage}
                                    dispatch={props.dispatch}/>}/>
                <Route path="/dialogs" render={
                    () => <Dialogs store={props.store}/>}/>

                {/* render faster than component*/}
            </div>
        </div>
    )

}

export default App;
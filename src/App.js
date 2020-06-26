import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Aside from "./aside/Aside";
import Header from "./Header/Header.jsx";
import Dialogs from "./Messages/Dialogs";


import {BrowserRouter, Route} from 'react-router-dom';
import MainInfo from "./Profile/MainInfo/MainInfo";


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header/>
                    <Aside/>
                    <div className="app-wrapper-content">
                        <Route path="/profile" component={MainInfo}/>
                        <Route path="/dialogs" component={Dialogs}/>

                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

// function App() {
//     return (
//     <div className="app-wrapper">
//         <Header/>
//         <Aside/>
//         <Content/>
//     </div>
// );
// }

// const Header = () => {
//   return (
//     <div>
//       <a href="javascript"> link</a>
//       <a> link</a>
//       <a> link</a>
//     </div>
//   );
// }

export default App;
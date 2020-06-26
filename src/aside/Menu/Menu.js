import React from "react";
import myClass from "./Menu.module.css";
import {NavLink} from "react-router-dom";


class Menu extends React.Component {
    render() {
        const newMenu = this.props.elem.map(function (item) {
            return (
                <li>
                    <NavLink to={item.link} className={`${myClass.AppLink} `}
                             activeClassName={myClass.active}>{item.item}</NavLink>
                </li>
            )
        })
        return (
            <nav className="nav">
                <ul>
                    {newMenu}
                </ul>
            </nav>
        )

    }
}

export default Menu;
//
// const Menu = () =>{
//     return(
//         <aside className={myClass.aside}>
//             <nav className='nav'>
//                 <ul>
//                     <li>
//                         <a className={`${myClass.AppLink} ${myClass.active}`}>Profile</a>
//                     </li>
//                     <li>
//                         <a className={myClass.AppLink}>Messages</a>
//                     </li>
//                     <li>
//                         <a className={myClass.AppLink}>News</a>
//                     </li>
//                     <li>
//                         <a className={myClass.AppLink}>Music</a>
//                     </li>
//                     <li>
//                         <a className={myClass.AppLink}>settings</a>
//                     </li>
//                 </ul>
//             </nav>
//         </aside>
//
//
//     );
// }
//
// export default Menu;
import React from "react";
import myClass from "./Aside.module.css";
import Items from "./Menu/Menu";


const items = [
    {
        item: "Profile",
        link: "/profile"
    },
    {
        item: "Dialogs",
        link: "/dialogs"
    }
]

class Aside extends React.Component {

    render() {
        return (
            <aside className={myClass.aside}>
                <Items elem={items}/>
            </aside>
        )
    }

}

export default Aside;
// const Aside = () =>{
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
// export default Aside;
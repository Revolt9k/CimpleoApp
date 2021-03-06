import React, {useState} from "react";
import css from "./Nav.module.css"
import MaximizedNav from "./MaximizedNav";
import MinimizedNav from "./MinimizedNav";

const Nav = (props) => {

    let [minimizeMode, setMinimizeMode] = useState(false)

    let minimize = () => {
        setMinimizeMode(true)
    }

    let maximize = () => {
        setMinimizeMode(false)
    }

    return <div className={css.nav_wrapper}> {
        !minimizeMode ?
            <MaximizedNav showUsersPage={props.showUsersPage}
                          showSensorsPage={props.showSensorsPage}
                          buttonCallback={minimize}/>
        :
            <MinimizedNav showUsersPage={props.showUsersPage}
                          showSensorsPage={props.showSensorsPage}
                          buttonCallback={maximize}/>

    }</div>
}


export default Nav
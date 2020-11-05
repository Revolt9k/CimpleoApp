import React, {useState} from "react";
import css from "./Nav.module.css"


const Nav = (props) => {

    let [minimizeMode, setMinimizeMode] = useState(false)

    return <div> {
        !minimizeMode ? <div className={css.huge}>
            <button onClick={() => props.showUsersPage()}>Users</button>
            <button onClick={() => props.showSensorsPage()}>Sensors</button>
            <button className={css.arrow} onClick={() => setMinimizeMode(true)}>change nav</button>
        </div> : <div className={css.small}>
            <button onClick={() => props.showUsersPage()}>Users</button>
            <button onClick={() => props.showSensorsPage()}>Sensors</button>
            <button className={css.arrow} onClick={() => setMinimizeMode(false)}>change nav</button>
        </div>
    }</div>
}

export default Nav
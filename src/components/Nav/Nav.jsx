import React, {useState} from "react";
import css from "./Nav.module.css"


const Nav = (props) => {

    let [minimizeMode, setMinimizeMode] = useState(false)


    return <div> {
        !minimizeMode ? <div className={css.huge}>
            huge
            <button onClick={() => props.showUsersPage()}>Users</button>
            <button onClick={() => props.showSensorsPage()}>Sensors</button>
            <button onClick={() => setMinimizeMode(true)}>change nav</button>
        </div> : <div className={css.small}> small
            <button onClick={() => props.showUsersPage()}>Users</button>
            <button onClick={() => props.showSensorsPage()}>Sensors</button>
            <button onClick={() => setMinimizeMode(false)}>change nav</button>
        </div>
    }</div>
}

export default Nav
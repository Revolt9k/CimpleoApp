import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faListAlt, faUserFriends} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import css from "./Nav.module.css";

const MaximizedNav = (props) => {
    return <div>
        <div onClick={() => props.showUsersPage()} className={css.icon}>
            <FontAwesomeIcon icon={faUserFriends} size={"lg"} color="white"/>
            <span className={css.text}>Users</span>
        </div>
        <div onClick={() => props.showSensorsPage()} className={css.icon}>
            <FontAwesomeIcon icon={faListAlt} size={"lg"} color="white"/>
            <span className={css.text_temp}>Temperature</span>
        </div>
        <div className={css.arrow}>
            <FontAwesomeIcon icon={faArrowLeft} size={"2x"} color="white" onClick={() => props.buttonCallback()}/>
        </div>
    </div>
}

export default MaximizedNav
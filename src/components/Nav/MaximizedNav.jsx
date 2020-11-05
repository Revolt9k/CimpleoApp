import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faListAlt, faUserFriends} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import css from "./Nav.module.css";

const MaximizedNav = (props) => {
    return <>
        <div className={css.icon}
             onClick={() => props.showUsersPage()}>
            <FontAwesomeIcon icon={faUserFriends}
                             size={"lg"}
                             color="white"/>
            <span className={css.text_user}>Users</span>
        </div>
        <div className={css.icon}
             onClick={() => props.showSensorsPage()}>
            <FontAwesomeIcon icon={faListAlt}
                             size={"lg"}
                             color="white"/>
            <span className={css.text_temp}>Temperature</span>
        </div>
        <div className={css.arrow}>
            <FontAwesomeIcon icon={faArrowLeft}
                             size={"2x"}
                             color="white"
                             onClick={() => props.buttonCallback()}/>
        </div>
    </>
}

export default MaximizedNav
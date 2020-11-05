import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faListAlt, faUserFriends, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import css from "./Nav.module.css";

const MinimizedNav = (props) => {
    return <div className={css.min}>
        <div className={css.icon}>
            <FontAwesomeIcon icon={faUserFriends}
                             size={"lg"}
                             color="white"
                             onClick={() => props.showUsersPage()}/>
        </div>
        <div className={css.icon}>
            <FontAwesomeIcon icon={faListAlt}
                             size={"lg"}
                             color="white"
                             onClick={() => props.showSensorsPage()}/>
        </div>
        <div className={css.arrow}>
            <FontAwesomeIcon icon={faArrowRight}
                             size={"2x"}
                             color="white"
                             onClick={() => props.buttonCallback()}/>
        </div>
    </div>
}

export default MinimizedNav
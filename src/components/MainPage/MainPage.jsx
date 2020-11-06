import React from "react";
import Nav from "../Nav/Nav";
import {withAuthRedirect} from "../../HOC/isLoginedRedirect";
import css from "./MainPage.module.css"
import UserPageContainer from "../Table/UserPage/UserPageContainer";
import SensorsPageContainer from "../Table/SensorsPage/SensorsPageContainer";

const MainPage = (props) => {
    return <div className={css.container}>
        <Nav showUsersPage={props.showUsersPage}
             showSensorsPage={props.showSensorsPage}/>
        <div className={css.table_wrapper}>
            {!props.isUsersPageShown ? <SensorsPageContainer/> : <UserPageContainer/>}
        </div>
    </div>
}

export default withAuthRedirect(MainPage)
import React from "react";
import Nav from "../Nav/Nav";
import {withAuthRedirect} from "../../HOC/isLoginedRedirect";
import css from "./MainPage.module.css"
import UserPageContainer from "../UserPage/UserPageContainer";
import SensorsPageContainer from "../SensorsPage/SensorsPageContainer";

const MainPage = (props) => {
    return <div className={css.container}>
            <div>
                <div>
                    <Nav showUsersPage={props.showUsersPage} showSensorsPage={props.showSensorsPage}/>

                </div>
            </div>
            <div>
                {!props.isUsersPageShown ? <SensorsPageContainer/> : <UserPageContainer/>}
            </div>
    </div>
}

export default withAuthRedirect(MainPage)
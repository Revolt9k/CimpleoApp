import React from "react";
import Nav from "../Nav";
import SensorsPage from "../SensorsPage";
import {withAuthRedirect} from "../../HOC/isLoginedRedirect";
import {Container, Col, Row} from "react-bootstrap";
import css from "./MainPage.module.css"
import UserPageContainer from "../UserPage/UserPageContainer";

const MainPage = (props) => {
    return <Container fluid >
        <Row>
            <Col xs={2} className={css.navCol}>
                <div  >
                    <Nav/>
                    <button onClick={() => props.showUsersPage()}>Users</button>
                    <button onClick={() => props.showSensorsPage()}>Sensors</button>
                    <button >change nav</button>
                </div>
            </Col>
            <Col xs={2}>
                {!props.isUsersPageShown ? <SensorsPage/> : <UserPageContainer/>}
            </Col>
        </Row>
    </Container>
}

export default withAuthRedirect(MainPage)
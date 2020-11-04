import React from "react";
import MainPage from "./MainPage";
import {connect} from "react-redux";
import {showUsersPage, showSensorsPage} from "../../redux/mainPageReducer";

class MainPageContainer extends React.Component {

    render() {
        return <MainPage isUsersPageShown={this.props.isUsersPageShown} showUsersPage={this.props.showUsersPage} showSensorsPage={this.props.showSensorsPage} />
    }

}

let mapStateToProps = (state) => ({
    isUsersPageShown: state.mainPage.isUsersPageShown
})


export default connect(mapStateToProps, {showUsersPage, showSensorsPage})(MainPageContainer)
import React from "react";
import {connect} from "react-redux";
import UserPage from "./UserPage";
import {deleteUser, enterEditMode, saveChanges} from "../../redux/LoginReducer";

class UserPageContainer extends React.Component {

    render() {
        return <UserPage listOfUsers={this.props.listOfUsers} deleteUser={this.props.deleteUser} enterEditMode={this.props.enterEditMode} saveChanges={this.props.saveChanges}/>
    }

}

let mapStateToProps = (state) => ({
    listOfUsers: state.login.registeredUsers
})


export default connect(mapStateToProps, {deleteUser, enterEditMode, saveChanges})(UserPageContainer)
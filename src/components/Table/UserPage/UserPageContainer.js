import {connect} from "react-redux";
import UserPage from "./UserPage";
import {
    deleteUser,
    enterUserEditMode,
    leaveUserEditMode,
    saveUserChanges
} from "../../../Reducers/usersReducer";

let mapStateToProps = (state) => ({
    listOfUsers: state.users.registeredUsers
})

export default connect(mapStateToProps, {
    deleteUser,
    enterUserEditMode,
    leaveUserEditMode,
    saveUserChanges
})(UserPage)
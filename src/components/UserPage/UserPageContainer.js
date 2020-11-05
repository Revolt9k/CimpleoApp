import {connect} from "react-redux";
import UserPage from "./UserPage";
import {
    deleteUser,
    enterEditMode,
    saveChanges
} from "../../redux/UsersReducer";

let mapStateToProps = (state) => ({
    listOfUsers: state.users.registeredUsers
})

export default connect(mapStateToProps, {
    deleteUser,
    enterEditMode,
    saveChanges
})(UserPage)
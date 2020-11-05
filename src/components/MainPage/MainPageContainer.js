import MainPage from "./MainPage";
import {connect} from "react-redux";
import {
    showUsersPage,
    showSensorsPage
} from "../../redux/mainPageReducer";

let mapStateToProps = (state) => ({
    isUsersPageShown: state.mainPage.isUsersPageShown
})

export default connect(mapStateToProps, {
    showUsersPage,
    showSensorsPage
})(MainPage)
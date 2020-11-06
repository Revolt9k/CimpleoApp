import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import mainPageReducer from "./mainPageReducer";
import usersReducer from "./usersReducer";
import SensorsPageReducer from "./sensorsReducer";
import loginReducer from "./loginReducer";

let reducers = combineReducers({
    mainPage: mainPageReducer,
    users: usersReducer,
    sensors: SensorsPageReducer,
    login: loginReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store
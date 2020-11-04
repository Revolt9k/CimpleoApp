import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import mainPageReducer from "./mainPageReducer";
import usersReducer from "./UsersReducer";
import SensorsPageReducer from "./SensorsReducer";

let reducers = combineReducers({
    users: usersReducer,
    mainPage: mainPageReducer,
    sensors: SensorsPageReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store
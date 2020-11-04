import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import mainPageReducer from "./mainPageReducer";
import loginReducer from "./LoginReducer";

let reducers = combineReducers({
    login: loginReducer,
    mainPage: mainPageReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store
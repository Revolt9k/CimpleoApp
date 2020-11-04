import React from "react";
import MainPage from "./components/MainPage";
import {Route, Switch} from "react-router-dom";
import LoginContainer from "./components/Login/LoginContainer";

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' render={() => <LoginContainer/>}/>
                <Route path='/main' render={() => <MainPage/>}/>
                <Route path='/login' render={() => <LoginContainer/>}/>
            </Switch>
        </div>

    );
}

export default App;

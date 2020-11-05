import React from "react";
import {Route, Switch} from "react-router-dom";
import LoginContainer from "./components/Login/LoginContainer";
import MainPageContainer from "./components/MainPage/MainPageContainer";

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' render={() => <LoginContainer/>}/>
                <Route path='/login' render={() => <LoginContainer/>}/>
                <Route path='/main' render={() => <MainPageContainer/>}/>
            </Switch>
        </div>

    );
}

export default App;

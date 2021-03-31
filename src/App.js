import React from "react";
import "firebase/auth";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./components/Login";
import Home from "./components/Home";

const App = ({isAuthenticated, isVerifying}) => {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/login"
                    component={Login}
                />
                <PrivateRoute
                    exact
                    path="/"
                    component={Home}
                    isAuthenticated={isAuthenticated}
                    isVerifying={isVerifying}
                />
            </Switch>
        </Router>

    );
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isVerifying: state.auth.isVerifying
    };
}

export default connect(mapStateToProps)(App);

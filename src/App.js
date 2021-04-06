import React from "react";
import "firebase/auth";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./components/Login";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Categories from "./components/Categories";
import Goods from "./components/Goods";

const App = ({isAuthenticated, isVerifying}) => {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={Home}
                />
                <Route
                    exact
                    path="/login"
                    component={Login}
                />
                <PrivateRoute
                    exact
                    path="/admin"
                    component={Admin}
                    isAuthenticated={isAuthenticated}
                    isVerifying={isVerifying}
                />
                <PrivateRoute
                    exact
                    path="/categories"
                    component={Categories}
                    isAuthenticated={isAuthenticated}
                    isVerifying={isVerifying}
                />
                <PrivateRoute
                    exact
                    path="/goods"
                    component={Goods}
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

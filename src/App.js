import React, {createContext} from "react";
import firebase from "firebase/app";
import "firebase/auth";
import {FirebaseAuthProvider} from "@react-firebase/auth";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SecretPage from "./components/SecretPage/SecretPage";
import PublicPage from "./components/PublicPage/PublicPage";
import config from "./config";

import useAuth from "./hooks/useAuth";

export const authContext = createContext();

const App = () => {
    const auth = useAuth();

    return (
        <FirebaseAuthProvider {...config} firebase={firebase}>
            <authContext.Provider value={auth}>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <PublicPage/>
                        </Route>
                        <PrivateRoute path="/private">
                            <SecretPage/>
                        </PrivateRoute>
                    </Switch>
                </Router>
            </authContext.Provider>
        </FirebaseAuthProvider>
    );
}

export default App;

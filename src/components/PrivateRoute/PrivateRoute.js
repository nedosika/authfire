import {useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import {authContext} from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
    const auth = useContext(authContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.authUser ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;
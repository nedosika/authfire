import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Layout from "../Layout/Layout";

class Home extends Component {
    render() {
        const { isLoggingOut, logoutError, logoutUser } = this.props;
        return (
            <Layout title="Home">
                <h1>This is your app's protected area.</h1>
                <p>Any routes here will also be protected</p>
                <button onClick={logoutUser}>Logout</button>
                {isLoggingOut && <p>Logging Out....</p>}
                {logoutError && <p>Error logging out</p>}
            </Layout>
        );
    }
}
function mapStateToProps(state) {
    return {
        isLoggingOut: state.auth.isLoggingOut,
        logoutError: state.auth.logoutError
    };
}
export default connect(mapStateToProps, actions)(Home);
import React from 'react';
import Layout from "../Layout";
import {connect} from "react-redux";
import * as actions from "../../actions";

function Categories({isAuthenticated, logoutUser, getData}) {
    return (
        <Layout
            title="Категории товаров"
            logoutUser={logoutUser}
            isAuthenticated={isAuthenticated}
            getData={getData}
        >
            Categories
        </Layout>
    );
}

function mapStateToProps(state) {
    return {
        isLoggingIn: state.auth.isLoggingIn,
        loginError: state.auth.loginError,
        isAuthenticated: state.auth.isAuthenticated
    };
}

export default  connect(mapStateToProps, actions)(Categories);
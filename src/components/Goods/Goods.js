import React from "react";
import {connect} from "react-redux";
import * as actions from "../../actions";
import Layout from "../Layout/Layout";
import MediaCard from "../MediaCard/MediaCard";
import Masonry from "react-masonry-css";
import FullScreenDialog from "../FullScreenDialog";

const Goods = ({isLoggingOut, logoutError, categories, isAuthenticated, logoutUser, getData}) => {
    const breakpoints = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    }

    return (
        <Layout
            title="Goods"
            logoutUser={logoutUser}
            isAuthenticated={isAuthenticated}
            getData={getData}
        >
            <h1>Goods</h1>
            <FullScreenDialog/>
        </Layout>
    );
}

function mapStateToProps(state) {
    return {
        isLoggingOut: state.auth.isLoggingOut,
        logoutError: state.auth.logoutError,
        categories: state.data.data,
        isAuthenticated: state.auth.isAuthenticated
    };
}

export default connect(mapStateToProps, actions)(Goods);
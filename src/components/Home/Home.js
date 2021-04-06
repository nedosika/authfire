import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../../actions";
import Layout from "../Layout/Layout";
import MediaCard from "../MediaCard/MediaCard";
import Masonry from "react-masonry-css";

const Home = ({logoutUser, categories, isAuthenticated}) => {
    const breakpoints = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    }

    return (
        <Layout
            title="Home"
            logoutUser={logoutUser}
            categories={categories}
            isAuthenticated={isAuthenticated}
        >
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
            </Masonry>
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

export default connect(mapStateToProps, actions)(Home);
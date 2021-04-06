import React from "react";
import {connect} from "react-redux";
import * as actions from "../../actions";
import Layout from "../Layout/Layout";
import MediaCard from "../MediaCard/MediaCard";
import Masonry from "react-masonry-css";

const Admin = ({isLoggingOut, logoutError, categories, isAuthenticated, logoutUser, getData}) => {
    const breakpoints = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    }

    return (
        <Layout
            title="Admin"
            logoutUser={logoutUser}
            categories={categories}
            isAuthenticated={isAuthenticated}
            getData={getData}
        >
            <h1>This is your app's protected area.</h1>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
            </Masonry>

            <p>Any routes here will also be protected</p>
            <button onClick={logoutUser}>Logout</button>
            {isLoggingOut && <p>Logging Out....</p>}
            {logoutError && <p>Error logging out</p>}
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

export default connect(mapStateToProps, actions)(Admin);
import React from "react";
import {connect} from "react-redux";
import * as actions from "../../actions";
import Layout from "../Layout/Layout";
import MediaCard from "../MediaCard/MediaCard";
import Masonry from "react-masonry-css";
import FullScreenDialog from "../FullScreenDialog";

const Goods = ({isLoggingOut, logoutError, categories=[], goods=[], isAuthenticated, logoutUser, getData, sendData, addProduct}) => {
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
            sendData={sendData}
        >
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {
                    goods.map(item =>
                        <MediaCard product={item}/>
                    )
                }
            </Masonry>
            <FullScreenDialog addProduct={addProduct} categories={categories}/>
        </Layout>
    );
}

function mapStateToProps(state) {
    return {
        isLoggingOut: state.auth.isLoggingOut,
        logoutError: state.auth.logoutError,
        categories: state.data.firestore.categories,
        goods: state.data.firestore.goods,
        isAuthenticated: state.auth.isAuthenticated
    };
}

export default connect(mapStateToProps, actions)(Goods);
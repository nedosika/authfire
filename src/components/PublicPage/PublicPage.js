import React,{useContext} from 'react';
import Layout from "../Layout/Layout";
import {authContext} from "../../App";
import {useHistory} from "react-router-dom";

function PublicPage() {
    const history = useHistory();
    const auth = useContext(authContext);

    const handleSignIn = () => {
        auth.signIn().then(() => history.push("/private"));
    }

    return (
        <Layout title="Public Page">
            <div>
                <button onClick={handleSignIn}>
                    Sign in
                </button>
            </div>
        </Layout>
    );
}

export default PublicPage;
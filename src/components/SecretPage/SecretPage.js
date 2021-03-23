import React, {useContext} from 'react';
import Layout from "../Layout/Layout";
import {authContext} from "../../App";
import {useHistory} from "react-router-dom";

function SecretPage() {
    const history = useHistory();
    const auth = useContext(authContext);

    const handleSignOut = () => {
        auth.signOut().then(() => history.push("/"));
    }

    return (
        <Layout title="SecretPage">
            <div>
                <button onClick={handleSignOut}>
                    Sign out
                </button>
            </div>
        </Layout>
    );
}

export default SecretPage;
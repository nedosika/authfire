import React from 'react';
import {FirebaseAuthConsumer} from "@react-firebase/auth";

function Layout({title, children}) {
    return (
        <div>
            <h1>{title}</h1>
            <div>
                <FirebaseAuthConsumer>
                    {({isSignedIn, user, providerId}) => {
                        return (
                            <pre style={{height: 300, overflow: "auto"}}>
                                {JSON.stringify({isSignedIn, user, providerId}, null, 2)}
                            </pre>
                        );
                    }}
                </FirebaseAuthConsumer>
            </div>
            {children}
        </div>
    );
}

export default Layout;
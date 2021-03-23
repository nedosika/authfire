import React from 'react';
import firebase from "firebase";

function useAuth() {
    const [authUser, setAuthUser] = React.useState(null);

    const signIn = () => {
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

        return firebase
            .auth()
            .signInWithPopup(googleAuthProvider)
            .then((cred) => setAuthUser({authUser: cred}))
    }

    const signOut = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => setAuthUser(null))
    }

    return {
        authUser,
        signIn,
        signOut
    }
}

export default useAuth;
import React, {createContext, useContext} from 'react';

export const authContext = createContext();

function useAuth() {
    return useContext(authContext);
}

export default useAuth;
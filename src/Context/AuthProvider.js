import React from 'react';


export const AppContext = React.createContext();
const AuthProvider = ({ children }) => {

    const data = {
        user: { name: 'farhan', email: 'farhan@gmail.com' }
    }
    return (
        <AppContext.Provider value={data} >
            {children}
        </AppContext.Provider>
    );
};

export default AuthProvider;
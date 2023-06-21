import React, { useContext } from 'react';

//creating user context to check if a user is present or not
const UserContext = React.createContext();

const UserProvider = ({children}) => {
    return <UserContext.Provider>
        {
            children
        }
    </UserContext.Provider>
}

export const useUserContext = () => {
    return useContext(UserContext);
}

export default UserProvider;
import React, { useContext, useState } from 'react';

//creating user context to check if a user is present or not
const UserContext = React.createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    return <UserContext.Provider value={{
        user,
        setUser
    }}>
        {
            children
        }
    </UserContext.Provider>
}

export const useUserContext = () => {
    return useContext(UserContext);
}

export default UserProvider;
import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => 
{
    const [ user, setUser ] = useState()

    useEffect(() => {
        setUser({
            name: 'Martin Rivadavia',
            registered: '2025/11/12'
        })
    }, []);

    return (
        <UserContext.Provider value={user}>
            { children }
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider}
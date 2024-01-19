import { createContext, useState} from "react";

export const userContext = createContext();

// eslint-disable-next-line react/prop-types
const UserContext = ({children}) => {
    const [user, setUser] = useState(null);

    return <userContext.Provider value={{user,setUser}}>{children}</userContext.Provider>
}

export default UserContext;
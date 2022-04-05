import { createContext } from "react";

type TypeUser = {

}

export const UserContext = createContext({} as TypeUser);

export const UserProvider = ({child}) => {
    return (
        <UserContext.Provider value={{

        }}>
            {child}
        </UserContext.Provider>
    )
}
import { createContext } from "react";
import { useState } from "react";

export const BookContext = createContext();


const BookContextProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [user, setUser] = useState(false);


    const value = {
        isVisible,
        setIsVisible
    }

    return (
        <BookContext.Provider value={value}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;
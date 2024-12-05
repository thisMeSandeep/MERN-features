import { createContext } from "react";
import { useState } from "react";
import axios from "axios"

export const BookContext = createContext();


const BookContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    //logout
    const logout = async () => {
        try {
            const { data } = await axios.post(`${backendUrl}/api/auth/logout`, null, { withCredentials: true });
            if (data.success) {
                setUser(null);
                alert(data.message)
            } else {
                alert(data.message);
            }
        } catch (err) {
            console.error("Logout Error:", err);
        }
    };

    //

    const value = {
        user,
        setUser,
        backendUrl,
        logout
    }

    return (
        <BookContext.Provider value={value}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;
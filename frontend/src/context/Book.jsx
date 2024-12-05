import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios"

export const BookContext = createContext();


const BookContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [category, setCategory] = useState('');
    const [page, setPage] = useState();
    const [limit, setLimit] = useState(10);
    const [books, setBooks] = useState([]);
    const [totalPages, setTotalPages] = useState();

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

    //fetch books
    const fetchBooks = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/books?category=${category}&page=${page}&limit=${limit}`);
            setBooks([...response.data.books]);
            setTotalPages(response.data.totalPages)
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, [category , page])


    const value = {
        user,
        setUser,
        backendUrl,
        logout,
        fetchBooks,
        books,
        setCategory,
        setPage,
        totalPages,
    }

    return (
        <BookContext.Provider value={value}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;
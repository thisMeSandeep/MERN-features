import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App"
import Register from "../components/Register";
import Login from "../components/Login";
import Home from "../pages/home/Home";
import BookDetail from "../pages/bookDetail/BookDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/book/:id',
                element: <BookDetail />
            }
        ]
    }
]);



function MyRouter({ children }) {
    return (
        <RouterProvider router={router}>
            {children}
        </RouterProvider>
    )
}

export default MyRouter;
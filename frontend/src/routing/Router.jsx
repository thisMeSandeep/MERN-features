import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App"
import Register from "../components/Register";
import Login from "../components/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
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
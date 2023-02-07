import { createBrowserRouter } from "react-router-dom";
import Login from "../Componants/Authectication/Login";
import Register from "../Componants/Authectication/Register";
import Home from "../Componants/Home/Home";
import Main from "../Componants/Main/Main";
import NotFound from "../Componants/Shared/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },

        ]
    }
])
import { createBrowserRouter } from "react-router-dom";
import Login from "../Componants/Authectication/Login";
import Register from "../Componants/Authectication/Register";
import Contacts from "../Componants/Contacts/Contacts";
import Dashboard from "../Componants/Dashboard/Dashboard";
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
                path: '/contact',
                element: <Contacts />,
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
    },
    {
        path: '/dashboard',
        element: <Dashboard />,

        errorElement: <NotFound />,
        children: [
            {
                path: '*',
                element: <h1>404</h1>,
            }
        ]
    },
])
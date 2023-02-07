import { createBrowserRouter } from "react-router-dom";
import NotFound from "../Componants/Shared/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: '<Main/>',
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: '<Home/>',
            },
            {
                path: '/home',
                element: '<Home/>',
            },
            {
                path: '/login',
                element: '<Login/>',
            },
            {
                path: '/register',
                element: '<Register/>',
            },

        ]
    }
])
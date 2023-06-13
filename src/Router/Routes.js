import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AllServices from "../pages/Services/AllServices";
import SignUp from "../pages/authentication/SignUp";
import Login from "../pages/Login/Login";
import CheckOut from "../pages/CheckOut/CheckOut";
import Orders from "../pages/Orders/Orders";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [{
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/allservices',
        element: <PrivateRoute><AllServices></AllServices></PrivateRoute>,
        loader: () => fetch('https://green-vegan2-server.vercel.app/allservices')
    },
    {
        path: '/login',
        element: <Login></Login>

    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    },
    {
        path: '/checkout/:id',
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        loader: ({ params }) => fetch(`https://green-vegan2-server.vercel.app/services/${params.id}`)
    },
    {
        path: '/orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
    }
    ]
}])

export default routes;
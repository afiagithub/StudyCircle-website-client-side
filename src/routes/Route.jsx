import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import AllAssignments from "../pages/AllAssignments";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AssignDetails from "../pages/AssignDetails";
import CreateAssign from "../pages/CreateAssign";
import PrivateRoute from "../protected/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/assignment',
                element: <AllAssignments></AllAssignments>,
                // loader: () => fetch('http://localhost:5000/all-assignment')
            },
            {
                path: "/assignment/:id",
                element: <PrivateRoute><AssignDetails></AssignDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/all-assignment/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: "/add-assign",
                element: <PrivateRoute><CreateAssign></CreateAssign></PrivateRoute>
            }
        ]
    },
]);

export default router;
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
import UpdateAssign from "../pages/UpdateAssign";
import PostedAssign from "../pages/MyPost";
import SubmitAssign from "../pages/SubmitAssign";
import AttemptedAssign from "../pages/AttemptedAssign";
import PendingAssign from "../pages/PendingAssign";
import MarkAssign from "../pages/MarkAssign";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <AllAssignments></AllAssignments>
            },
            {
                path: "/assignment/:id",
                element: <PrivateRoute><AssignDetails></AssignDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://studycircle-server.vercel.app/all-assignment/${params.id}`)
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
            },
            {
                path: "/update-assign/:id",
                element: <PrivateRoute><UpdateAssign></UpdateAssign></PrivateRoute>,
                loader: ({ params }) => fetch(`https://studycircle-server.vercel.app/all-assignment/${params.id}`)
            },
            {
                path: "/posted-assignment",
                element: <PrivateRoute><PostedAssign></PostedAssign></PrivateRoute>
            },
            {
                path: "/submit-assign/:id",
                element: <PrivateRoute><SubmitAssign></SubmitAssign></PrivateRoute>,
                loader: ({ params }) => fetch(`https://studycircle-server.vercel.app/all-assignment/${params.id}`)
            },
            {
                path: "/attempted-assign",
                element: <PrivateRoute><AttemptedAssign></AttemptedAssign></PrivateRoute>
            },
            {
                path: "/pending-assign",
                element: <PrivateRoute><PendingAssign></PendingAssign></PrivateRoute>
            },
            {
                path: "/mark-assign/:id",
                element: <PrivateRoute><MarkAssign></MarkAssign></PrivateRoute>,
                loader: ({ params }) => fetch(`https://studycircle-server.vercel.app/submission/${params.id}`)
            }
        ]
    },
]);

export default router;
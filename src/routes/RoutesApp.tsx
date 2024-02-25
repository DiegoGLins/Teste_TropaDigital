import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login"
import Cadastro from "../pages/Cadastro"
import Home from "../pages/Home"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/cadastro",
        element: <Cadastro />,
    },
    {
        path: 'Home',
        element: <Home />
    }])

const RoutesApp: React.FC = () => {
    return <RouterProvider router={router} />
}

export default RoutesApp
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import Registration from "../pages/Registration";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../pages/Dashboard";
import AllProducts from "../pages/Dashboard/AllProducts";
import AddProduct from "../pages/Dashboard/AddProduct";
import ProductDetails from "../pages/ProductDetails";
import EditProduct from "../pages/Dashboard/EditProduct";

    export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: async () => {
                return fetch(`http://localhost:3000/shoes`)
            }
        },
        {
            path: "/products/:id",
            element: <ProductDetails></ProductDetails>,
            loader: async ({params}) => {
                return fetch(`http://localhost:3000/shoes/${params.id}`)
            }
        },
        {
            path: "/about",
            element: <About></About>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/registration",
            element: <Registration></Registration>
        },

      ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "",
                element: (
                    <PrivateRoutes>
                        <Dashboard></Dashboard>
                    </PrivateRoutes>
                )
            },
            {
                path: "all-products",
                element: (
                    <PrivateRoutes>
                        <AllProducts></AllProducts>
                    </PrivateRoutes>
                ),
                loader: async () => {
                    return fetch(`http://localhost:3000/shoes`);
                },
            },
            {
                path: "add-product",
                element: (
                    <PrivateRoutes>
                        <AddProduct></AddProduct>
                    </PrivateRoutes>
                )
            },
            {
                path: "all-products/edit-product/:id",
                element: (
                    <PrivateRoutes>
                        <EditProduct></EditProduct>
                    </PrivateRoutes>
                ),
                loader: async ({params})=> {
                    return fetch(`http://localhost:3000/shoes/${params.id}`)
                }

            },
        ]
        
    }
  ]);
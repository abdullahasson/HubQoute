// react
import { createBrowserRouter } from "react-router-dom";
// routes
import { buyerRoutes } from "./BuyerRoutes";
import { sellerRoutes } from "./SellerRoutes";
import { adminRoutes } from "./AdminRoutes";
// pages
import Buyer from "../pages/buyer";
import Seller from "../pages/seller";
import Admin from "../pages/admin";
import NotFound from "../pages/404/NotFound";
import Home from "../pages/Home/home";
import SignupSeller from "../pages/Auth/SignupSeller";
import SignupBuyer from "../pages/Auth/SignupBuyer";
import SignupAdmin from "../pages/Auth/SignupAdmin";
import SignupType from "../pages/Auth/SignupType"
import Login from "../pages/Auth/Login";


export const router = createBrowserRouter([
    // Register routes
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/sign-up",
      element: <SignupType />,
    },
    {
      path: "/sign-up/admin",
      element: <SignupAdmin />,
    },
    {
      path: "/sign-up/seller",
      element: <SignupSeller />,
    },
    {
      path: "/sign-up/buyer",
      element: <SignupBuyer />,
    },
    {
      path: "/sign-in",
      element: <Login />,
    },

    // Buyer routes 
    {
      path: "/dashboard/buyer",
      element: <Buyer />,
      children: buyerRoutes
    },

    // Seller routes 
    {
      path: "/dashboard/seller",
      element: <Seller />,
      children: sellerRoutes
    },

    // Admin routes 
    {
      path: "/dashboard/admin",
      element: <Admin />,
      children: adminRoutes
    },

    // Catch-all route
    {
      path: "*",
      element: <NotFound />,
    },
]);

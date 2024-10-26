// react
import { lazy , Suspense } from "react"
// Admin pages
const Statistrac = lazy(() => import("../components/Admin/pages/Statistrac/statistrac"))
const Contracts = lazy(() => import("../components/Admin/pages/Contracts/contracts"))
const Clients = lazy(() => import("../components/Admin/pages/Clients/clients"))
const Buyers = lazy(() => import("../components/Admin/pages/Buyers/buyers"))
const RequestsForQuotations = lazy(() => import("../components/Admin/pages/Requests for quotations/requests_for_quotations"))
// shared page
const SupplierMarket = lazy(() => import("../components/Shared Pages/Supplier market/supplier_market"))
const Profile = lazy(() => import("../components/Shared Pages/Profile/profile"))
const GeneralSetting = lazy(() => import("../components/Shared Pages/General Setting/general_setting"))
// page loader
import PageLoad from "../components/Common/Loaders/pages loader/page_load";

export const adminRoutes = [
    {
        index: true,
        element: 
            <Suspense fallback={<PageLoad />}>
                <Statistrac />
            </Suspense>
    },
    {
        path: "statistrac",
        element: 
            <Suspense fallback={<PageLoad />}>
                <Statistrac />
            </Suspense>,
    },
    {
        path: "buyers",
        element: 
            <Suspense fallback={<PageLoad />}>
                <Buyers />
            </Suspense>,
    },
    {
        path: "clients",
        element: 
            <Suspense fallback={<PageLoad />}>
                <Clients />
            </Suspense>,
    },
    {
        path: "supplier",
        element: 
            <Suspense fallback={<PageLoad />}>
                <SupplierMarket />
            </Suspense>,
    },
    {
        path: "contracts",
        element: 
            <Suspense fallback={<PageLoad />}>
                <Contracts />
            </Suspense>,
    },
    {
        path: "requests-quotations",
        element: 
            <Suspense fallback={<PageLoad />}>
                <RequestsForQuotations />
            </Suspense>,
    },
    {
        path: "profile",
        element: 
            <Suspense fallback={<PageLoad />}>
                <Profile />
            </Suspense>,
    },
    {
        path: "general-setting",
        element: 
            <Suspense fallback={<PageLoad />}>
                <GeneralSetting />
            </Suspense>,
    },
]
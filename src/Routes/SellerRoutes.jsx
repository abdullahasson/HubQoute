// react
import { lazy , Suspense } from "react"
const Statistrac = lazy(() => import("../components/Seller/pages/Statistrac/statistrac"))
const RequestsForQuotations = lazy(() => import("../components/Seller/pages/Requests for quotations/requests_for_quotations"))
// shared page
const BuyerInstructions = lazy(() => import("../components/Shared Pages/Buyer instructions/buyer_instructions")) 
const Profile = lazy(() => import("../components/Seller/pages/Profile/profile"))
const GeneralSetting = lazy(() => import("../components/Shared Pages/General Setting/general_setting"))
import PageLoad from "../components/Common/Loaders/pages loader/page_load";


export const sellerRoutes = [
    {
      index: true ,
      element: 
        <Suspense fallback={<PageLoad />}>
            <Statistrac />
        </Suspense>,
    },
    {
      path: "statistrac",
      element: 
        <Suspense fallback={<PageLoad />}>
            <Statistrac />
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
      path: "buyer-instructions",
      element: 
        <Suspense fallback={<PageLoad />}>
            <BuyerInstructions />
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
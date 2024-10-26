// react
import { lazy , Suspense } from "react"
// components
const Statistrac = lazy(() => import("../components/Buyer/pages/Statistrac/statistrac"))
const PurchaseOrder = lazy(() => import("../components/Buyer/pages/purchase order/purchase_order"))
const OffersReceived = lazy(() => import("../components/Buyer/pages/Offers received/offers_received"))
const PriceQuoteDetails = lazy(() => import("../components/Buyer/pages/Price quote details/price_quote_details"))
const RequestsForQuotations = lazy(() => import("../components/Buyer/pages/Requests for quotations/requests_for_quotations"))
const Contracts = lazy(() => import("../components/Buyer/pages/Contracts/contracts"))
const MarketPlace = lazy(() => import("../components/Buyer/pages/Market Place/market_place"))
const RFI = lazy(() => import("../components/Buyer/pages/Comparison Table/RFI/RFI"))
const RFP = lazy(() => import("../components/Buyer/pages/Comparison Table/RFP/RFP"))
const RFQ = lazy(() => import("../components/Buyer/pages/Comparison Table/RFQ/RFQ"))
// shared page
const SupplierMarket = lazy(() => import("../components/Shared Pages/Supplier market/supplier_market"))
const BuyerInstructions = lazy(() => import("../components/Shared Pages/Buyer instructions/buyer_instructions")) 
const Profile = lazy(() => import("../components/Shared Pages/Profile/profile"))
const GeneralSetting = lazy(() => import("../components/Shared Pages/General Setting/general_setting"))
const AllMessages = lazy(() => import("../components/Shared Pages/All messages/all_messages"))
import PageLoad from "../components/Common/Loaders/pages loader/page_load";

export const buyerRoutes = [
    {
      path: "messages",
      element:
        <Suspense fallback={<PageLoad />}>
            <AllMessages />
        </Suspense>,
    },  
    {
      index: true,
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
      path: "create-purchase",
      element: 
        <Suspense fallback={<PageLoad />}>
            <PurchaseOrder />
        </Suspense>,
    },
    {
      path: "comparison-table/RFI",
      element: 
        <Suspense fallback={<PageLoad />}>
            <RFI />
        </Suspense>,
    },
    {
      path: "comparison-table/RFP",
      element: 
        <Suspense fallback={<PageLoad />}>
            <RFP />
        </Suspense>,
    },
    {
      path: "comparison-table/RFQ",
      element: 
        <Suspense fallback={<PageLoad />}>
            <RFQ />
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
      path: "offers-received",
      element: 
        <Suspense fallback={<PageLoad />}>
          <OffersReceived />
        </Suspense>,
    },
    {
      path: "offers-received/:offerId",
      element: 
        <Suspense fallback={<PageLoad />}>
            <PriceQuoteDetails />
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
      path: "market-place",
      element: 
        <Suspense fallback={<PageLoad />}>
            <MarketPlace />
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
      path: "supplier-market",
      element: 
        <Suspense fallback={<PageLoad />}>
            <SupplierMarket />
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
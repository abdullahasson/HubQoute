
import { Outlet } from "react-router-dom"
// context
import { BuyerContext } from "../context/BuyerContext"
// component
import Header from "../components/Common/Header/header"
import Navbar from "../components/Common/Navbar/navbar"
import Support from "../components/Support/support"
// Alerts
import Logout from "../components/Common/Alerts/Logout/logout"
import Confirmation from "../components/Common/Alerts/Confirmation/confirmation"
import Successfully from "../components/Common/Alerts/Successfully/successfully"
// style
import "../styles/dashboard.css"




const Buyer = () => {

    return (
        <BuyerContext>

            <div className="dashboard buyer">
                <Header />

                <div className="main-content">
                    <Navbar type='buyer' />

                    <div className="part">
                        <Outlet />
                        <Support />
                    </div>
                </div>
            </div>
            
            {/* Alerts */}
            <Logout />
            <Confirmation />
            <Successfully />

        </ BuyerContext>
    )

}

export default Buyer
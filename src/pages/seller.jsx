
import { Outlet } from "react-router-dom"
// component
import Header from "../components/Common/Header/header"
import Navbar from "../components/Common/Navbar/navbar"
import Support from "../components/Support/support"
// Alerts
import Logout from "../components/Common/Alerts/Logout/logout"
// style
import "../styles/dashboard.css"


const Seller = () => {

    return (
        <>

            <div className="dashboard seller">
                <Header />

                <div className="main-content">
                    <Navbar type='seller' />

                    <div className="part">
                        <Outlet />

                        <Support />
                    </div>
                </div>
            </div>
            
            {/* Alerts */}
            <Logout />

        </>
    )

}

export default Seller
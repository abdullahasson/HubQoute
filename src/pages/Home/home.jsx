import { Link } from "react-router-dom"
// style
import "./home.css"

const Home = () => {

    return (
        <div className="home">
            
            <div>
                <Link className="animated-button" to={"/HubQoute/sign-in"} >
                    <span>Log In</span>
                    <span></span>
                </Link>


                <Link className="animated-button" to={"/HubQoute/sign-up"} >
                    <span>Sign Up</span>
                    <span></span>
                </Link>

                <Link className="animated-button" to={"/HubQoute/dashboard/buyer/statistrac"} >
                    <span>Buyer Dashboard</span>
                    <span></span>
                </Link>

                {/* <Link className="animated-button" to={"/HubQoute/dashboard/seller/statistrac"} >
                    <span>Seller Dashboard</span>
                    <span></span>
                </Link> */}

                <Link className="animated-button" to={"/HubQoute/dashboard/admin/statistrac"} >
                    <span>Admin Dashboard</span>
                    <span></span>
                </Link>
            </div>

        </div>
    )

}


export default Home 
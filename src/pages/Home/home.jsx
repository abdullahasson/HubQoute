import { Link } from "react-router-dom"
// style
import "./home.css"

const Home = () => {

    return (
        <div className="home">
            
            <div>
                <Link className="animated-button" to={"/sign-in"} >
                    <span>Log In</span>
                    <span></span>
                </Link>


                <Link className="animated-button" to={"/sign-up"} >
                    <span>Sign Up</span>
                    <span></span>
                </Link>

                <Link className="animated-button" to={"/dashboard/buyer/statistrac"} >
                    <span>Buyer Dashboard</span>
                    <span></span>
                </Link>

                {/* <Link className="animated-button" to={"/dashboard/seller/statistrac"} >
                    <span>Seller Dashboard</span>
                    <span></span>
                </Link> */}

                <Link className="animated-button" to={"/dashboard/admin/statistrac"} >
                    <span>Admin Dashboard</span>
                    <span></span>
                </Link>
            </div>

        </div>
    )

}


export default Home 
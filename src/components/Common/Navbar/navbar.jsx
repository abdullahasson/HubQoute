// react
import { useState , useContext } from "react"
import { NavLink } from "react-router-dom"
// context
import { appContext } from "../../../context/AppContext"
// component
import Title from "../Title/title"
import NavBuyer from "./components/nav_buyer"
import NavSeller from "./components/nav_seller"
import NavAdmin from "./components/nav_admin"
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser , faLifeRing } from '@fortawesome/fontawesome-free-regular'
import { faToggleOn , faArrowRightFromBracket , faChevronLeft , faChevronRight } from "@fortawesome/free-solid-svg-icons"
// style
import "./navbar.css"


const Navbar = ({ type }) => {

    const {
        setLogoutDialog ,
        setContactSupport ,
        ContactSupport
    } = useContext(appContext)

    const handleNavigation = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const [close , setClose] = useState(false)

    return (
        <div className={`navbar ${close && "close"}`}>

            <div className="head">
                <Title>
                    الصفحات الرئيسية
                </Title>

                {/* <button className="close-btn" onClick={()=> setClose(!close)}>
                    <FontAwesomeIcon icon={close ? faChevronLeft : faChevronRight} />
                </button> */}
            </div>

            

            {
                type == 'buyer' ?   
                    <NavBuyer /> :
                    type == 'seller' ?
                        <NavSeller /> :
                        type == 'admin' ?
                            <NavAdmin /> : null
            }


            <Title>
                الصفحات العامة
            </Title>
            <ul>
                <li>
                    <NavLink to={"profile"} onClick={handleNavigation}>
                        <span>اعدادات الحساب</span>
                        <FontAwesomeIcon className='nav-icon' icon={faUser} />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"general-setting"} onClick={handleNavigation}>
                        <span>الإعدادات العامة</span>
                        <FontAwesomeIcon className='nav-icon' icon={faToggleOn} />
                    </NavLink>
                </li>
                <li>
                    <a className={`${ContactSupport && 'active'}`} onClick={() => setContactSupport(true)}>
                        <span>المساعدة والدعم</span>
                        <FontAwesomeIcon className='nav-icon' icon={faLifeRing} />
                    </a>
                </li>
                <li className="logout">
                    <a onClick={() => setLogoutDialog(true)}>
                        <span>تسجيل الخروج</span>
                        <FontAwesomeIcon className='nav-icon' icon={faArrowRightFromBracket} />
                    </a>
                </li>
            </ul>
        </div>
    )

}

export default Navbar
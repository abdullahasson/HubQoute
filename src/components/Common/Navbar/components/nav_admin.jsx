// react
import { NavLink } from "react-router-dom"
// mui
import { Chip } from "@mui/material"

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faChartBar , 
    faCreditCard , 
    faComments , 
    faEnvelope , 
    faAddressBook ,
    faNewspaper ,
    faBookmark ,
    faStar ,
} from '@fortawesome/fontawesome-free-regular'

const NavAdmin = () => {

    const handleNavigation = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <ul>
            <li>
                <NavLink to={"statistrac"} onClick={handleNavigation}>
                    <span>الاحصائيات والتقارير</span>
                    <FontAwesomeIcon className='nav-icon' icon={faChartBar} />
                </NavLink>
            </li>
            <li>
                <NavLink to={"buyers"} onClick={handleNavigation}>
                    <span>المشترين</span>
                    <FontAwesomeIcon className='nav-icon' icon={faComments} />
                </NavLink>
            </li>           
            <li>
                <NavLink to={"clients"} onClick={handleNavigation}>
                    <span>العملاء</span>
                    <FontAwesomeIcon className='nav-icon' icon={faComments} />
                </NavLink>
            </li>
            <li>
                <NavLink to={"supplier"} onClick={handleNavigation}>
                    <span>الموردين</span>
                    <FontAwesomeIcon className='nav-icon' icon={faEnvelope} />
                </NavLink>
            </li>
            <li>
                <NavLink to={"contracts"} onClick={handleNavigation}>
                    <span>العقود</span>
                    <FontAwesomeIcon className='nav-icon' icon={faAddressBook} />
                </NavLink>
            </li>
            <li>
                <NavLink to={"requests-quotations"} onClick={handleNavigation}>
                    <span>طلبات عروض الأسعار</span>
                    <FontAwesomeIcon className='nav-icon' icon={faStar} />
                </NavLink>
            </li>
        </ul>
    )

}

export default NavAdmin
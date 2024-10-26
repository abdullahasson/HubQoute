
// mui
import { Avatar , IconButton } from "@mui/material";
// icon 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
// img
import UserImage from "../../../../../assets/images/02.jpg"
// style
import './account.css'

const Account = () => {

    return (
        <div className="account-view">
            <IconButton>
                <FontAwesomeIcon icon={faCaretDown} />
            </IconButton>

            <Avatar
                alt="user"
                src={UserImage}
            />

            <div className="name">
                <p>محمود خالد</p>
                <span>Mohamedso.com@</span>
            </div>
        </div>
    )

}

export default Account
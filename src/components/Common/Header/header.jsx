// react
import { useContext } from "react";
// context
import { appContext } from "../../../context/AppContext";
// mui
import { Box } from "@mui/material";
// component
import Clock from "./components/Clock/clock";
import Search from "../Inputs/Search/search";
import Theme from "./components/Theme/theme";
import Messages from "./components/Messages/messages";
import Notifications from "./components/Notifications/notifications";
import Account from "./components/Account/account";
// logo
import Logo from "../../../assets/Logo"
// style
import "./header.css"


const Header = () => {

    const {
        searshInput
    } = useContext(appContext)

    return (
        <Box className="header">
            <Box className="content">

                <Box className="right">
                    <Logo />
                    <Clock />
                </Box>

                {
                    searshInput && <Search />
                }

                
                <Box className="left">
                    <Theme />

                    <Box className="notif">
                        <Messages />

                        <Notifications />
                    </Box>

                    <Account />
                </Box>
            </Box>
        </Box>
    )

}

export default Header
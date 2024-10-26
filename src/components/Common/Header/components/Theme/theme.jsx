// react
import { useState , useEffect , useContext } from "react";
// context
import { appContext } from "../../../../../context/AppContext";
// mui
import { 
    Box ,
    List,
    ListItemIcon,
    ListItemText,
    ListItemButton,
    Menu,
    IconButton,
    useMediaQuery
} from "@mui/material";
// icon 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun , faMoon , faDotCircle } from "@fortawesome/fontawesome-free-regular"
// style
import './theme.css'

const Theme = () => {
    const userSystemTheme = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light'

    const { 
        setTheme
    } = useContext(appContext)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handelLocalTheme = (parm) => {
        window.localStorage.setItem('theme' , parm)
        
        setTheme(window.localStorage.getItem('theme'))
    }
  
    const handleTheme = (parm) => {
        parm == 'dark' ? 
            handelLocalTheme('dark') : 
            parm == 'light' ? 
                handelLocalTheme('light') :
                parm == 'system' ?
                    handelLocalTheme(userSystemTheme) : null

        handleClose()
    }


    return (
        <Box>
            <IconButton 
                className="theme-button"
                onClick={handleClick}
            >
                <FontAwesomeIcon icon={faSun} />
            </IconButton>

            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                className="theme-menu"
                PaperProps={{}}
            >
                <List>

                    <ListItemButton
                        sx={{ py: 0, minHeight: 32}}
                        onClick={() => handleTheme('dark')}
                    >
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faMoon} />
                        </ListItemIcon>
                        <ListItemText
                            primary='dark'
                            primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                        />
                    </ListItemButton>

                    <ListItemButton
                        sx={{ py: 0, minHeight: 32}}
                        onClick={() => handleTheme('system')}
                    >
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faDotCircle} />
                        </ListItemIcon>
                        <ListItemText
                            primary='System'
                            primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                        />
                    </ListItemButton>

                    <ListItemButton
                        sx={{ py: 0, minHeight: 32}}
                        onClick={() => handleTheme('light')}
                    >
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faSun} />
                        </ListItemIcon>
                        <ListItemText
                            primary='light'
                            primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                        />
                    </ListItemButton>
                </List>
            </Menu>
        </Box>
    )

}

export default Theme
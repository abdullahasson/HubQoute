// react
import { useState } from "react"
// mui
import { 
    Box , 
    Badge ,
    List,
    ListItem,
    Stack ,
    ListItemAvatar,
    Avatar,
    Typography,
    Menu,
} from "@mui/material"
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell } from "@fortawesome/free-solid-svg-icons"
// svg
import AcceptedQuote from "../../../../../assets/SVG/accepted_quote"
import RejectedQuote from "../../../../../assets/SVG/rejected_quote"
// style
import "./notifications.css"
// fake content
import { notifications } from "../../../../../fake-content"


const Notifications = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
        <Box className='notifications'>
            <Badge badgeContent={notifications.length} color="primary">
                <div className={`notif-btn ${anchorEl && 'active'}`} onClick={handleClick}>
                    <FontAwesomeIcon 
                        icon={faBell} 
                        shake
                    />
                </div>
            </Badge>

            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                className="notifications-menu"
                PaperProps={{}}
            >

                <List className='notifications-list'>

                    <Box className='notifications-container'>
                        {
                            notifications.map((item , index) => (
                                <ListItem key={index} className='list-item'>
                                    <ListItemAvatar>
                                        {
                                            item.type == 'accepted' ? 
                                                <AcceptedQuote /> :
                                            item.type == 'rejected' ?
                                                <RejectedQuote /> :
                                            item.type == 'new_quote' ? 
                                                <Avatar src={item.img} /> 
                                            : null
                                        }
                                    </ListItemAvatar>
            
                                    <Box className="noti-text">
                                        {
                                            item.type == 'new_quote' ?

                                            <Box className='new-offer'>
                                                <Typography component='h2'>عرض سعر جديد</Typography>
                                                <Stack className='offer-info'>
                                                    <Box>
                                                        <Typography component='p'>المنتج:</Typography>
                                                        <Typography component='span'>{item.product}</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography component='p'>الكمية:</Typography>
                                                        <Typography component='span'>{item.quantity}</Typography>
                                                    </Box>
                                                </Stack>
                                            </Box>

                                            :

                                            <Typography>
                                                {item.text}
                                            </Typography>
                                        }
                                    </Box>
                                
                                    <Typography className='noti-time'>
                                        {item.time}
                                    </Typography> 
                                </ListItem>
                            ))
                        }
                    </Box>                


                    <Box className='show-all-notifications'>
                        مشاهدة كل الاشعارات
                    </Box>

                </List>

            </Menu>

        </Box>        
    )

}

export default Notifications
// react
import { useState } from "react"
import { Link } from "react-router-dom"
// mui
import { 
    Box , 
    Badge ,
    List,
    ListItem,
    Stack ,
    ListItemAvatar,
    ListItemText ,
    Avatar,
    Typography,
    Menu,
} from "@mui/material"
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
// style
import "./messages.css"
// fake content
import { messages } from "../../../../../fake-content"


const Messages = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
        <Box className='messages'>
            <Badge badgeContent={messages.length} color="primary">
                <div className={`notif-btn ${anchorEl && 'active'}`} onClick={handleClick}>
                    <FontAwesomeIcon 
                        icon={faEnvelope} 
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
                className="messages-menu"
            >

                <List className='messages-list'>

                    <Box className='messages-container'>
                        {
                            messages.map(

                                (item , index) => (

                                    <ListItem key={index} className='list-item'>

                                        <ListItemAvatar>
                                            <Avatar src={item.img} />
                                        </ListItemAvatar>

                                        <ListItemText
                                            className='text-content'
                                            primary={
                                                <Box className='name'>
                                                    {item.name}

                                                    <Typography className='noti-time'>
                                                        {item.time}
                                                    </Typography> 
                                                </Box>
                                            }
                                            secondary={item.secondaryText}
                                        />
                                    </ListItem>

                                )

                            )
                        }
                    </Box>                

                    <Link to={'messages'} className='show-all-messages'>
                        مشاهدة كل الرسائل
                    </Link>

                </List>

            </Menu>

        </Box>        
    )

}

export default Messages
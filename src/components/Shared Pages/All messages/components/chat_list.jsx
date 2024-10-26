// mui 
import { 
    Box , 
    Typography ,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar ,
    Badge , 
    styled 
} from "@mui/material";
// components
import Search from "../../../Common/Inputs/Search/search"


const ChatList = () => {
  return (
    <Box className="chat-list">
        <Search style={{width: '100%'}} />

        <List sx={{display: 'flex' , flexDirection: 'column' , gap: '12px' , overflowY: 'scroll'}}>
            {
            ['' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , ''].map((item) => (
                <ListItem className='list-item'>
                    <ListItemAvatar>
                        <Avatar src='' />
                    </ListItemAvatar>

                    <ListItemText
                        className='text-content'
                        primary={
                            <Box className='name'>
                                محمود إياد

                                <Typography className='noti-time'>
                                    5:19 pm
                                </Typography> 
                            </Box>
                        }
                        secondary={
                            'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض....'
                        }
                    />
                </ListItem>
            ))
            }
        </List>
    </Box>
  )
}

export default ChatList

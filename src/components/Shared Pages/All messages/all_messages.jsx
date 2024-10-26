// mui
import { Box , Typography } from "@mui/material"
// components
import ChatList from "./components/chat_list"
import ChatArea from "./components/chat_area"
// style
import './all_messages.css'


const AllMessages = () => {

    return (
        <Box className='all-messages'>
            <Box className='part-title'>
                <Typography>
                    الرسائل
                </Typography>
            </Box>

            <Box className='messages-app' >
                <ChatArea />
                <ChatList />
            </Box>
        </Box>
    )

}

export default AllMessages
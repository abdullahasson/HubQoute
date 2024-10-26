// mui
import { Box } from "@mui/material"
// components
import Consignee from "../../../Common/Chat/Consignee/consignee"
import ChatTextarea from "../../../Common/Chat/Chat Textarea/chat_textarea"
import MessagesArea from "../../../Common/Chat/Messages Area/messages_area"
// img
import sup from "../../../../assets/images/sup.png"


const ChatArea = () => {
  return (
    <Box className='chat-area'>
        <Box className='chat-box-head'>
            <Consignee 
                img={sup}
                name='الدعم الفني'
                online={true}
            />
        </Box>

        <MessagesArea view='73%' />

        <ChatTextarea />
    </Box>
  )
}

export default ChatArea

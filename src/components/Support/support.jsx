// react
import { useContext } from "react"
// cotext 
import { appContext } from "../../context/AppContext"
// mui
import { Box } from "@mui/material"
// components
import Consignee from "../Common/Chat/Consignee/consignee"
import ChatTextarea from "../Common/Chat/Chat Textarea/chat_textarea"
import MessagesArea from "../Common/Chat/Messages Area/messages_area"
import Button from "../Common/Buttons/button"
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
// img
import sup from "../../assets/images/sup.png"
// style
import './support.css'

const Support = () => {

    const {
        ContactSupport ,
        setContactSupport
    } = useContext(appContext)

    return (
        <Box className='support' sx={{display: ContactSupport ? 'flex' : 'none'}}>
            <Box className='chat-box-head'>
                <Consignee 
                    img={sup}
                    name='الدعم الفني'
                    online={true}
                />

                <Button variant='close' onClick={() => setContactSupport(false)}>
                    <FontAwesomeIcon icon={faXmark} />
                </Button>
            </Box>

            <MessagesArea />
            <ChatTextarea />
        </Box>
    ) 

}

export default Support
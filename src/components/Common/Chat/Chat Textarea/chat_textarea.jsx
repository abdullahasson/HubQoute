
// mui
import { Box , IconButton } from "@mui/material"
// emoji picker
// import EmojiPicker from 'emoji-picker-react';
// icon 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTextSlash , faPaperclip , faSmile } from "@fortawesome/free-solid-svg-icons"
// style 
import './chat_textarea.css'


const ChatTextarea = () => {

    return (
        <Box className='chat-input'>    

            <Box className="controls">
                <input type="text" />

                <IconButton className="controls-btn">
                    <FontAwesomeIcon icon={faPaperclip} />
                </IconButton>

                <IconButton className="controls-btn">
                    <FontAwesomeIcon icon={faSmile} />
                </IconButton>

                <IconButton className="controls-btn">
                    <FontAwesomeIcon  icon={faTextSlash} />
                </IconButton>

            </Box>

        </Box>
    )

}

export default ChatTextarea
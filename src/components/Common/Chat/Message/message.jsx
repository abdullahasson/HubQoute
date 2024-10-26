
// mui
import { Box , Stack , Typography ,  Avatar } from "@mui/material"
// img 
import consignee from "../../../../assets/images/02.jpg"
// style
import "./message.css"

const Message = ({
    variant ,
    time ,
    children
}) => {

    return (
        <Box className={`message ${variant}`} >

        {  
            variant == 'me' ? null :

            <Avatar 
                className="consignee" 
                src={consignee}  
                alt='consignee' 
            />
        }

            <Box className='message-content'>
                <Stack justifyContent='start' gap={1} marginBottom={1}>
                    <Typography variant="caption" className='consigne-name'>
                        {variant == 'me' ? 'Me' : 'Annie Bryan'}
                    </Typography>

                    <Typography variant="overline" className='time'>
                        {time}
                    </Typography>
                </Stack>


                <Typography className="message-text" variant='body2'>
                    {children}
                </Typography>
            </Box>

        </Box>
    )

}

export default  Message
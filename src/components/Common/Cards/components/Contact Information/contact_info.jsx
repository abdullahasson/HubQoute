
// mui
import { Box , Typography } from '@mui/material'
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import {faEnvelope} from '@fortawesome/fontawesome-free-regular'
// style
import './contact_info.css'

const ContactInfo = ({
    phone ,
    email ,
    theme
}) => {

    return (
        <Box className={`contact-info ${theme}`}>
            <Typography>
                <FontAwesomeIcon icon={faPhone} />
                {phone}
            </Typography>

            <Typography>
                <FontAwesomeIcon icon={faEnvelope} />
                {email}
            </Typography>
        </Box>
    )

}

export default ContactInfo
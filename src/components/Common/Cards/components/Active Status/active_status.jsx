
// mui
import { Box , Typography } from "@mui/material"
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
// style
import './active_status.css'

const ActiveStatus = ({
    isActive
}) => {

    return (
        <Box className={`state ${isActive ? 'active' : 'inactive' }`}>

            <Typography component='span'>
                <FontAwesomeIcon icon={faCircle} />
            </Typography>

            {isActive ? 'نشط' : 'غير نشط' }
        </Box>
    )

}

export default ActiveStatus
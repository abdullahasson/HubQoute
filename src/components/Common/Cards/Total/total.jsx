
// mui
import { Box , Typography } from '@mui/material'
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// style
import './total.css'

const Total = ({
    title ,
    tot ,
    color ,
    icon ,
    bg
}) => {

    return (
        <Box className='total'>
            <Box sx={{color: color , borderColor: color , background: bg}} className='total-icon-border'>
                <FontAwesomeIcon icon={icon} />
            </Box>

            <Box className='txt'>
                <Typography component='p'>
                    {title}
                </Typography>
                <Typography component='h3'>
                    {tot}
                </Typography>
            </Box>

            <Box />
        </Box>
    )

}

export default Total
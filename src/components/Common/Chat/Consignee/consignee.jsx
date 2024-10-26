
// mui
import { Box , Avatar , Stack , Typography } from '@mui/material'
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
// style
import './consignee.css'

const Consignee = ({
    img ,
    name ,
    online
}) => {
    
    return (
        <Stack className='consignee' direction="row" gap={1} alignItems='flex-start'>

            <Avatar alt="Remy Sharp" src={img} />

            <Box className='text'>
                <Typography component='p'>
                    {name}
                </Typography>

                {online &&
                    <Typography component='span'>
                        <FontAwesomeIcon icon={faCircle} />
                        غير متاح
                    </Typography>
                }    
            </Box>
        </Stack>
    )

}

export default Consignee
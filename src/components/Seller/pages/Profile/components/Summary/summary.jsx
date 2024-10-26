// react

// mui
import { Box , Typography , Divider } from "@mui/material"
// style
import './summary.css'


const Summary = () => {

    return (   
        <Box className='summary'>
            <Box className='heading'>
                <Typography>
                    Summary
                </Typography>
            </Box>

            <Divider />

            <Box className='total'>
                <Box className='active'>
                    <Typography component='p'>
                        Active Orders
                    </Typography>

                    <Typography component='span'>
                        14
                    </Typography>
                </Box>
                <Box>
                    <Typography component='p'>
                        Total Orders
                    </Typography>

                    <Typography component='span'>
                        255
                    </Typography>
                </Box>
                <Box>
                    <Typography component='p'>
                        Employees
                    </Typography>

                    <Typography component='span'>
                        14
                    </Typography>
                </Box>
                <Box>
                    <Typography component='p'>
                        Total Orders
                    </Typography>

                    <Typography component='span'>
                        255
                    </Typography>
                </Box>
            </Box>
            
            <Box className='tags'>
                <Typography>
                    Tags
                </Typography>

                <Box>
                    <Typography component='span'>
                        aluma
                    </Typography>
                    <Typography component='span'>
                        prokfs
                    </Typography>
                    <Typography component='span'>
                        gjosa
                    </Typography>
                </Box>
            </Box>
        </Box>
    )

}

export default Summary
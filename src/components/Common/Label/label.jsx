
// mui
import { Box , Typography } from "@mui/material"
// style
import './label.css'

const Label = ({
    text , 
    dir ,
    children
}) => {

    return (
        <Box dir={dir && null} className='components-lable'>
            <Typography>
                {text}
            </Typography>

            {children}
        </Box>
    )

}

export default Label
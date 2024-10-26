// react
// mui
import { Box , Typography } from "@mui/material"
// style
import "./info.css"

const Info = ({title , value}) => {
    return (
        <Box className="info">
            <Typography className="tit" variant="button" display="block" gutterBottom>
                {title} :
            </Typography>
                
    
            <span>
                {value}
            </span>
        </Box>
    )  
}

export default Info
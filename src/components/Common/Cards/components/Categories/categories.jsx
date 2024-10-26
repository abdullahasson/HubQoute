
// mui
import { Box , Typography } from '@mui/material'
// style
import './categories.css'


const Categories = ({ 
    categories ,
    cardType
}) => {

    return (
        <Box className={`categories ${cardType}`}>
            <Typography component='h3'>
                الفئات المهتم بها :
            </Typography>
            
            <Box>
                {
                    categories.map(
                        (item) => (
                            <Typography key={item} component='span'>
                                {item}
                            </Typography>
                        )
                    )
                }
            </Box>
        </Box>
    )

}

export default Categories
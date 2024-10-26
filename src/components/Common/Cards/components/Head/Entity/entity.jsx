
// mui
import { Box , Typography } from '@mui/material'
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot , faStar } from "@fortawesome/free-solid-svg-icons"
// style
import './entity.css'


const Entity = ({
    info ,
    cardType
}) => {

    const { name , location , rating , img } = info

    return (
        <Box className={`entity ${cardType}`}>
            <Box className='image-border'>
                <img src={img} alt="" />
            </Box>
            <Box>
                <Typography component='h2'>
                    {name}
                </Typography>

                <Typography component='p'>
                    {location}
                    {'  '}
                    <FontAwesomeIcon icon={faLocationDot} />
                </Typography>

                {
                   rating &&

                    <Box className='rate'>
                        <Typography className='rating'>
                            (تقييم 347)
                        </Typography>
                        <Typography className='star'>
                            {rating}
                            <FontAwesomeIcon icon={faStar} />
                        </Typography>
                    </Box>
                }
            </Box>
        </Box>   
    )

}

export default Entity
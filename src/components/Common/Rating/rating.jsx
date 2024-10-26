
// mui
import { Box , Typography , styled } from '@mui/material'
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Rating = ({
    count,
    text
}) => {

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px'
        }}>
            <RatingText>{text}</RatingText>

            <RatingStar className='rating'>
                {count}
                <FontAwesomeIcon icon={faStar} />
            </RatingStar>
        </Box>
    )

}

export default Rating

// style
const RatingText = styled(Typography)`
    color: #000;
    font-family: 'Cairo';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const RatingStar = styled(Box)`
    display: inline-flex;
    padding: 5px 9px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 4px;
    background: rgba(255, 168, 2, 0.10);
    color: #FF9800;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.165px;
`
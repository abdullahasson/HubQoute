
// mui
import { Typography } from "@mui/material"
// style
import './date_joined.css'

const DateJoined = ({
    date
}) => {

    return (
        <Typography className='date-joined' component='p'>
            تاريخ التسجيل :

            {' '}

            <Typography component='span'>
                {date}
            </Typography>
        </Typography>
    )

}

export default DateJoined
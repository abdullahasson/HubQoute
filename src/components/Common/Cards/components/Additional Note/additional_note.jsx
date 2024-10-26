
// mui
import { Box , Typography } from "@mui/material"
// style
import './additional_note.css'


const AdditionalNote = ({
    note
}) => {

    return (
        <Box className='additional-note'>
            <Typography component='span'>
                ملاحظة إضافية :
            </Typography>

            <Typography>
                {note}
            </Typography>
        </Box>
    )

}

export default AdditionalNote
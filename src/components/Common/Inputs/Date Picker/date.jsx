
// mui/x-date-pickers
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// style
import "./date.css"



const Date = ({
    label ,
    labelLng = 'en' ,
    style

}) => { 

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer sx={{width: 'fit-content'}} components={['DatePicker']}>
                <DatePicker 
                    label={label} 
                    sx={{
                        '& .css-1aid5iq-MuiFormLabel-root-MuiInputLabel-root' :
                        { 
                            width: '76%',
                            textAlign: labelLng == 'ar' ? 'end' : 'start' 
                        } ,
                        '& .css-hkd9ju-MuiFormLabel-root-MuiInputLabel-root' : {
                            display: 'none'
                        } ,
                        '& .MuiStack-root' : {
                            width: 'fit-content'
                        }
                    }}
                />
            </DemoContainer>
        </LocalizationProvider>
    )

}

export default Date
import { useState } from 'react';
// mui
import { Box , Typography } from '@mui/material';
// library components react-phone-number-input
import PhoneInput from 'react-phone-number-input';
// css
import 'react-phone-number-input/style.css'; 
import "./phone_number.css"


const PhoneNumber = ({
    label ,
    placeholder ,
    icon ,
    className ,
    name ,
    id
}) => {


    const [value , setValue] = useState()


    return (
        <Box className='input' >

            {
                label ?     
                <Typography className="label" >
                    {label}
                </Typography> : null
            }

            <Box className="input-container">
                
                <PhoneInput
                    id={id}
                    name={name}
                    value={value}
                    onChange={setValue}
                    countries={["SA"]} // "BH", "KW" , "QA" , "AE" , "OM"
                    defaultCountry="SA" 
                    placeholder={placeholder}
                /> 
                    
                {icon}

            </Box>
        </Box>
    )

}

export default PhoneNumber
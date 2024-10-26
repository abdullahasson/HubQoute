// react
import { useState } from "react"
// mui
import { Box , TextField } from "@mui/material"
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown , faChevronUp } from "@fortawesome/free-solid-svg-icons"
// style
import "./select.css"


const Select = ({ 
    label , 
    labelLng = 'en' ,
    icon , 
    width , 
    children 
}) => {

    const [value , setValue] = useState('')
    const [focus , setFocus] = useState(false)


    const handleChange = (e) => {
        setValue(e.target.value)
        setFocus(false)
    }

    return (
        <Box className={`select-container ${labelLng}`} sx={{width: (width || "270px")}}>

            <TextField 
                fullWidth
                value={value}
                onChange={handleChange}
                label={label}
                select
                SelectProps={{
                    open: focus,
                    IconComponent: ()=> icon ? <FontAwesomeIcon icon={icon} /> : null
                }}
                onClick={() => setFocus(!focus)}

                sx={{
                    '.css-nuyhzu-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline' : {
                        border: 'none'
                    },
                    '& .css-hkd9ju-MuiFormLabel-root-MuiInputLabel-root' : {
                        display: 'none'
                    },
                    '& .css-hkd9ju-MuiFormLabel-root-MuiInputLabel-root.Mui-focused' : {
                        display: 'none'
                    } ,
                    '& .css-1aid5iq-MuiFormLabel-root-MuiInputLabel-root , .css-6lr3zb-MuiFormLabel-root-MuiInputLabel-root' : {
                        width: '80%',
                        textAlign: 'end'
                    } ,
                    '& .MuiInputBase-root' : {
                        border: 'none'
                    }
                }}
            >

                {children}

            </TextField>


            <Box className={`show-list`} onClick={()=> setFocus(!focus)}>
                <FontAwesomeIcon icon={focus ? faChevronUp : faChevronDown } />
            </Box>

        </Box>
    )

}

export default Select
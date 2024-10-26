// react
import { useState } from "react"
import { useFormContext } from "react-hook-form"
// mui
import { TextField , InputAdornment , IconButton } from "@mui/material"
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye , faEyeSlash } from "@fortawesome/fontawesome-free-regular"

const Input = ({ 
    placeholder ,
    type ,
    resourceName ,
    error=false ,
    icon 
}) => { 


    const { register } = useFormContext()

    const [showPassword , setShowPawwword] = useState(false)

    return (

        <TextField 
            {...register(resourceName)}

            error={error ? true : false}

            FormHelperTextProps={{
                style: {
                    textAlign: 'start' ,
                } , 
            }}

            placeholder={placeholder}
            helperText={error}
            size="small"
            margin="dense"
            fullWidth
            dir="rtl" 
            type={type == 'password' ? (showPassword ? 'text' : 'password') : type}

            InputProps={{
                startAdornment: (
                    <InputAdornment position="start" sx={{color: error ? '#d32f2f' : '#666'}}>
                        {icon ? <FontAwesomeIcon className='input-icon' icon={icon} /> : <></>}
                    </InputAdornment>
                ),
                    
                endAdornment: type == 'password' ? (
                    <InputAdornment position="start" sx={{color: error ? '#d32f2f' : '#666'}}>
                        <IconButton sx={{fontSize: '15px'}} onClick={() => setShowPawwword(!showPassword)}>
                            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                        </IconButton>
                    </InputAdornment>
                ) : <></>
    
            }}

            sx={{
                '& .input-icon' : {
                    paddingLeft: '9px',
                }, 
                '& .Mui-focused .input-icon' : {
                    // color: '#2140c9'
                },
                '& .css-1thjjqq-MuiInputBase-root-MuiOutlinedInput-root' : {
                    paddingRight: 0,
                    paddingLeft: '4px',
                },
                '& .css-1ua80n0-MuiInputBase-input-MuiOutlinedInput-input' : {
                    padding: '8px 0'
                } ,
                '& .css-12yjm75-MuiInputBase-input-MuiOutlinedInput-input::placeholder' : {
                    color: error ? '#d32f2f' : '#666' ,
                    textAlign: 'start'
                }
            }}

        />

    )
}

export default Input
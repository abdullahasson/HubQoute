// react
import { useContext } from "react"
// context
import { appContext } from "../../../../context/AppContext"
// mui
import { 
    Dialog ,
    Box,
    DialogActions ,
    Typography ,
    DialogContentText ,
    DialogTitle ,
    Divider,
    styled
} from "@mui/material"
import { Alert , AlertTitle , AlertText , AlertControls } from "../alerts.style"
// components
import Button from "../../Buttons/button"
// icon
import Pin from "../../../../assets/Icons/pin";
// style
// import "../Style/alert.css"
// import "./forget_password.css"


const ForgetPassword = () => {
    
    const {
        ForgetPassword ,
        setForgetPassword
    } = useContext(appContext)

    const handleClose = () => {
        setForgetPassword(false)
    }

    return (
        <Dialog
            open={ForgetPassword}
            keepMounted
            onClose={handleClose}

            sx={{
                '.css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
                    borderRadius: '22px'
                }
            }}
        >
            
            <Alert sx={{height: '560px'}}>

                <AlertTitle className="alert-title" >
                    <Pin />
                </AlertTitle>

                <AlertText sx={{height: '100px'}} component='div' className='alert-text'>                    
                    <Typography fontSize='24px' mb='12px' component='h3'> 
                        يرجي تاكيد رقم الهاتف    
                    </Typography>
                    <Typography color='#182D3F' fontSize='20px' fontWeight='500' component='p'>
                        تم ارسال كود التفعيل مكون من 4 ارقام علي الرقم 4568*******10      
                    </ Typography>
                </AlertText>

                <ValidationCode>
                    <div className="password">
                        <input maxLength={1} className="input" name="text" type="text" />
                        <input maxLength={1} className="input" name="text" type="text" />
                        <input maxLength={1} className="input" name="text" type="text" />
                        <input maxLength={1} className="input" name="text" type="text" />
                    </div>
                </ValidationCode> 

                <ExpiresIn>
                    <Typography>
                        سيتم انتهاء كود خلال    
                    </Typography>

                    <Divider>
                        00:59
                    </Divider>
                </ExpiresIn>

                <AlertControls>
                    <Button variant='acceptance'>
                        تأكيد   
                    </Button>

                    <Button onClick={handleClose} variant='reject'>
                        الغاء
                    </Button>
                </AlertControls>

            </Alert>

        </Dialog>
    )

}

export default ForgetPassword

// style 
const ValidationCode = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: centerd;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;

    & .password {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        & input {
            width: 51px;
            height: 40px;
            text-align: center;
            background-color: transparent;
            border: none;
            border-bottom: solid 2px #006BFF;
            font-size: 20px;
            color: #666;
            outline: none;
        }
    }
`

const ExpiresIn = styled(Box)`
    width: 100%;
    padding: 0 15%;
    text-align: center;
    box-sizing: border-box;

    & > :first-of-type {
        color: #546881;
        font-size: 20.608px;
        font-weight: 500;
        line-height: 30.912px; 
        margin-bottom: 10px;
    }

    & > :last-child {
        color: #F32314;
        font-size: 23.552px;
        font-style: normal;
        font-weight: 400;
    }

    &   
        .css-1puturl-MuiDivider-root::before, 
        .css-1puturl-MuiDivider-root::after {
            border-top: 1.5px solid #F32314 !important; 
    }
`
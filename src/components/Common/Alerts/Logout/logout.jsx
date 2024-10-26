// react
import { useContext } from "react"
// context
import { appContext } from "../../../../context/AppContext";
// mui
import { 
    Dialog ,
    Box,
    Typography ,
} from "@mui/material"
import { Alert , AlertTitle , AlertText , AlertControls } from "../alerts.style";
// transition
import { TransitionRight } from "../CustomDialogTransition";
// components
import Button from "../../Buttons/button"
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"

const Logout = () => {

    const { 
        LogoutDialog ,
        setLogoutDialog
    } = useContext(appContext)

    const handleClose = () => {
        setLogoutDialog(false)
    }

    return (
        <Dialog
            open={LogoutDialog}
            TransitionComponent={TransitionRight}
            keepMounted
            onClose={handleClose}

            sx={{
                '.css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
                    borderRadius: '22px'
                }
            }}
        >
            
            <Alert>

                <AlertTitle>
                    <Box className='alert-big-icon'>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    </Box>
                </AlertTitle>

                <AlertText component='div'>                    
                    <Typography color='#EA1212' component='h3'>
                        تسجيل الخروج    
                    </Typography>
                    <Typography color='#182D3F' component='p'>
                        هل متأكد من تسجيل الخروج
                    </ Typography>
                </AlertText>

                <AlertControls>
                    <Button variant='acceptance'>
                        تأكيد   
                    </Button>

                    <Button variant='reject' onClick={handleClose}>
                        الغاء
                    </Button>
                </AlertControls>

            </Alert>

        </Dialog>
    );
}

export default Logout
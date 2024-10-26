// react
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
// context
import { buyerContext } from "../../../../context/BuyerContext";
// mui
import { 
    Dialog ,
    Box,
    Typography ,
    styled,
} from "@mui/material"
import { Alert , AlertTitle , AlertText , AlertControls } from "../alerts.style";
// Transition
import { TransitionLeft } from "../CustomDialogTransition";
// components
import Button from "../../Buttons/button"


const Successfully = () => {

    const navigate = useNavigate()

    const {
        successfullyDialog , 
        setsuccessfullyDialog
    } = useContext(buyerContext)


    const handleClose = () => {
        setsuccessfullyDialog(false)
    }

    const handleNavigate = () => {
        navigate('/dashboard/buyer/statistrac')
        handleClose()
    }

    return (
        <Dialog
            open={successfullyDialog}
            TransitionComponent={TransitionLeft}
            keepMounted
            onClose={handleClose}

            sx={{
                '.css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
                    borderRadius: '22px'
                }
            }}
        >
            <Alert className='alert successfully'>
                <AlertTitle>
                    <SuccessfullyIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" width={114} height={115} viewBox="0 0 114 115" fill="none">
                            <path d="M57 17C34.3475 17 16 35.3475 16 58C16 80.6525 34.3475 99 57 99C79.6525 99 98 80.6525 98 58C98 35.3475 79.6525 17 57 17ZM53.8481 81.8825H46.9806L30.3756 58.615L37.2482 52.2087L50.4144 64.5088L76.762 34.1124L83.6295 38.9299L53.8481 81.8825Z" fill="url(#paint0_linear_320_2484)" />
                            <defs>
                                <linearGradient id="paint0_linear_320_2484" x1={57} y1={17} x2="62.5" y2="161.5" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#42B72A" />
                                <stop offset={1} stopColor="#2B781C" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
                            <circle cx={13} cy={13} r={13} fill="#42B72A" />
                        </svg>


                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" fill="none">
                            <circle cx={7} cy={7} r={7} fill="#42B72A" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" fill="none">
                            <circle cx={7} cy={7} r={7} fill="#42B72A" />
                        </svg>
                    </SuccessfullyIcon>
                </AlertTitle>

                <AlertText component='div'>                    
                    <Typography color='#42B72A' component='h3'>
                        تم نشر طلب عرض السعر بنجاح   
                    </Typography>
                    <Typography color='#182D3F' component='p'>
                        ملاحظة      
                    </ Typography>
                </AlertText>

                <AlertControls>
                    <Button 
                        style={{width: '45%'}}
                        variant='acceptance'
                        onClick={handleNavigate}
                    >
                        الرئيسية       
                    </Button>
                </AlertControls>

            </Alert>
        </Dialog>
    );


}

export default Successfully

const SuccessfullyIcon = styled(Box)`
    width: 114px;
    height: 114px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    & > svg {
        position: absolute;
    }

    & > :nth-of-type(2) {
        top: 0;
        right: -20px ;
    }

    & > :nth-of-type(3) {
        top: -10px;
        left: -10px ;
    }

    & > :nth-of-type(4) {
        bottom: 12px;
        left: -10px;
    }
`
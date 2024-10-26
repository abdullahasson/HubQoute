// react
import { useContext } from "react"
// context
import { buyerContext } from "../../../../context/BuyerContext";
// mui
import { 
    Dialog ,
    Typography ,
} from "@mui/material"
import { Alert , AlertTitle , AlertText , AlertControls } from "../alerts.style";
// Transition
import { TransitionRight } from "../CustomDialogTransition";
// components
import Button from "../../Buttons/button"
// icon
import OrderProcessed from "../../../../assets/Icons/order-processed";


const Confirmation  = () => {

    const { 
        confirmationDialog , 
        setConfirmationDialog ,
        setsuccessfullyDialog
    } = useContext(buyerContext)

    const handleClose = () => {
        setConfirmationDialog(false)
    }

    const handleConfirmation = () => {
        handleClose()
        setsuccessfullyDialog(true)
    } 

    return (
        <Dialog
            open={confirmationDialog}
            TransitionComponent={TransitionRight}
            keepMounted
            onClose={handleClose}

            sx={{
                '.css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
                    borderRadius: '22px'
                }
            }}
        >
            
            <Alert className='confirmation'>

                <AlertTitle >
                    <OrderProcessed />
                </AlertTitle>

                <AlertText component='div'>                    
                    <Typography color='#2140C9' component='h3'>
                        نشر طلب عرض السعر   
                    </Typography>
                    <Typography color='#182D3F' component='p'>
                        هل انت متأكد من نشر طلب عرض السعر     
                    </ Typography>
                </AlertText>

                <AlertControls>
                    <Button onClick={handleConfirmation} variant='acceptance' type='submit'>
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

export default Confirmation;
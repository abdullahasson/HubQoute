
// layout
import Page from "../../../../layouts/Pages/page"
import CardContainer from "../../../../layouts/Card container/card_container"
// mui
import { Box , Checkbox , FormControlLabel , FormGroup , FormLabel } from "@mui/material"
// components
import QuotationsWithPictures from "../../../Common/Cards/Quotations/Quotations with pictures/quotations_with_pictures"
// icon
import { faComments } from "@fortawesome/fontawesome-free-regular"
// style 
import './requests_for_quotations.css'
// fake content
import  { quotations } from "../../../../fake-content"
 
const RequestsForQuotations = () => {

    return (   
        <Page 
            className='requests-for-quotations-admin'
            title='جميع طلبات عروض الأسعار'
            titleIcon={faComments}
            CurrentPage='طلبات عروض الأسعار'
            PreviousPage='الرئيسية'
            searchInput={true}
        >
            
            <Box className='controls' sx={{textAlign: 'right' , marginBottom: 2.5}}>
                <FormLabel> 
                    حالة الطلب
                </FormLabel>
                <FormGroup className='checkboxs' row={true} >
                    <FormControlLabel control={<Checkbox size="small" color="success" />} label="العروض الملغية" />
                    <FormControlLabel control={<Checkbox size="small" color="success" />} label="عروض مقدمة" />
                    <FormControlLabel control={<Checkbox size="small" color="success" />} label="عروض جديدة" />
                    <FormControlLabel control={<Checkbox size="small" color="success" />} label="عرض الكل" />
                </FormGroup>
            </Box>
        

            <CardContainer
                data={quotations}
                resourceName='data'
                card={QuotationsWithPictures}
            />
            
        </Page>
    )

}

export default RequestsForQuotations
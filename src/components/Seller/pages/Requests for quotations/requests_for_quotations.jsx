
// layout
import Page from "../../../../layouts/Pages/page"
import CardContainer from "../../../../layouts/Card container/card_container"
// mui
import { Box , Stack , Checkbox , FormControlLabel } from "@mui/material"
// components
import RequestsCard from "../../../Common/Cards/Requests/requests_card"
import Date from "../../../Common/Inputs/Date Picker/date"
import Search from "../../../Common/Inputs/Search/search"
import Button from "../../../Common/Buttons/button"
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faComments , faSquare } from "@fortawesome/fontawesome-free-regular"
// style
import './requests_for_quotations.css'
// fake content
import  { requests } from "../../../../fake-content"
 
const RequestsForQuotationss = () => {

    return (   
        <Page 
            className='requests-for-quotations'
            title='طلبات عروض الأسعار'
            contentNumber={`(${requests.length})`}
            titleIcon={faComments}
            CurrentPage='طلبات عروض الأسعار'
            PreviousPage='الصفحة الرئيسية'
            PreviousPageIcon={faComments}
            searchInput={false}
        >
            <Box sx={{width: '100%'}}>
                <Stack sx={{width: '100%'}} className='filterss' flexDirection='row-reverse'>

                    <Search style={{height: '60px' , width: '400px'}} />

                    <Date label='تاريخ الأصدار' labelLng="ar"/>

                    <FormControlLabel 
                        className="checkbox-label"
                        control={
                            <Checkbox 
                                defaultChecked 
                                icon={<FontAwesomeIcon icon={faSquare} className='icon' />}
                                checkedIcon={<FontAwesomeIcon icon={faSquareCheck} className='icon checked-icon' />}
                            />
                        } 
                        label="حسب أقرب تاريخ استحقاق" 
                    />

                </Stack>

                <Box className="requests">

                    <Box className="head">
                        <h2>
                            طلبات العروض الأسعار الحديثة
                        </h2>

                        <Stack sx={{width: 'fit-content'}}>
                            <Button style={{padding: '5px 10px' ,gap: '9px'}} variant='acceptance'> 
                                <span>عرض جميع الطلبات</span>
                            </Button>

                            <Button id="view_pending_orders" style={{padding: '5px 10px' ,gap: '9px'}} variant='closed active'>
                                <span>عرض الطلبات المعلقة</span>
                            </Button>

                        </Stack>
                    </Box>

                    <CardContainer 
                        data={requests}
                        resourceName='requests'
                        card={RequestsCard}
                    />

                </Box>

            </Box>
        </Page>
    )

}

export default RequestsForQuotationss
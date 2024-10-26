// react
// layout
import Page from "../../../../layouts/Pages/page"
import CardContainer from "../../../../layouts/Card container/card_container"
// mui
import { Stack } from "@mui/material"
// components
import Date from "../../../Common/Inputs/Date Picker/date"
import Search from "../../../Common/Inputs/Search/search"
import RequestsCard from "../../../Common/Cards/Requests/requests_card"
// icon
import { faComments } from "@fortawesome/fontawesome-free-regular"
// fake content
import  { requests } from "../../../../fake-content"
 
const RequestsForQuotations = () => {

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

            <Stack sx={{marginBottom: 2.7}}>
                <Date label='تاريخ الإصدار' labelLng="ar" />
                <Search style={{height: '60px' , width: '350px'}} />
            </Stack>

            <CardContainer 
                data={requests}
                resourceName='requests'
                card={RequestsCard}
            />
            
        </Page>
    )

}

export default RequestsForQuotations
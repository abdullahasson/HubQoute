// layout
import Page from "../../../../layouts/Pages/page"
import CardContainer from "../../../../layouts/Card container/card_container"
// mui
import { Stack , MenuItem } from "@mui/material"
// components
import BuyersCard from "../../../Common/Cards/buyers/buyers_card"
import Select from "../../../Common/Inputs/Select/select"
// icon
import { faGlobe , faTableList } from "@fortawesome/free-solid-svg-icons"
import { faComments } from "@fortawesome/fontawesome-free-regular" 
// fake content
import { buyers } from "../../../../fake-content"


const Buyers = () => {

    return (
        <Page
            className='buyers'
            title='جميع المشترين'
            titleIcon={faComments}
            CurrentPage='المشترين'
            PreviousPage='الرئيسية'
            searchInput={false}
        > 
            <Stack sx={{marginBottom: 2.7}}>

                <Select 
                    label='المدينة / البلد'
                    icon={faGlobe}
                >
                    <MenuItem value='a'>A</MenuItem>
                    <MenuItem value='b'>B</MenuItem>
                    <MenuItem value='c'>C</MenuItem>
                </Select>

                <Select 
                    label='اختر الفئة'
                    icon={faTableList}
                >
                    <MenuItem value='a'>A</MenuItem>
                    <MenuItem value='b'>B</MenuItem>
                    <MenuItem value='c'>C</MenuItem>
                </Select>

            </Stack> 

            <CardContainer 
                data={buyers}
                resourceName='buyers'
                card={BuyersCard}
                style={{direction: 'rtl'}}
            />
        </Page>
    )
    
}

export default Buyers;
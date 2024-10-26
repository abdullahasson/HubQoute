
// layout
import Page from "../../../../layouts/Pages/page"
import CardContainer from "../../../../layouts/Card container/card_container"
// mui
import { Stack , MenuItem } from "@mui/material"
// components
import ClientsCard from "../../../Common/Cards/Clients/clients_card"
import Select from "../../../Common/Inputs/Select/select"
// icon
import { faGlobe , faTableList } from "@fortawesome/free-solid-svg-icons"
import { faComments } from "@fortawesome/fontawesome-free-regular" 
// fake content
import { clients } from "../../../../fake-content"

const Clients = () => {

    return (
        <Page
            className='clients'
            title='جميع العملاء'
            titleIcon={faComments}
            CurrentPage='العملاء'
            PreviousPage='الرئيسية'
            searchInput={true}
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
                data={clients}
                resourceName='clients'
                card={ClientsCard}
                style={{direction: 'rtl'}}
            />
        </Page>
    )
    
}

export default Clients;
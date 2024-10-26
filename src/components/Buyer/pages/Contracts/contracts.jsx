
// layout
import Page from "../../../../layouts/Pages/page"
import CardContainer from "../../../../layouts/Card container/card_container"
// mui
import { MenuItem } from "@mui/material"
// components
import ContractsCard from "../../../Common/Cards/Contracts/contracts_card"
import Select from "../../../Common/Inputs/Select/select"
// icon
import { faNewspaper , faStore } from "@fortawesome/free-solid-svg-icons"
// fake content
import { contracts } from "../../../../fake-content"


const Contracts = () => {

    return (
        <Page
            className='contracts'
            title='كل العقود'
            titleIcon={faNewspaper}
            CurrentPage='كل العقود'
            PreviousPage='الرئيسية'
            PreviousPageIcon={faStore}
            searchInput={true}

            head={
                <Select 
                    label='اختر حالة الطلب' 
                >
                    <MenuItem value='a'>A</MenuItem>
                    <MenuItem value='b'>B</MenuItem>
                    <MenuItem value='c'>C</MenuItem>
                </Select>
            }
        > 

            <CardContainer 
                data={contracts}
                resourceName='contracts'
                card={ContractsCard}
            />

        </Page>
    )
    
}

export default Contracts;
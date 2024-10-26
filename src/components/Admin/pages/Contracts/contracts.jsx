
// layout
import Page from "../../../../layouts/Pages/page"
import CardContainer from "../../../../layouts/Card container/card_container"
// mui
import { Stack , MenuItem } from "@mui/material"
// components
import Label from "../../../Common/Label/label"
import ContractsCard from "../../../Common/Cards/Contracts/contracts_card"
import Date from "../../../Common/Inputs/Date Picker/date"
import Select from "../../../Common/Inputs/Select/select"
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
        > 
            <Stack justifyContent='start' sx={{marginBottom: 2.7}}>

                <Label text='Due Date'>
                    <Stack flexDirection='row' gap={0.7}>
                        <Date label='From' />
                        <Date label='To' />
                    </Stack>
                </Label>

                <Label text='plan'>
                    <Select 
                        label='plan'
                        labelLng='en'
                    >
                        <MenuItem value='a'>A</MenuItem>
                        <MenuItem value='b'>B</MenuItem>
                        <MenuItem value='c'>C</MenuItem>
                    </Select>
                </Label>

                <Label text='Set Status To'>
                    <Select 
                        label='select status'
                        labelLng='en'
                    >
                        <MenuItem value='a'>A</MenuItem>
                        <MenuItem value='b'>B</MenuItem>
                        <MenuItem value='c'>C</MenuItem>
                    </Select>
                </Label>

            </Stack>

            <CardContainer 
                data={contracts}
                resourceName='contracts'
                card={ContractsCard}
            />
        </Page>
    )
    
}

export default Contracts;
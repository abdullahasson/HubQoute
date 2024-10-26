
// layout
import Page from "../../../layouts/Pages/page"
import CardContainer from "../../../layouts/Card container/card_container"
// mui
import { Stack , Box , MenuItem } from "@mui/material"
// components
import SupplierCard from "../../Common/Cards/Supplier/supplier_card"
import Select from "../../Common/Inputs/Select/select"
import Button from "../../Common/Buttons/button"
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe , faTableList , faSquarePlus } from "@fortawesome/free-solid-svg-icons"
import { faNewspaper } from "@fortawesome/fontawesome-free-regular"
// fake content
import { supplier } from "../../../fake-content"


const SupplierMarket = () => {

    return (    
        <Page
            className='supplier-market'
            title='كل الموردين'
            titleIcon={faNewspaper}
            contentNumber={`(${supplier.length})`}
            CurrentPage='كل الموردين'
            PreviousPage='الصفحة الرئيسية'
            searchInput={true}

            head={
                <Button variant='acceptance' style={{padding: '4px 16px'}}>
                    <FontAwesomeIcon icon={faSquarePlus} bounce />
                    إضافة مورد
                </Button>
            }
        >   

            <Box sx={{width: "100%"}}>

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
                    data={supplier}
                    resourceName='suppliers'
                    card={SupplierCard}
                />

            </Box>
        </Page>
    )

}

export default SupplierMarket
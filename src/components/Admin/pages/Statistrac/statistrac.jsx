
// mui
import { Box , Stack , MenuItem , Typography , Grid } from "@mui/material"
// layout
import CardContainer from "../../../../layouts/Card container/card_container"
// components
import SupplierCard from "../../../Common/Cards/Supplier/supplier_card"
import Button from "../../../Common/Buttons/button"
import Select from "../../../Common/Inputs/Select/select"
import Total from "../../../Common/Cards/Total/total"
// icon
import { faGlobe , faTableList , faUsers , faIdCard , faCartShopping , faFerry , faTableColumns } from "@fortawesome/free-solid-svg-icons"
// style
import './statistrac.css'
// fake content
import { supplier } from "../../../../fake-content"


const Statistrac = () => {

    return (
        <Box className="statistrac-admin">

            <Box className='totals'>
                <Total
                    title='عدد المستخدمين'
                    tot='152k'
                    icon={faUsers}
                    color='#2140C9'
                    bg='#E7ECFF'
                />                

                <Total
                    title='عدد الزيارات'
                    tot='152k'
                    icon={faIdCard}
                    color='#FE6E01'
                    bg='#FFE59A33'
                />                
        
                <Total
                    title='عدد المشترين'
                    tot='152k'
                    icon={faCartShopping}
                    color='#42B72A'
                    bg='#42B72A1A'
                />                

                <Total
                    title='عدد البائعين'
                    tot='152k'
                    icon={faFerry}
                    color='#2140C9'
                    bg='#E7ECFF'
                />                

                <Total
                    title='عدد الطلبات المفتوحه'
                    tot='152k'
                    icon={faTableColumns}
                    color='#F579FF'
                    bg='#FFBEF933'
                />                

            </Box>
   
            <Box className='statistrac-admin-controls'>
                <Stack flexDirection='row' gap={2}>
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


                <Box className='manage'>
                    <Typography>
                       .. إدارة المشترين والموردين
                    </Typography>

                    <Box className='buttons'>
                        <Button variant='acceptance-thin'>
                            المشترين    
                        </Button>

                        <Button variant='acceptance'>
                            الموردين    
                        </Button>
                    </Box>
                </Box>
                
            </Box>
            
            <CardContainer
                data={supplier}
                resourceName='suppliers'
                card={SupplierCard}
            />

        </Box>
    )

}

export default Statistrac
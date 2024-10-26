// react
import { useState , useContext , useEffect } from "react"
// context
import { appContext } from "../../../../context/AppContext";
// layout
import CardContainer from "../../../../layouts/Card container/card_container"
// mui
import { Box , Tab , Tabs } from "@mui/material"
// components
import Products from "../../../Common/Cards/Products/products"
import Summary from "./components/Summary/summary";
import ActiveCertificates from "./components/Active Certificates/active_certificates";
import Head from "./components/Head/head"
import CustomTabPanel from "../../../Common/Tab Panel/custom_tab_panel";
import Rating from "../../../Common/Rating/rating";
import Table from "./components/Table/table";
// icon
// style
import "./profile.css"
import { quotations } from "../../../../fake-content";



function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Profile = () => {

    const {
        setSearshInput
    } = useContext(appContext)
    
    useEffect(() => {
        setSearshInput(false)
    } , [])


    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <Box className="profile">

            <Head />

            <Box className='tabs-control'>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="الطلبات" {...a11yProps(0)} />
                    <Tab label="المنتجات" {...a11yProps(0)} />
                </Tabs>

                <Rating count='4.5' text='التقييم' />
            </Box>

            <CustomTabPanel value={value} index={0}>
                <Box className='panel-layout'>
                    <Box>
                        <Summary />
                        <ActiveCertificates />
                    </Box>

                    <Box>
                        <Table />
                    </Box>     
                </Box>
            </CustomTabPanel>
            
            <CustomTabPanel value={value} index={1}>
                <CardContainer 
                    data={quotations}
                    resourceName='data'
                    card={Products}
                />
            </CustomTabPanel>

        </Box>
    ) 

}

export default Profile 
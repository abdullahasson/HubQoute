
// mui
import { Box , Divider } from "@mui/material"
// components
import CardHeader from "../components/Head/Card Header/card_header"
import Info from "../components/Info/info"
import Button from "../../Buttons/button"
// style
import "./requests_card.css"


const RequestsCard = ({ 
    requests 
}) => (
    <Box className="requests-card">        

        <CardHeader info={requests} />

        <Divider />

        <Info data={requests} />

        <div className="buttons">
            <Button style={{width:'45%'}} variant='schedule'>
                كل التفاصيل 
            </Button>

            <Button style={{width:'45%'}} variant='acceptance'>
                طلب عرض
            </Button>
        </div>
        
    </Box>
)

export default RequestsCard
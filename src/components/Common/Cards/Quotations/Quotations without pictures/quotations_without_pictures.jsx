
// mui 
import { Box , Divider } from "@mui/material"
// components
import CardHeader from "../../components/Head/Card Header/card_header"
import Info from "../../components/Info/info"
import Button from "../../../Buttons/button"

const QuotationsWithoutPictures = ({ data }) => (

    <Box className="quotations-card">        

        <CardHeader info={data} />

        <Divider />

        <Info data={data} />


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

export default QuotationsWithoutPictures

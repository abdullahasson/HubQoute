
// mui
import { Box , Stack , Divider } from "@mui/material"
// components
import Info from "../components/Info/info"
import Button from "../../Buttons/button"
// style
import "./products.css"

const Card = ({ data }) => (
    <Box className="products-card">        

        <ul>
            <li>
                <div>
                    <img src={data.srcImg} alt="" />
                </div>
            </li>                
        </ul>

        <Info data={data} />

        <Stack className="buttons" flexDirection='row'>
            <Button style={{width:'45%'}} variant='schedule'>
                كل التفاصيل 
            </Button>

            <Button style={{width:'45%'}} variant='acceptance'>
                طلب عرض
            </Button>
        </Stack>
    </Box>
)

export default Card
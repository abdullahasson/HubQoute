
import { useNavigate } from "react-router-dom"
// mui
import { Box , Divider } from "@mui/material"
// components
import CardHeader from "../components/Head/Card Header/card_header"
import Info from "../components/Info/info"
import Button from "../../Buttons/button"
// style
import "./offer_card.css"



const OfferCard = ({ offers }) => {

    const navigate = useNavigate()

    return (
        <Box className="offers-card">        

            <CardHeader info={offers} />

            <Divider />


            <Info data={offers} />

            <div className="total-price">
                <p>Total Price :</p>
                <span>{offers.TotalPrice}</span>
            </div>

            <div className="buttons">
                <Button style={{width: '45%' ,padding: '3px 8px'}} variant='reject'>
                    رفض الطلب
                </Button>

                <Button style={{width: '45%' ,padding: '3px 8px'}} variant='acceptance' onClick={() => navigate(`/dashboard/buyer/offers-received/${offers.id}`)}>
                    تفاصيل العرض    
                </Button>
            </div>
        </Box>
    )

}

export default OfferCard
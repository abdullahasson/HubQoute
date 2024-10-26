// mui
import { Box , Typography } from "@mui/material"
// components
import CardContainer from "../../../../../../layouts/Card container/card_container"
import RfqCard from "../../../../../Common/Cards/RFQ/rfq_card"
// style
import './horizontal_page.css'
// fake content
import { rfq } from "../../../../../../fake-content"


const HorizontalPage = () => {


    return (
        <Box className='rfq-horizontal'>
            <Box className='head'>
                <Typography component='span'>Rank</Typography>
                <Typography component='span'>Supplier</Typography>
                <Typography component='span'>Product</Typography>
                <Typography component='span'>Order Qty</Typography>
                <Typography component='span'>Weight</Typography>
                <Typography component='span'>Unit price $/Ton</Typography>
                <Typography component='span'>Total price</Typography>
                <Typography component='span'>Shipping terms</Typography>
                <Typography component='span'>Dead Time</Typography>
                <Typography component='span'>Payment Terms</Typography>
                <Typography component='span'>Order comare</Typography>
            </Box>

            <Box className='body'>
                <CardContainer 
                    data={rfq}
                    resourceName='rfq'
                    card={RfqCard}
                    columnsNumber={1}
                    spacing={5}
                    cardProps={{
                        position: 'horizontal'
                    }}
                />
            </Box>
        </Box>
    )

}

export default HorizontalPage
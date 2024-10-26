// mui
import { Box , Divider, Typography } from "@mui/material"
// components
import CardHeader from "../components/Head/Card Header/card_header"
import Info from "../components/Info/info"
import Button from "../../Buttons/button"
// style
import "./rfq_card.css"
// img
import two from "../../../../assets/images/two.jpg"

const RfqCard = ({
    rfq ,
    position = 'horizontal'
}) => {

    const isHorizontal = position == 'horizontal'

    return isHorizontal ? (
        <Box className='rfq-horizontal-card'>
            <Box className='card'>
                <Box className='cardHeader'>
                    <img src={two} alt="" />
                    <CardHeader info={{name:'Grey fabrica' , location:'Lesch Field' , star:'4.5' , rating:'347 تقييم' }} />
                    <Box className='product-image'>
                        <Typography>
                            {rfq.products[0].product}
                        </Typography>
                        <img src={rfq.products[1].img} alt="" />
                    </Box>
                </Box>
                <Box className='cardBody'>
                    <Typography component='span'>1000 Units</Typography>
                    <Typography component='span'>1 Ton</Typography>
                    <Typography component='span'>$ 1000</Typography>
                    <Typography component='span'>1.000.000 USD</Typography>
                    <Typography component='span'>FOB, Mumbai</Typography>
                    <Typography component='span'>4 Weeks</Typography>
                    <Typography component='span'>Cash</Typography>
                    <Typography component='span' className='rr'>Underpriced</Typography>
                </Box>
            </Box>

            <Button id='counter_offer_btn' variant='acceptance'>Counter offer</Button>
        </Box>
    ) :
    (
        <Box className='rfq-card'>

            <Box className='rank'>
                <Box>
                    <Box className='image-border'>
                        <img src={two} />
                    </Box>
                </Box>
            </Box>

            <CardHeader info={rfq} />

            <Box sx={{width: '100%' , marginBottom: '10px'}}>
                <Divider  />
            </Box>

            <Box className='products'>
                <Box className='item'>
                    <Info data={rfq.products[0]} gap='5px' />
                    <Box className='itemImage'>
                        <Typography component='p'>Product image</Typography>
                        <img src={rfq.products[0].img} />
                    </Box>
                </Box>

                <Box className='item'>
                    <Info data={rfq.products[1]} gap='5px' />
                    <Box className='itemImage'>
                        <Typography component='p'>Product image</Typography>
                        <img src={rfq.products[1].img} />
                    </Box>
                </Box>
            </Box>

            <Box sx={{width: '100%' , marginTop: '10px'}}>
                <Divider  />
            </Box>

            <Info data={rfq.shopping} gap="8px" />

            <Box sx={{width: '100%' , margin: '10px'}}>
                <Divider  />
            </Box>

            <Button style={{padding: '3px' , width: '100%'}} variant='acceptance'>
                Counter offer
            </Button>

        </Box>
    )

} 

export default RfqCard
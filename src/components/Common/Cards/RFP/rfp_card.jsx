// mui
import { Box , Typography , Divider , styled } from "@mui/material"
// components
import CardHeader from "../components/Head/Card Header/card_header"
import Button from "../../Buttons/button"
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCommentDots } from "@fortawesome/fontawesome-free-regular"


const RfpCard = ({
    rfp,
    design
}) => {

    const isHorizontal = design === "horizontal"

    return (
        <Box 
            className='rfi-card' 
            sx={{
                display: 'flex' , 
                alignItems: 'center' , 
                flexDirection: 'column',
                justifyContent: isHorizontal ? 'space-between' : 'start',
                gap: isHorizontal ? '18px' : '0'
            }}
        >
            <Box 
                width='100%' 
                sx={{
                    display: 'flex' , 
                    alignItems: isHorizontal ? 'start' : 'center' , 
                    flexDirection: isHorizontal ? 'row' : 'column',
                    justifyContent: isHorizontal ? 'start' : 'start',
                    gap: isHorizontal ? '18px' : '0'
                }}
            >
                <CardHeader design={design} info={rfp} />

                {
                    isHorizontal ? null : (
                        <Box sx={{width: '100%' , marginBottom: '10px'}}>
                            <Divider  />
                        </Box>
                    )
                }

                <Box 
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        width: isHorizontal ? "70%" : '100%',
                        gap: 2,
                        justifyContent: 'space-between'
                    }}
                >

                    <Box width={isHorizontal ? '25%' : '100%'}>
                        <Typography component='h4' className='small-title'>Product name</Typography>
                        {rfp.productName}
                    </Box>

                    <Box width={isHorizontal ? '25%' : '100%'} sx={{mt: isHorizontal ? 0 : 1}}>
                        <Typography component='h4' className='small-title'>Content</Typography>
                        {rfp.content}
                    </Box>

                    <Box width={isHorizontal ? '25%' : '100%'} sx={{mt: isHorizontal ? 0 : 1}}>
                        <Typography component='h4' className='small-title'>Size</Typography>
                        {rfp.size}
                    </Box>

                    <Box width={isHorizontal ? '25%' : '100%'} sx={{mt: isHorizontal ? 0 : 1}}>
                        <Typography component='h4' className='small-title'>Special notes</Typography>
                        {rfp.specialNotes}
                    </Box>

                    <ProductImage design={design}>
                        <Typography component='h4' className='small-title'>
                            Product image
                        </Typography>

                        <img src={rfp.productImage} alt="" />
                    </ProductImage>

                </Box>
            </Box>

            {
                isHorizontal ? null : (
                    <Box sx={{width: '100%' , marginBottom: '10px'}}>
                        <Divider  />
                    </Box>
                )
            }

            <Button style={{padding: '3px' , width: isHorizontal ? '25%' : '100%'}} variant='acceptance'>
                تواصل مع المورد
                <FontAwesomeIcon icon={faCommentDots} />
            </Button>
        </Box>
    )

}

export default RfpCard

const ProductImage = styled(Box)(({design}) => ({
    padding: '0',
    margin: '10px 0',
    width: design === "horizontal" ? '18%' : '100%',

    '& .small-title' : {  
        color: 'var(--primary-button-background-color)',
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '29.98px',
        letterSpacing: '-0.16500000655651093px',
        textAlign: 'left',
    },


   '& img' : {
        width: design === "horizontal" ? '200px' : '100%',
        borderRadius: '5px',
    }
}))
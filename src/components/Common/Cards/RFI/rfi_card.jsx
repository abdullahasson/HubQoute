
// mui
import { Box , Divider , Typography , styled } from "@mui/material"
import ReadMoreReact from 'read-more-react';
// components
import CardHeader from "../components/Head/Card Header/card_header"
import Button from "../../Buttons/button"
// icon 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCommentDots } from "@fortawesome/fontawesome-free-regular"
// style
import "./rfi_card.css"

const RfiCard = ({
    rfi,
    design
}) => {

    const isHorizontal = design === "horizontal"

    return (
        <Box 
            className='rfi-card' 
            sx={{
                display: 'flex' , 
                alignItems: 'center' , 
                flexDirection: isHorizontal ? 'row' : 'column',
                justifyContent: isHorizontal ? 'space-between' : 'start',
                gap: isHorizontal ? '18px' : '0'
            }}
        >

            <CardHeader design={design} info={rfi} />

            {
                isHorizontal ? null : (
                    <Box sx={{width: '100%' , marginBottom: '10px'}}>
                        <Divider  />
                    </Box>
                )
            }

            <Box width={isHorizontal ? '25%' : '100%'}>
                <Typography component='h4' className='small-title'>Response</Typography>
                <ReadMoreReact 
                    text={rfi.response}
                    min={12}
                    readMoreText={'more'}
                />
            </Box>

            <ProductImage design={design}>
                <Typography component='h4' className='small-title'>
                    Product image
                </Typography>

                <img src={rfi.productImage} alt="" />
            </ProductImage>

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

export default RfiCard


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
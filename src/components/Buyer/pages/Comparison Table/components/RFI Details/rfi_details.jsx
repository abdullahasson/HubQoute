
// mui
import { Box , Typography , styled } from "@mui/material"
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
// img
import img1 from "../../../../../../assets/images/product 8.jpg"


const RfiDetails = ({ 
    design 
}) => {

    const isHorizontal = design === "horizontal"

    return (
        <InfosBox design={design}>
            <InfosList design={design}>
                <Box>
                    <Typography component='h4'>
                        <FontAwesomeIcon icon={faCircle} />
                        نوع الطلب :
                        {' '}
                        <Typography component='span'>
                            Request for info ( RFI )
                        </Typography>
                    </Typography>
                    {
                        isHorizontal ? (
                            <ProductImage sx={{marginTop: 6}} design={design}>
                                <Typography component='h4' className='small-title'>
                                    Product image
                                </Typography>
        
                                <img src={img1} alt="" />
                            </ProductImage>
                        ) : null
                    }
                </Box>

                <Box>
                    <Typography component='h4'>
                        <FontAwesomeIcon icon={faCircle} />
                        تفاصيل الاستفسار :
                    </Typography>
                    <Typography sx={{marginBottom: 2}}>
                        <Typography color='#2140c9' component='span'>
                            نوع المنتج / الخدمة:{' '}
                        </Typography>
                        وصف دقيق للمنتج أو الخدمة المطلوبة.
                    </Typography>
                    <Typography sx={{marginBottom: 2}}>
                        <Typography color='#2140c9' component='span'>
                            المشكلة:{'  '}
                        </Typography>
                        وصف دقيق للمنتج أو الخدمة المطلوبة.
                    </Typography>
                    <Typography>
                        <Typography color='#2140c9' component='span'>
                            المتطلبات:{' '}
                        </Typography>
                        وصف دقيق للمنتج أو الخدمة المطلوبة.
                    </Typography>
                </Box>

                <Box>
                    <Typography component='h4'>
                        <FontAwesomeIcon icon={faCircle} />
                        ملاحظات مهمة:
                    </Typography>
                    <Typography>
                        <Typography color='#2140c9' component='span'>
                            المواصفات الفنية: {' '}
                        </Typography>
                        تفاصيل حول المواصفات التي يجب أن يتوافق معها المنتج أو الخدمة
                    </Typography>
                </Box>
            </InfosList>

            {
                isHorizontal ? null : (
                    <ProductImage sx={{marginTop: 6}} design={design}>
                        <Typography component='h4' className='small-title'>
                            Product image
                        </Typography>
        
                        <img src={img1} alt="" />
                    </ProductImage>
                )
            }
        </InfosBox>
    )

}

export default RfiDetails

const InfosBox = styled(Box)(({ design }) => ({
    width: design == 'horizontal' ? "100%" : "314px",
    height: design == 'horizontal' ? "314px" : "auto",
    background: 'var(--primary-card-background-color)',
    padding: design == 'horizontal' ? '10px 40px' : '40px 10px',
    borderRadius: '16px',
    alignSelf: 'baseline',
    border: '1px solid #2140c9',
    display: design == 'horizontal' ? "flex" : "block",
    flexDirection: design == 'horizontal' ? "row-reverse" : "column",
}))

const InfosList = styled(Box)(({ design }) => ({
    direction: 'rtl',
    display: 'flex',
    flexDirection: design == 'horizontal' ? 'row' : 'column',
    gap: '72px',
    marginBottom: design == 'horizontal' ? "0" : '66px',

    '& > div' : {
        width: '100%'
    },

    '& > div h4' : {
        fontSize: '18px',
        fontWeight: '600',
        lineHeight: '19.2px',
        marginBottom: '10px',
    },

    '& > div svg' : {
        color: '#0CCACA',
        marginLeft: '10px',
    },

    '& > div p ' : {
        fontWeight: 400,
    },

    '& > div span' : {
        color: '#2140c9',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '19.2px'
    }
}))


const ProductImage = styled(Box)(({ design }) => ({
    padding: '0',
    margin: '10px 0',
    width: '100%',

    '& .small-title' : {  
        color: 'var(--primary-button-background-color)',
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '29.98px',
        letterSpacing: '-0.16500000655651093px',
        textAlign: 'left',
    },


   '& img' : {
        width: design == 'horizontal' ? '120px' : '100%',
        borderRadius: '5px',
    }
}))

// mui
import { 
    Box ,
    Typography , 
    IconButton ,
    Badge ,
    Divider
} from '@mui/material';
// swiper
import { SwiperSlide } from 'swiper/react';
// components
import ImageSlider from "../components/Image Slider/image_slider"
import Info from '../components/Info/info';
import Mark from '../components/Mark/mark';
import Button from "../../Buttons/button"
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from "@fortawesome/fontawesome-free-regular";
import { faLocationDot , faStar , faCircleCheck } from "@fortawesome/free-solid-svg-icons"
// img
import Img from "../../../../assets/images/supplier.png"
// style 
import './suggested_products_card.css'

const SuggestedProductsCard = ({
    product
}) => {

    const { img } = product

    return (
        <Box className='product-card'>

            <Box sx={{position: 'relative'}}>

                <Mark text='Verified supplier' icon={faCircleCheck} variant='verified' />
                <Mark text='عرض جديد' variant='new-offer' />

                <ImageSlider>
                    {
                        img.map(
                            (item , index) => (
                                <SwiperSlide key={index}>
                                    <img src={item} alt="" />
                                </SwiperSlide>
                            )
                        )
                    }
                </ImageSlider>
            </Box>


            <Info data={product} />

            <ul>
            <li>
                <img style={{height: '55px'}} src={Img} alt="" />
                <div className="text-info">
                    <div>
                        <p>Grey fabrica & materials</p>
                        
                        <span className="location">
                            <FontAwesomeIcon icon={faLocationDot} />
                            Lesch Field
                        </span>
                        <span className="location">
                            Nearest port : Mumbai port
                        </span>
                        <div className="rating">
                            <span className="star">
                                <FontAwesomeIcon icon={faStar} />
                                4.5
                            </span>
                            <span>
                                (347 تقييم)
                            </span>
                        </div>
                    </div>
                    <button>
                        Supplier
                    </button>
                </div>
            </li>
            </ul>

            <Divider />

            <Box className='buttons'>
                <Box className="chat">
                    <Typography variant="body2" display='inline'>
                        Chat
                    </Typography>

                    <IconButton>
                        <Badge badgeContent={2} color="primary" size={3}>
                            <FontAwesomeIcon icon={faComment} />
                        </Badge>
                    </IconButton>
                </Box>

                <Button variant='acceptance'>
                    تقديم طلب عرض سعر
                </Button>
            </Box>
        </Box>
    )

}

export default SuggestedProductsCard
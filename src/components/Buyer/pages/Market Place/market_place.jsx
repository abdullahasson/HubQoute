
// mui
import { Box , Breadcrumbs , Typography , Link , Stack , MenuItem } from "@mui/material"
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Autoplay } from 'swiper/modules';
// components
import CardContainer from "../../../../layouts/Card container/card_container"
import SuggestedProductsCard from "../../../Common/Cards/Suggested Products/suggested_products_card";
import PageTitle from "../../../Common/Pages Title/page_title";
import Select from "../../../Common/Inputs/Select/select"
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft , faSliders , faGlobe , faTableList , faTag , faStore } from "@fortawesome/free-solid-svg-icons"
// img
import slide1 from "../../../../assets/images/search.jpg"

// swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// style
import './market_place.css'
// fake content
import { products } from "../../../../fake-content"


const MarketPlace = () => {

    return (
        <Box className='market-place page'>

            <Box sx={{display: 'flex' , flexDirection: 'row-reverse' , gap: 3 , alignItems: 'center'}}>
                <Breadcrumbs separator={<FontAwesomeIcon icon={faChevronLeft} />} aria-label="breadcrumb">
                    <Typography className="current-page">
                        السوق التجاري
                    </Typography>

                    <Link
                        underline="hover"
                        color="inherit"
                        onClick={() => navigate(-1)}
                        className="previous-page"
                    >
                        الرئيسية
                    </Link>
                </Breadcrumbs>

                <PageTitle iconTitle={faStore}>
                    السوق التجاري
                </PageTitle>
            </Box>


            <Swiper
                id="marker-place-head-slider"
                modules={[Pagination , Autoplay]}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                speed={1200}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                </SwiperSlide>
                <SwiperSlide className="XZER">Slide 2</SwiperSlide>
                <SwiperSlide className="XZER">Slide 3</SwiperSlide>
                <SwiperSlide className="XZER">Slide 4</SwiperSlide>
            </Swiper>

            <Box className='market-place-content'>
                <Box className='filters'>
                    <Typography component='h3'>
                        الفلتر
                        {' '}
                        <FontAwesomeIcon icon={faSliders} />
                    </Typography>
                    
                    <Stack direction='row-reverse'>
                        <Select
                            label='اختر الفئة' 
                            labelLng='ar'
                            icon={faTableList}
                        >
                            <MenuItem value='a'>A</MenuItem>
                            <MenuItem value='b'>B</MenuItem>
                            <MenuItem value='c'>C</MenuItem>
                        </Select>

                        <Select
                            label='البلد / المدينة' 
                            labelLng='ar'
                            icon={faGlobe}
                        >
                            <MenuItem value='a'>A</MenuItem>
                            <MenuItem value='b'>B</MenuItem>
                            <MenuItem value='c'>C</MenuItem>
                        </Select>

                        <Select
                            label='حسب السعر' 
                            labelLng='ar'
                            icon={faTag}
                        >
                            <MenuItem value='a'>A</MenuItem>
                            <MenuItem value='b'>B</MenuItem>
                            <MenuItem value='c'>C</MenuItem>
                        </Select>
                    </Stack>
                </Box>



                <Box className='filtering-result' sx={{marginTop: 2.7}}>

                    <Typography>
                        المنتجات المقترحة
                    </Typography>

                    <CardContainer 
                        data={products}
                        resourceName='product'
                        card={SuggestedProductsCard}
                    />
                </Box>

            </Box>

        </Box>
    )

}

export default MarketPlace
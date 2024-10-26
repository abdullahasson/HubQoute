
// swiper
import { Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// style
import './image_slider.css'

const ImageSlider = ({
    children
}) => {

    return (
        <Swiper
            className='card-image-slider'
            modules={[Navigation, Pagination]}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            spaceBetween={10}
            slidesPerView={1}
            navigation={{ clickable: true }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            speed={1200}
        >
            {children}
        </Swiper>
    )

}

export default ImageSlider
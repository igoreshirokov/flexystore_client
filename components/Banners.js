import React from 'react';
// import , { Autoplay } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Autoplay])


const Banners = () => {
    return (
        <div className="banners">


            <Swiper
                autoplay
                centeredSlides
                slidesPerView={1}
            >
                <SwiperSlide className="banner-slide">
                    <img src={`/images/banner/banner-1.jpg`} />
                </SwiperSlide>
                <SwiperSlide className="banner-slide">
                    <img src={`/images/banner/banner-2.jpg`} />
                </SwiperSlide>
                <SwiperSlide className="banner-slide">
                    <img src={`/images/banner/banner-3.jpg`} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banners;
import React from 'react';
// import , { Autoplay } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';


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
                    <Image width="996px" height="472px" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0tLeXAwACRwDX+IuHbgAAAABJRU5ErkJggg==" placeholder="blur" src={`/images/banner/banner-1.jpg`} />
                </SwiperSlide>
                <SwiperSlide className="banner-slide">
                    <Image width="996px" height="472px" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0tLeXAwACRwDX+IuHbgAAAABJRU5ErkJggg==" placeholder="blur" src={`/images/banner/banner-2.jpg`} />
                </SwiperSlide>
                <SwiperSlide className="banner-slide">
                    <Image width="996px" height="472px" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0tLeXAwACRwDX+IuHbgAAAABJRU5ErkJggg==" placeholder="blur" src={`/images/banner/banner-3.jpg`} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banners;
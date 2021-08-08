import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper'
import { LoadingComponent } from "./ui/Loading";
import { useState } from "react";

const ProductGallery = ({ images }) => {
    const [slider, setSlider] = useState(null)
    const [activeSlide, setActiveSlider] = useState(0)

    return (
        <div className="product-gallery__wrapper">
            <div className="product-gallery__thumbs">
                {images && images.map((image, index) => <div key={String(index + 345)} onClick={() => slider.slideTo(index)} className={`product-gallery__thumb ${activeSlide == index ? 'active' : ''}`}><img src={image} /></div>)}
            </div>
            <div className="product-gallery__slider">
                <Swiper
                    onActiveIndexChange={() => setActiveSlider(slider.activeIndex)}
                    onSwiper={setSlider}
                    centeredSlides
                    slidesPerView={1}
                >
                    
                    {images && images.map((image, index) => <SwiperSlide className="product-gallery__slide" key={String(index + 8865)}><img src={image} /><a href={image} download="k">Скачать</a></SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    )
}

export default ProductGallery;
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import images from 'data';
import React from 'react';
// import required modules
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import ContainerCarousel from './ContainerCarousel';

const Carousel = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="h-screen">
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <ContainerCarousel image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;

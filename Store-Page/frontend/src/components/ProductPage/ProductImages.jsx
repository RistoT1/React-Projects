import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductImages = ({ images, productName, currentSlide, setCurrentSlide }) => {
  const swiperRef = useRef(null);

  return (
    <div>
      <div className="sm:hidden relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          spaceBetween={10}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`${productName} ${idx + 1}`}
                className="w-full h-96 object-cover rounded-md"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center text-lg bg-opacity-50 text-gray-500 z-100 px-2 py-1 rounded">
          <span
            className="cursor-pointer px-2 text-2xl"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            &lt;
          </span>
          {currentSlide} / {images.length}
          <span
            className="cursor-pointer px-2 text-2xl"
            onClick={() => swiperRef.current?.slideNext()}
          >
            &gt;
          </span>
        </div>
      </div>

      <div className="hidden sm:flex flex-col gap-2">
        <div className=" flex justify-center items-center h-96 ">
          <img
            src={images[currentSlide - 1]}
            alt={productName}
            className="w-full h-full object-cover rounded-t-xl"
            loading="lazy"
          />
        </div>
      </div>

    </div>
  );
};

export default ProductImages;
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api/product.controller.js";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const swiperRef = useRef(null);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    const getProductById = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    getProductById();
  }, [id]);

  if (loading) return <p className="text-red-300 text-center">Loading...</p>;
  if (error) return <p className="text-red-300 text-center">Error: {error}</p>;
  if (!product) return <p className="text-center">Product not found</p>;

  const images = [
    product.image1,
    product.image2,
    product.image3,
    product.image4,
    product.image5,
  ].filter(Boolean);

  const sizes = [30, 32, 34, 36, 38, 40, 42, 44];

  return (
    <div className="max-w-full sm:max-w-14/15 2xl:max-w-1/2 mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-15">

        {/* Left Column: Images */}
        <div>
          {/* Mobile: Swipeable Carousel */}
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
                    alt={`${product.name} ${idx + 1}`}
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

          {/* Desktop: Main Image + Thumbnails */}
          <div className="hidden sm:flex flex-col gap-2">
            {/* Main Image */}
            <div className="bg-amber-950 flex justify-center items-center h-96">
              <img
                src={images[currentSlide-1]}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center items-center mt-2">
              <div className="flex justify-center gap-2 h-24">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    className="w-full h-full opacity-70 hover:opacity-80 hover:scale-105 transition-transform duration-300"
                    onClick={() => setCurrentSlide(idx + 1)}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      className="w-full h-full object-cover rounded"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Product Info */}
        <div className="bg-white flex flex-col h-full p-4 text-black dark:text-white dark:bg-gray-900">
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="text-xl font-semibold text-red-300">{product.price} €</p>
            <p className="mt-4">Laikaha sitä olla pittää nii eipä näitä ny jaksoo kirjotella :)</p>
          </div>

          <div className="grid grid-cols-5 gap-2 w-70 mt-10">
            {sizes.map((size) => (
              <div key={size} className={`border rounded transition-transform duration-250 hover:scale-110 ${selectedSize === size ? "bg-red-300 scale-110 border-gray-200" : "bg-white hover:scale-105"}`}>
                <button
                  onClick={() => setSelectedSize(size)}
                  className="p-2 w-full h-full font-extralight"
                >{size}</button>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <button className="w-40 h-15 bg-red-300 text-white font-bold rounded">Lisää koriin</button>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-white border-t-2 border-red-300">
        <div className="flex flex-col items-center sm:flex-row gap-6 h-full">
          <div className="bg-white mt-12 rounded-tr-3xl rounded-bl-3xl overflow-hidden h-82 w-full sm:w-1/2">
            <img
              src={images[0]}
              alt="Rounded example"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-12 m-4 text-black rounded-tl-xl rounded-br-xl w-1/2 h-82 ">
            <h1 className="m-4 text-center font-bold text-3xl">Materiaalit</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum repudiandae quaerat quo, in tenetur maiores perspiciatis beatae libero et similique sit saepe officia ipsa provident ratione enim fugiat hic quod.</p>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center sm:flex-row gap-6 h-full">
          <div className="mt-12 m-4 text-black rounded-tl-xl rounded-br-xl w-1/2 h-82 ">
            <h1 className="m-4 text-center font-bold text-3xl">Tuotetiedot</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum repudiandae quaerat quo, in tenetur maiores perspiciatis beatae libero et similique sit saepe officia ipsa provident ratione enim fugiat hic quod.</p>
          </div>
          <div className="bg-white mt-2 rounded-tl-3xl rounded-br-3xl overflow-hidden h-82 w-full sm:w-1/2">
            <img
              src={images[0]}
              alt="Rounded example"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="bg-amber-300">hey</div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

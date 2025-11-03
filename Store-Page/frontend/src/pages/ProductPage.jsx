import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api/product.controller.js";
import ProductImages from "../components/ProductPage/ProductImages";
import ProductInfo from "../components/ProductPage/ProductInfo";
import ProductSection from "../components/ProductPage/ProductSection";
import StarRating from "../components/ProductPage/StarRating";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(1);

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

  const images = Array.from({ length: 10}, (_, i) => product[`image${i + 1}`]).filter(Boolean);

  return (
    <div className="max-w-full sm:max-w-14/15 2xl:max-w-1/2 mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        <ProductImages images={images} productName={product.name} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
        <ProductInfo product={product} />
      </div>

      {/*The thumbmnails for the other img*/}
      <div className="hidden mb-5 sm:flex items-center mt-2">
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

      <div className="min-h-screen bg-white border-t-2 border-red-300">
        <ProductSection
          image={images[1]||images[0]}
          title="Materiaalit"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum repudiandae quaerat quo, in tenetur maiores perspiciatis beatae libero et similique sit saepe officia ipsa provident ratione enim fugiat hic quod."
          imagePosition="left"
        />
        <ProductSection
          image={images[4] || images[3] || images[2] ||images[0]}
          title="Tuotetiedot"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum repudiandae quaerat quo, in tenetur maiores perspiciatis beatae libero et similique sit saepe officia ipsa provident ratione enim fugiat hic quod."
          imagePosition="right"
        />
        <div className="w-full flex items-center justify-center border-t-2 border-red-300">
          <div className="">
            <StarRating />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
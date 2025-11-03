import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../api/product.controller";

const ProductCard = ({ product }) => (
  <Link to={`/product/${product._id}`} className="cursor-pointer">
    <article className="flex flex-col items-center bg-white dark:bg-gray-900 overflow-hidden transition-transform duration-300 hover:z-20 hover:scale-105">
      <div className="w-full h-60 bg-gray-50 dark:bg-gray-900 flex items-center justify-center overflow-visible relative">
        <img
          src={product.image1 ?? "/placeholder.png"}
          alt={product.name ?? "Product image"}
          className="relative h-auto w-auto max-h-full max-w-none hover:z-20"
        />
      </div>


      <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex flex-col grow w-full">
        <h3 className="text-lg text-gray-900 dark:text-white mb-2 line-clamp-2 min-h-10">
          {product.name ?? "Unnamed Product"}
        </h3>
        <div className="mt-auto">
          <p className="text-lg font-bold text-gray-900 dark:text-white">
            {product.price ?? "N/A"}€
          </p>
        </div>
      </div>
    </article>
  </Link>
);

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetchProducts();
        setProducts(res);
      } catch (err) {
        setError(err.message || "Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading)
    return <div className="text-center py-20">Loading products...</div>;
  if (error)
    return (
      <div className="text-center text-red-500 py-20">
        Error: {error}
      </div>
    );

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">HomePage</h1>
      {products.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="w-full max-w-[70%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;

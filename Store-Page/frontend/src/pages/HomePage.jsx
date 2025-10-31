import { useEffect, useState } from "react";
import { fetchProducts } from "../api/product.controller";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetchProducts();

        // Handle response structure more safely
        if (res?.data) {
          setProducts(res.data);
        } else if (Array.isArray(res)) {
          setProducts(res);
        } else {
          throw new Error("Invalid response format");
        }
      } catch (err) {
        console.error(err);
        setError(err.message || "Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">HomePage</h1>

      {products.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="w-full max-w-[70%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="
    p-4 flex flex-col items-center 
    bg-white dark:bg-gray-800 
    transition-shadow 
    shadow-sm shadow-gray-300 hover:shadow-lg 
    dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]
  ">
              <div className="w-full h-60 p-1 mb-1 bg-gray-50 dark:bg-gray-900 overflow-hidden flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex flex-col grow w-full">
                <h3 className="text-lg text-gray-900 dark:text-white mb-2 line-clamp-2 min-h-10">
                  {product.name}
                </h3>

                <div className="mt-auto">
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    ${product.price?.toFixed ? product.price.toFixed(2) : product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
      }
    </div >
  );
};

export default HomePage;

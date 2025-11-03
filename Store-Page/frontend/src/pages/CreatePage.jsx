import { useState } from "react";
import { createProduct } from "../api/product.controller.js";
import { CiSquarePlus } from "react-icons/ci";

const CreatePage = () => {
  const maxImageCount = 10;

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([""]);
  const [imageRowCount, setImageRowCount] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (index, value) => {
    const newImages = [...images];
    newImages[index] = value;
    setImages(newImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const productData = { name, price };

      images.forEach((img, idx) => {
        if (idx < maxImageCount) {
          productData[`image${idx + 1}`] = img || "";
        }
      });

      const data = await createProduct(productData );
      console.log(data);
      setName("");
      setPrice("");
      setImages([""]);
      setImageRowCount(1);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addImageRow = () => {
    if (imageRowCount < maxImageCount) {
      setImageRowCount((prev) => prev + 1);
      setImages((prev) => [...prev, ""]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-3xl p-12 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="text-center p-2">
          <h1 className="text-2xl text-gray-900 dark:text-white">Luo uusi tuote</h1>
        </div>

        <div className="w-full border-t-2 border-t-gray-900 dark:border-t-gray-100 mt-4 pt-8">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2 items-center space-y-4">

            <div className="w-full max-w-md flex flex-col text-start">
              <label htmlFor="name" className="mb-1">Nimi</label>
              <input
                type="text"
                id="name"
                required
                placeholder="Lisää nimi"
                value={name}
                className="w-full border rounded p-2 focus:ring-2 focus:ring-gray-800"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="w-full max-w-md flex flex-col text-start">
              <label htmlFor="price" className="mb-1">Hinta</label>
              <input
                type="number"
                id="price"
                required
                placeholder="Lisää hinta"
                value={price}
                className="w-full border rounded p-2 focus:ring-2 focus:ring-gray-800"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="w-full max-w-md flex flex-col text-start">
              {Array.from({ length: imageRowCount }).map((_, index) => (
                <div key={index} className="mb-2">
                  <label htmlFor={`img-${index}`} className="mb-1">
                    Kuva URL {index + 1}
                  </label>
                  <input
                    type="text"
                    id={'image' + index}
                    placeholder="Lisää kuvan URL"
                    value={images[index] || ""}
                    className="w-full border rounded p-2 focus:ring-2 focus:ring-gray-800"
                    onChange={(e) => handleImageChange(index, e.target.value)}
                  />
                </div>
              ))}

              <button
                type="button"
                className={`text-2xl mt-2 ${imageRowCount >= maxImageCount ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={addImageRow}
                disabled={imageRowCount >= maxImageCount}
              >
                <CiSquarePlus />
              </button>
            </div>

            <div className="w-full max-w-sm flex flex-col mt-5 text-start">
              <button
                type="submit"
                disabled={loading}
                className="w-full border rounded p-2 bg-gray-800 text-white hover:bg-gray-700 focus:ring-2 focus:ring-gray-800"
              >
                {loading ? "Tallennetaan..." : "Tallenna"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;

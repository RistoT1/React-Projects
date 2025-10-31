import { useState, useEffect } from "react";
import { createProduct } from "../api/product.controller.js";
const CreatePage = () => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await createProduct({ name, price, image });
      console.log(data);
      setName(""); setPrice(""); setImage("");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-3xl p-12 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="text-center p-2">
          <h1 className="text-2xl text-gray-900 dark:text-white">Luo uusi tuote</h1>
        </div>
        <div className="w-full border-t-2 border-t-gray-900 dark:border-t-gray-100 mt-4 pt-8">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3.5 items-center space-y-4">
            <div className="w-full max-w-md flex flex-col text-start">
              <label htmlFor="name" className="mb-1">Nimi</label>
              <input
                type="text"
                id="name"
                required
                placeholder="lisää nimi"
                value={name}
                className="w-full border rounded p-2"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="w-full max-w-md flex flex-col text-start">
              <label htmlFor="price" className="mb-1">Hinta</label>
              <input
                type="number"
                id="price"
                required
                placeholder="lisää hinta"
                value={price}
                className="w-full border rounded p-2 focus:ring-2 focus:ring-gray-800"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>
            <div className="w-full max-w-md flex flex-col text-start">
              <label htmlFor="img" className="mb-1">Kuva Url</label>
              <input
                type="text"
                id="img"
                required
                placeholder="lisää kuvan url"
                value={image}
                className="w-full border rounded p-2 focus:ring-2 focus:ring-gray-800"
                onChange={(e) => {
                  setImage(e.target.value)
                }}

              />
            </div>
            <div className="w-full max-w-sm flex flex-col mt-5 text-start">
              <button
                type="submit"
                disabled={loading}
                className="w-full border rounded p-2 bg-gray-800 text-white hover:bg-gray-700 focus:ring-2 focus:ring-gray-800"
              >
              {loading ? "tallennetaan" : "tallenna"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/products";

export const createProduct = async (productData) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });
  if (!res.ok) throw new Error("Failed to create product");
  return res.json();
};

export const fetchProducts = async () => {
  const res = await fetch(API_URL, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });
  if (!res.ok) throw new Error("Failed to get products");
  return res.json();
}
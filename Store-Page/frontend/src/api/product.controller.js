const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/products";

// Helper to handle fetch responses
const handleResponse = async (res) => {
  let data;
  try {
    data = await res.json();
  } catch {
    data = {};
  }

  if (!res.ok) {
    throw new Error(data.message || "API request failed");
  }

  return data.data; 
};

// Create a new product
export const createProduct = async (productData) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });
  return handleResponse(res);
};

// Fetch all products
export const fetchProducts = async () => {
  const res = await fetch(API_URL, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return handleResponse(res);
};

// Fetch a single product by ID
export const fetchProductById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return handleResponse(res);
};

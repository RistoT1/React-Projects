import { supabase } from "../lib/supabaseClient";
import { handleResponse } from "./handleResponse";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/products";

//uusi tuote
export const createProduct = async (productData) => {

  const { data: sessionData } = await supabase.auth.getSession();
  const token = sessionData?.session?.access_token;

  if (!token) throw new Error("Käyttäjällä ei ole oikeuksia muokata tuotteita");
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(productData),
  });

  return handleResponse(res);
};

//tuote fetch
export const fetchProducts = async () => {
  const res = await fetch(API_URL, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return handleResponse(res);
};

//ideellä
export const fetchProductById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return handleResponse(res);
};

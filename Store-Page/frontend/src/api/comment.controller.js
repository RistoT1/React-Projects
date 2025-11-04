import {handleResponse} from "./handleResponse";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/comments";

export const createComment = async (commentData) => {

    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData)
    })
    return handleResponse(res);
}
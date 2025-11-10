import { supabase } from "../lib/supabaseClient";
import { handleResponse } from "./handleResponse";
const API_URL = "http://localhost:5000/api/comments";

export const addComment = async (commentData) => {
    const { data: sessionData } = await supabase.auth.getSession();
    const token = sessionData?.session?.access_token;

    if (!token) throw new Error("Käyttäjällä ei ole oikeuksia kirjoittaa kommenttia");
    const res = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(commentData)
    })
    return handleResponse(res);
}

export const getComment = async () => {
    const { data: sessionData } = await supabase.auth.getSession();
    const token = sessionData?.session?.access_token;
    const res = await fetch(API_URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    return handleResponse(res);
}
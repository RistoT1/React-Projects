import React, { useState } from 'react'
import StarRating from "./StarRating"
import { ProductReviews } from './ProductReviews';
import { addComment, getComment } from '../../api/comment.controller';
import { useEffect } from 'react';

const CommentSection = ({ title }) => {
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
    //all comments
    const [productComments, setProductComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);


    const handleSubmit = async () => {
        try {
            setError("");
            setSubmitting(true);
            const productData = { rating, comment };
            await addComment(productData);
            setComment("");
            setRating(0);
            fetchComments(); // refresh comments after successful submit
        } catch (error) {
            console.error("Error fetching comments:", error);
            setError("Virhe haettaessa arvosteluja. Yritä uudelleen.");
        } finally {
            setSubmitting(false); 
        }

    }

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        try {
            setLoading(true);
            setError("");
            const response = await getComment(); // your API call
            setProductComments(response);
            //calculateAverage(response.data);    
        } catch (error) {
            console.error("Error fetching comments:", error);
            setError("Virhe haettaessa arvosteluja. Yritä uudelleen.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex flex-col sm:flex-row mt-10'>
            <div className='w-1/2'>
                <div className='border-b border-gray-200 pb-6'>
                    <label className="ml-2 block text-xl font-semibold text-red-300 mb-2">Kirjoita arvostelu</label>
                    <StarRating className="flex  items-center" rating={rating} setRating={setRating} />
                    <textarea
                        placeholder="Kirjoita arvostelu..."
                        className="w-full p-3 border-b-2 overflow-hidden border-gray-200 focus:outline-none focus:border-black transition-colors resize-none bg-transparent"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        onInput={(e) => {
                            e.target.style.height = 'auto';
                            e.target.style.height = `${e.target.scrollHeight}px`;
                        }}

                        maxLength={300}
                        rows={3}
                    ></textarea>

                    {error && <p className="text-sm text-red-500 mt-2">{error}</p>}

                    <div className="flex justify-end mt-4">
                        <button
                            onClick={handleSubmit}
                            disabled={submitting}
                            className={`text-sm text-gray-900 font-medium transition-colors ${submitting ? "opacity-50 cursor-not-allowed" : "hover:text-gray-600"
                                }`}
                        >
                            {submitting ? "Ladataan..." : "Lähetä arvostelu →"}
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-1/2'>
                <h1 className='text-2xl font-bold'>{title}</h1>
                <ProductReviews
                    loading={loading}
                    error={error}
                    productComments={productComments}
                />
            </div>
        </div>
    )
}

export default CommentSection
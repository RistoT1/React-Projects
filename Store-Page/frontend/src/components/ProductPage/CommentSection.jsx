import React, { useState } from 'react'
import StarRating from "./StarRating"

const CommentSection = ({ title }) => {
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);

    const handleSubmit = () => {
        console.log(rating, comment);
    }
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
                    <div className="flex justify-end mt-4">
                        <button
                            onClick={handleSubmit}
                            className="text-sm text-gray-900 font-medium hover:text-gray-600 transition-colors"
                        >
                            Lähetä arvostelu →
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-1/2'>
                <h1 className='text-2xl font-bold'>{title}</h1>
                {/* avarage of the ratings here */}
                
            </div>
        </div>
    )
}

export default CommentSection
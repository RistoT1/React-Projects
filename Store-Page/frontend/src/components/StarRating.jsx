import { useState } from "react";
import { FaStar } from "react-icons/fa6";

const StarRating = ({ starCount = 5 }) => {
    const [rating, setRating] = useState(0);

    const handleClick = (currentId) => {
        setRating(currentId);
    };

    return (
        <div className="flex gap-2">
            {[...Array(starCount)].map((_, index) => {
                index += 1;
                return (
                    <FaStar
                        key={index}
                        onClick={() => handleClick(index)}
                        className="cursor-pointer text-xl transform-content duration-300 hover:scale-120"
                        style={{
                            //ei jostain kummansyystä toiminut conditional styling tailwindissä
                            color: rating >= index ? "#fcd34d" : "#d1d5db",
                        }}
                    />
                );
            })}
        </div>
    );
};

export default StarRating;
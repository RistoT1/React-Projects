const ProductSection = ({ image, title, text, imagePosition }) => {
  const isLeft = imagePosition === "left";

  return (
    <div className={`flex ${isLeft ? "flex-col items-center sm:flex-row" : "flex-col-reverse items-center sm:flex-row"} gap-6 h-full`}>
      {isLeft && (
        <div className={`bg-white ${isLeft ? "mt-12" : "mt-2"} ${isLeft ? "rounded-tr-3xl rounded-bl-3xl" : "rounded-tl-3xl rounded-br-3xl"} overflow-hidden h-82 w-full sm:w-1/2`}>
          <img
            src={image}
            alt="Rounded example"
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className="mt-12 m-4 text-black rounded-tl-xl rounded-br-xl w-1/2 h-82 ">
        <h1 className="m-4 text-center font-bold text-3xl">{title}</h1>
        <p>{text}</p>
      </div>
      {!isLeft && (
        <div className={`bg-white ${isLeft ? "mt-12" : "mt-2"} ${isLeft ? "rounded-tr-3xl rounded-bl-3xl" : "rounded-tl-3xl rounded-br-3xl"} overflow-hidden h-82 w-full sm:w-1/2`}>
          <img
            src={image}
            alt="Rounded example"
            className="h-full w-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default ProductSection;
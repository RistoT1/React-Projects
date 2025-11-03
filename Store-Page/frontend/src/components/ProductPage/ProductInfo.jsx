import SizeSelector from "./SizeSelector";

const ProductInfo = ({ product }) => {
  return (
    <div className="bg-white flex flex-col h-full p-4 text-black dark:text-white dark:bg-gray-900">
      <div>
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-xl font-semibold text-red-300">{product.price} €</p>
        <p className="mt-4">Laiskaha sitä olla pittää nii eipä näitä ny jaksoo kirjotella :)</p>
      </div>

      <SizeSelector />

      <div className="mt-10">
        <button className="w-40 h-15 bg-red-300 text-white font-bold rounded">Lisää koriin</button>
      </div>
    </div>
  );
};

export default ProductInfo;
const ProductCard = ({ image, title, oldPrice, newPrice, save }) => {
  return (
    <div className="relative">
      <div className="bg-blue-100 overflow-hidden rounded-xl shadow text-center relative">
        <img src={image} alt={title} className="w-full h-80 object-cover" />

        <div className="absolute bottom-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-[10px]">
          Save {save}%
        </div>
      </div>

      <h3 className="pt-2 font-semibold text-lg">{title}</h3>

      <h4 className="pt-1 text-pink-400">
        <span className="line-through text-gray-500 mr-2">
          ${oldPrice} USD
        </span>
        <span className="text-pink-500 font-semibold">
          ${newPrice} USD
        </span>
      </h4>
    </div>
  );
};

export default ProductCard;

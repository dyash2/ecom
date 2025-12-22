import { FaShoppingCart, FaHeart, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ image, title, oldPrice, newPrice, save }) => {
  const [isWishlist, setIsWishlist] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [addToCartDialog, setAddtoCartDialog] = useState(false);
  const navigate = useNavigate();


  return (
    <>
      {/* Product Card */}
      <div className="relative" onClick={() => navigate("/product-overview")}>
        <div className="bg-pink-100 overflow-hidden rounded-xl shadow text-center relative">
          <img src={image} alt={title} className="w-full h-80 md:h-150 object-cover p-10" />

          <div
            className="absolute top-2 right-2 cursor-pointer"
            onClick={() => setIsWishlist(!isWishlist)}
          >
            <FaHeart
              size={20}
              className={isWishlist ? "text-red-500" : "text-gray-300"}
            />
          </div>

          <div
            className="absolute top-9 right-3 cursor-pointer"
            onClick={() => {
              console.log("Cart Clicked");
              setOpenDialog(true);
            }}
          >
            <FaShoppingCart className="text-gray-400" />
          </div>

          <div className="absolute bottom-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-[10px]">
            Save {save}%
          </div>
        </div>

        <h3 className="pt-2 font-semibold text-lg">{title}</h3>

        <h4 className="pt-1 text-pink-400">
          <span className="line-through text-gray-500 mr-2">
            ${oldPrice} USD
          </span>
          <span className="text-pink-500 font-semibold">${newPrice} USD</span>
        </h4>
      </div>

      {/* Dialog / Modal */}
      {openDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-90 rounded-xl p-5 relative">
            <button
              className="absolute top-6 right-3 text-pink-500"
              onClick={() => setOpenDialog(false)}
            >
              <FaTimes />
            </button>

            <h2 className="text-lg font-semibold mb-4">{title}</h2>
            <hr className="-mx-5 my-4" />

            <div className="flex items-center mb-4">
              <span className="line-through text-gray-400 pr-5">
                ${oldPrice}
              </span>
              <span className="text-pink-500 font-bold">${newPrice}</span>
            </div>

            <button
              className="w-full bg-pink-500 text-white py-2 rounded-full"
              onClick={() => {
                setOpenDialog(false);
                setAddtoCartDialog(true);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}

      {addToCartDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-90 rounded-xl p-5 relative">
            <button
              className="absolute top-6 right-3 text-pink-500"
              onClick={() => setAddtoCartDialog(false)}
            >
              <FaTimes />
            </button>

            <h2 className="text-lg font-semibold mb-4">Add to Cart</h2>
            <hr className="-mx-5 my-4" />

            <p className="text-pink-500 pb-6">Item added to cart</p>

            <button
              className="w-full bg-pink-500 text-white py-2 rounded-full"
              onClick={() => setAddtoCartDialog(false)}
            >
              View Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;

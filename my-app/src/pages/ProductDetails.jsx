import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa";

const ProductDetails = () => {
  const { state } = useLocation();
  const { image, title, price, description } = state;
  const [openSection, setOpenSection] = useState(null);

  const toggle = (sec) => setOpenSection(openSection === sec ? null : sec);
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT — Image */}
        <div className="rounded-lg overflow-hidden shadow-3xl bg-pink-200 w-120 "> <img src={image} alt="Product" className="w-full p-20" />

          {/* <div className="flex gap-3 mt-4">
            <img src={slide1} className="w-20 rounded shadow-xl" />
            <img src={slide1} className="w-20 rounded shadow-xl" />
            <img src={slide1} className="w-20 rounded shadow-xl" />
          </div> */}
          
        </div>

        {/* RIGHT — Info */}
        <div>
          <h1 className="text-3xl font-semibold">{title}</h1>
          <p className="text-xl mt-2">$ {price}</p>

          <p className="text-sm text-gray-600 mt-3">
            {description}
          </p>

          <button
            className="mt-6 bg-pink-500 text-white px-6 py-3 rounded flex flex-row items-center gap-6 
             hover:shadow-lg hover:scale-105 transition-all duration-200"
            onClick={() =>{ navigate("/cart"); 
              console.log("Cart Clicked");
            }}
          >
            <FaShoppingCart /> Add to Cart
          </button>


          {/* Accordion */}
          <div className="mt-8 space-y-4 text-sm">
            {["care", "shipping", "returns"].map((sec) => (
              <div key={sec}>
                <div
                  className="cursor-pointer font-medium flex justify-between"
                  onClick={() => toggle(sec)}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}

                  {openSection === sec ? (
                    <FaMinus />
                  ) : (
                    <FaPlus />
                  )}
                </div>

                {openSection === sec && (
                  <p className="mt-2 text-gray-600">
                    {sec === "care" && "Wipe clean with a damp cloth."}
                    {sec === "shipping" && "Delivered within 5–7 business days."}
                    {sec === "returns" && "30-day return policy."}
                  </p>
                )}
                <hr className="text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

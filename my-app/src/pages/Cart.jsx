import slide1 from "../assets/images/slide1.jpg";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

const Cart = () => {
    return (
        <div className="px-6 py-8 max-w-6xl mx-auto">
            
            {/* Page Title */}
            <h1 className="font-semibold text-3xl sm:text-4xl">Shopping Cart</h1>
            <hr className="my-6 text-gray-200" />

            {/* Cart Content */}
            <div className="flex flex-col md:flex-row gap-10">

                {/* Product Section */}
                <div className="flex gap-8 flex-1">

                    {/* Product Image */}
                    <div className="rounded-lg overflow-hidden shadow-xl bg-pink-200 w-56 sm:w-64">
                        <img
                            src={slide1}
                            alt="Product"
                            className="w-full h-full p-6 object-contain"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold">Product Name</h2>
                            <p className="text-lg text-pink-500 font-medium mt-1">$120</p>

                            <p className="text-sm text-gray-600 mt-3 mb-4 max-w-md">
                                This is sample description for the selected product in the cart.
                            </p>

                            {/* Quantity Section */}
                            <div className="flex items-center justify-between gap-6">

                                {/* Quantity Controls */}
                                <div className="flex items-center gap-3">
                                    <button className="border px-2 py-1 rounded hover:bg-gray-100">
                                        <FaMinus />
                                    </button>

                                    <span className="font-medium text-lg">1</span>

                                    <button className="border px-2 py-1 rounded hover:bg-gray-100">
                                        <FaPlus />
                                    </button>
                                </div>

                                {/* Remove Button */}
                                <button className="text-red-500 font-medium flex items-center gap-2 hover:text-red-600">
                                    <FaTrash />
                                    Remove
                                </button>

                            </div>

                        </div>

                        {/* Delete Button */}

                    </div>
                </div>

                {/* Checkout Card */}
                <div className="bg-white shadow-lg rounded-xl p-6 w-full md:w-80 h-fit">

                    <h2 className="text-xl font-semibold">Order Summary</h2>

                    <div className="flex justify-between mt-4 text-gray-700">
                        <span>Subtotal</span>
                        <span>$120</span>
                    </div>

                    <div className="flex justify-between mt-2 text-gray-700">
                        <span>Shipping</span>
                        <span>$5</span>
                    </div>

                    <hr className="my-4" />

                    <div className="flex justify-between text-lg font-semibold">
                        <span>Total</span>
                        <span>$125</span>
                    </div>

                    <button
                        className="mt-6 bg-pink-500 w-full text-white py-3 rounded 
            hover:shadow-lg hover:scale-105 transition-all duration-200 flex justify-center items-center gap-3"
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;

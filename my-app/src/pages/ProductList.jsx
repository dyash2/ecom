const ProductList = () => {
    return (
        <div className="p-5">
            <h1 className="text-4xl font-bold mb-8">Products</h1>
            <div className="flex justify-between items-center mb-6">
                {/* Filter Section */}
                <div className="flex space-x-4">
                    <div>
                        <label htmlFor="color-filter" className="block text-sm font-medium text-gray-700">Color</label>
                        <select id="color-filter" name="color" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                            <option>All</option>
                            <option>White</option>
                            <option>Black</option>
                            <option>Red</option>
                            <option>Blue</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="size-filter" className="block text-sm font-medium text-gray-700">Size</label>
                        <select id="size-filter" name="size" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                            <option>All</option>
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>
                    </div>
                </div>

                {/* Sort Section */}
                <div>
                    <label htmlFor="sort-by" className="block text-sm font-medium text-gray-700">Sort by</label>
                    <select id="sort-by" name="sort" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                        <option>Newest</option>
                        <option>Price (asc)</option>
                        <option>Price (desc)</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
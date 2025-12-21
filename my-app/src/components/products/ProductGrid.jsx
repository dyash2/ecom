import { useState, useEffect } from "react";
import ProductCard from "./ProductCard.jsx";
import { fetchProducts } from "../../services/productApi.js";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data.slice(0, 9)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading....</p>;

  return (
    <div className="p-5">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => {
          function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
          const randomNum = getRandomInt(1,25);
          const discount = randomNum;
          const newPrice = (item.price * (100 - discount)) / 100;

          return (
            <ProductCard
              key={item.id}
              image={item.image}
              title={item.title}
              oldPrice={item.price.toFixed(2)}
              newPrice={newPrice.toFixed(2)}
              save={discount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductGrid;

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard.jsx";
import { fetchProducts } from "../../services/productApi.js";
import { useNavigate } from "react-router-dom";

const ProductGrid = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data.slice(900, 910)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading....</p>;

  return (
    <div className="p-5">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => {
          const discount = Math.floor(Math.random() * 25) + 1;
          const newPrice = (item.price * (100 - discount)) / 100;

          return (
            <div
              key={item.id}
              onClick={() =>
                navigate(`/product/${item.id}`, {
                  state: {
                    image: item.image_link,
                    title: item.name,
                    price: newPrice.toFixed(2),
                    description: item.description,
                  },
                })
              }
              className="cursor-pointer"
            >
              <ProductCard
                image={item.image_link}         
                title={item.name}               
                oldPrice={item.price}
                newPrice={newPrice.toFixed(2)}
                save={discount}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductGrid;

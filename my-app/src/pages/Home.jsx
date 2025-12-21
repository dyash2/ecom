import ProductGrid from "../components/products/ProductGrid";
import PromoDialog from "../components/PromoDialog";
import { Hero } from "../components/Hero";
import { Navigate, useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <PromoDialog />
      <Hero />

      <h1 className="text-4xl font-bold pl-5 pt-5">Products</h1>
      <ProductGrid></ProductGrid>

      <h2 className="font-bold font-serif text-2xl">
        🏆 Top Picks of the Month 🏆
      </h2>
      <ProductGrid></ProductGrid>
      <div className="flex justify-center mt-5">
      <button
        type="button"
        className="bg-pink-50 text-pink-500 rounded-xl border border-pink-500 px-4 py-2 hover:bg-pink-200 font-semibold text-xl"
        onClick={() => {
          navigate("/product-list");
        }}
        >
        View All
      </button>
        </div>
    </div>
  );
};

export default Home;

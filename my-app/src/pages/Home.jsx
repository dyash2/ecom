import Slider from "react-slick";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import ProductGrid from "./ProductGrid";

const Home = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="">
      <Slider {...settings}>
        <div className="rounded-xl overflow-hidden relative">
          <img src={slide1} alt="Slide 1" className="w-full h-80 object-cover" />

          <div className="absolute top-1/2 left-4 -translate-y-1/2">
            <h2 className="text-blue-500 text-3xl font-bold">New Collections!</h2>
            <p className="text-purple-400 text-[20px] font-semibold">Every collection is</p>
            <p className="text-purple-400 text-[20px] font-semibold">approved by experts!</p>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border-2 relative border-gray-50">
          <img src={slide2} alt="Slide 2" className="w-full h-80 object-cover " />

          <div className="absolute top-1/2 left-4 -translate-y-1/2">
            <h2 className="text-blue-500 text-3xl font-bold">New Collections!</h2>
            <p className="text-purple-400 text-[20px] font-semibold">Every collection is</p>
            <p className="text-purple-400 text-[20px] font-semibold">approved by experts!</p>
          </div>
        </div>
      </Slider>
      <ProductGrid>
        
      </ProductGrid>

      <h2 className="font-bold font-serif text-2xl">🏆 Top Picks of the Month 🏆</h2>
     
    </div>
  )
};

export default Home;

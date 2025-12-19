import Slider from "react-slick";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";

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
      <div className="grid grid-cols-3 gap-6">

        <div className="bg-blue-100 p-6 rounded-xl shadow-emerald-200 text-center hover:shadow-xl hover:scale-105 transition">

          <h3 className="text-lg font-semibold">Box 1</h3>
        </div>
        <div className="bg-green-100 p-6 rounded-xl shadow text-center">
          <h3 className="text-lg font-semibold">Box 2</h3>
        </div>
        <div className="bg-green-100 p-6 rounded-xl shadow text-center">
          <h3 className="text-lg font-semibold">Box 3</h3>
        </div>
      </div>
    </div>
  )
};

export default Home;

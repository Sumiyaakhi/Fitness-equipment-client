import { Link } from "react-router-dom";
import img from "../../assets/BANNER.jpg";

const Banner = () => {
  return (
    <div
      className="h-screen w-full flex items-center justify-left"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg font-primary max-w-7xl lg:mx-[90px]">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ">
          Empower Your Workout
        </h1>
        <p className="text-white text-lg md:text-xl lg:text-2xl mb-6">
          Your one-stop shop for all your fitness needs.
        </p>
        <Link to="/products">
          <button className="px-6 py-3 bg-white text-primary hover:bg-primary hover:text-white text-lg rounded-lg  ">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;

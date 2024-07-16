import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="md:pt-32 max-w-7xl mx-auto font-primary">
      <div className="bg-white p-6 rounded-lg shadow-md w-2/3 my-6 mx-auto">
        <div className="flex flex-col justify-center items-center gap-4 md:pt-12 my-6">
          <div className="bg-green-600 rounded-full w-16 h-16 flex justify-center items-center">
            <FaCheck className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Thank You For Your Order!
          </h1>
          <p>A copy or your order summary has been sent to your mail</p>
          <Link to="/">
            <button className="inline-block bg-primary text-white py-2 px-4 rounded-md hover:bg-white hover:border-primary hover:border-2 hover:text-primary font-bold transition duration-300">
              Go to Home
            </button>
          </Link>
          <Link to="/track-parcel">
            <button className="border-primary border-2 rounded-lg font-bold px-12 py-3">
              Track your parcel
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;

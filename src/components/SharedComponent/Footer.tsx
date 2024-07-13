import { useState } from "react";
import logo from "../../assets/logo.png";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="bg-[#F0F0F0] text-black px-5  md:px-20 mt-36 relative">
      <footer className=" pt-36 md:flex">
        {/* top part of footer */}
        <div className="">
          <div className="flex justify-center items-center">
            <img src={logo} className="w-24" alt="" />
          </div>
          <p className="paragraph text-sm py-3">
            We have clothes that suits your style <br /> and which you’re proud
            to wear. From women to men.
          </p>
          <button className=" md:my-4 button mb-5 md:py-3 py-2 md:px-16">
            Become a Seller !
          </button>
          <div className="flex gap-3">
            <div className="w-10 h-10 py-2 border-gray-300 ps-3 rounded-full bg-white border-2 text-center items-center ">
              <FaTwitter
                style={{
                  color: "black",
                  width: "15px",
                  height: "25px",
                  // transition: 'color 0.3s ease', // Optional: Add a smooth transition effect
                }}
                className="rounded-full "
              />
            </div>
            <div className="w-10 h-10 py-2 border-gray-300 ps-3 rounded-full bg-white border-2 text-center items-center">
              <FaFacebookF
                style={{
                  color: "black",
                  width: "15px",
                  height: "20px",
                  // transition: 'color 0.3s ease', // Optional: Add a smooth transition effect
                }}
                className="rounded-full"
              />
            </div>
            <div className="w-10 h-10 py-2 border-gray-300  rounded-full bg-white border-2 text-center items-center">
              <FaInstagram
                style={{
                  color: "black",
                  width: "36px",
                  height: "20px",
                  // transition: 'color 0.3s ease', // Optional: Add a smooth transition effect
                }}
                className="rounded-full"
              />
            </div>
            <div className="w-10 h-10 py-2 border-gray-300  rounded-full bg-white border-2 text-center items-center hover:bg-black">
              <FaGithub
                style={{ color: "black", width: "36px", height: "20px" }}
                className=" hover:text-white rounded-full "
              />
            </div>
          </div>
        </div>
        <div className="footer grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="gap-5 md:ms-20 md:mt-6">
            <h6 className="nav-route ">Company</h6>
            <p className="footer-p text-gray-500">
              <Link to="/about">About</Link>
            </p>
            <p className="footer-p text-gray-500">
              <Link>Features</Link>
            </p>
            <p className="footer-p text-gray-500">
              <Link>Works</Link>
            </p>
            <p className="footer-p text-gray-500">
              <Link to="/career">Career</Link>
            </p>
          </div>
          <div className="gap-5 md:ms-20 md:mt-6">
            <h6 className="nav-route ">Help</h6>
            <p className="footer-p text-gray-500">
              <Link>Customer Support</Link>
            </p>
            <p className="footer-p text-gray-500">
              <Link>Delivery Details</Link>
            </p>
            <p className="footer-p text-gray-500">
              <Link to="/terms-condition">Terms & Conditions</Link>
            </p>
            <p className="footer-p text-gray-500">
              <Link to="/privacy-policy">Privacy Policy</Link>
            </p>
          </div>
          <div className="gap-5 md:ms-20 md:mt-6">
            <h6 className="nav-route ">FAQ</h6>
            <p className="footer-p text-gray-500">
              <Link>Account</Link>
            </p>
            <p className="footer-p text-gray-500">
              <Link>Manage Deliveries</Link>
            </p>
            <p className="footer-p text-gray-500">
              <Link>Orders</Link>
            </p>
            <p className="footer-p text-gray-500">
              <Link>Payments</Link>
            </p>
          </div>
          <div className="gap-5 md:ms-20 md:mt-6">
            <h6 className="nav-route ">Resources</h6>
            <p className="footer-p text-gray-500">
              <Link>Free eBooks</Link>
            </p>
            <p className="footer-p text-gray-500">
              <Link>Development Tutorial</Link>
            </p>
            <p className="footer-p text-gray-500">
              <Link>How to -Blog</Link>
            </p>
            <p className="footer-p text-gray-500">
              <Link>Youtube Playlist</Link>
            </p>
          </div>
        </div>
      </footer>
      <section className="md:flex justify-between bg-black text-white md:mx-24 rounded-3xl md:pt-12 md:px-20 absolute -top-28  left-0 right-0  text-center md:text-left py-3 mx-6">
        <div>
          <h1 className="font-primary text-2xl md:3xl lg:4xl xl:text-5xl">
            STAY UPTO DATE ABOUT <br />{" "}
          </h1>
          <h1 className="font-primary text-2xl md:text-5xl md:pt-4">
            OUR LATEST OFFERS
          </h1>
        </div>

        <div className=" pb-7">
          {/* search btn */}
          <div className="mx-4 bg-white input input-bordered rounded-2xl gp-3  flex justify-center items-center md:px-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="w-5 h-5  "
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow ps-2 bg-white text-black"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mt-2 mx-4 ">
            <input
              className=" bg-white rounded-2xl w-full h-10 md:w-[349px] md:h-[48px] text-center text-black"
              placeholder="Subscribe to Newsletter"
              type="text"
              name=""
              id=""
            />{" "}
          </div>
        </div>
      </section>
      <div className="divider h-1"></div>
    </div>
  );
};

export default Footer;

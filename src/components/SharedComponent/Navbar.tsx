import { Link, NavLink } from "react-router-dom";
import img from "../../assets/logo.png";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Navbar = () => {
  const navItem = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? " underline hover:bg-primary hover:text-white" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? " underline hover:bg-primary hover:text-white" : ""
          }
        >
          All Products
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? " underline hover:bg-primary hover:text-white" : ""
          }
          to="/product-management"
        >
          Product Management
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? " underline hover:bg-primary hover:text-white" : ""
          }
          to="/about-us"
        >
          About Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="fixed z-10 w-full bg-white font-primary">
      <div>
        <div className="bg-primary">
          <h1 className="text-white text-center">BUILD YOUR DREAM HOME GYM</h1>
        </div>
      </div>
      <div className="navbar bg-base-100 max-w-7xl mx-auto ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              {navItem}
            </ul>
          </div>
          <div>
            <Link to="/">
              {" "}
              <img className="w-16" src={img} alt="" />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-[17px] gap-4">
            {navItem}
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <button className="">
            <HiOutlineShoppingCart className="w-7 h-7 " />
          </button>
          <button className="">
            <FaRegUser className="w-6 h-6 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

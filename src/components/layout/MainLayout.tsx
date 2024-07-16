import { Outlet } from "react-router-dom";
import Navbar from "../SharedComponent/Navbar";
import Footer from "../SharedComponent/Footer";
import useCartRefreshWarning from "../hook/useCartRefreshingWarn";

const MainLayout = () => {
  useCartRefreshWarning();

  return (
    <>
      <div className="">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;

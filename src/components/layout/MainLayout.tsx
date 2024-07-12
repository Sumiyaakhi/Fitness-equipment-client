import { Outlet } from "react-router-dom";
import Navbar from "../SharedComponent/Navbar";
import Footer from "../SharedComponent/Footer";

const MainLayout = () => {
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

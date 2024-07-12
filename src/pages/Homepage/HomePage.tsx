import LogoMarquee from "@/components/HomeComponent/LogoMarque";
import Banner from "../../components/HomeComponent/Banner";
import Cataegory from "@/components/HomeComponent/Cataegory";
import FeaturedProduct from "@/components/HomeComponent/FeaturedProduct";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <LogoMarquee />
      <Cataegory />
      <FeaturedProduct />
    </div>
  );
};

export default HomePage;

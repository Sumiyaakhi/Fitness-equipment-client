import LogoMarquee from "@/components/HomeComponent/LogoMarque";
import Banner from "../../components/HomeComponent/Banner";
import Cataegory from "@/components/HomeComponent/Cataegory";
import FeaturedProduct from "@/components/HomeComponent/FeaturedProduct";
import BenefitProducts from "@/components/HomeComponent/BenefitProducts";
import MosaikImage from "@/components/HomeComponent/MosaikImage";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <LogoMarquee />
      <Cataegory />
      <FeaturedProduct />
      <BenefitProducts />
      <MosaikImage />
    </div>
  );
};

export default HomePage;

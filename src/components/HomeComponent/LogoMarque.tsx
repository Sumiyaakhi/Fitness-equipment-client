import Marquee from "react-fast-marquee";

const LogoMarquee = () => {
  const images = [
    "https://shahsports.com.bd/wp-content/uploads/2022/02/logo-shah-150x67.jpeg",
    "https://shahsports.com.bd/wp-content/uploads/2022/02/logo-shingstar-150x69.png",
    "https://shahsports.com.bd/wp-content/uploads/2024/04/shua-400x112.png",
    "https://shahsports.com.bd/wp-content/uploads/2022/02/logo-sole-150x68.png",
    "https://shahsports.com.bd/wp-content/uploads/2022/02/logo-spirit-150x67.png",
  ];
  return (
    <>
      <div className="h-8 py-6 px-6 md:py-12 md:px-20">
        <Marquee pauseOnHover={true}>
          <div className="flex">
            {images.map((img, index) => (
              <div key={index} className="pe-[106px]">
                <img className="w-36" src={img} alt="" />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default LogoMarquee;

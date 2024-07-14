import Contact from "@/components/AboutComponent/Contact";
import CustomerTestimonial from "@/components/AboutComponent/CustomerTestimonial";

import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto lg:pt-28">
      <div className="breadcrumbs text-sm">
        <ul className=" font-primary ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
        </ul>
      </div>
      <h1 className="text-3xl font-primary py-4 md:py-6 text-center hover:underline">
        About Us
      </h1>
      <h3 className="text-2xl font-primary font-bold hover:underline">
        Company Overview
      </h3>
      <p className="text-xl font-primary py-3">
        Fitness Club stands at the forefront of home fitness solutions,
        committed to empowering individuals to achieve optimal health and
        vitality. Our mission is to support your fitness goals with high-quality
        home gym equipment and personalized guidance.
      </p>
      <p className="text-xl font-primary py-3">
        We strive to cultivate a community-driven approach, where each member is
        encouraged to embrace a healthier lifestyle. At Mighty Fitness, we
        believe in the transformative power of fitness, offering innovative
        tools and resources to help you reach your peak performance.{" "}
      </p>
      <p className="text-xl font-primary py-3">
        Join us at Fitness club, where passion meets performance, and together,
        we build a stronger, healthier you. Our extensive range of home gym
        equipment is curated to elevate your workout experience, ensuring every
        session counts.{" "}
      </p>
      <p className="text-xl font-primary py-3">
        Discover the difference at Mighty Fitness, where dedication to
        excellence and customer satisfaction is our priority. Embrace the
        journey to a stronger, fitter you with Mighty Fitness – your partner in
        fitness success.
      </p>

      <div className="py-4 md:py-7">
        <h1 className="text-2xl font-primary font-bold hover:underline pt-3">
          Meet Our Team
        </h1>

        <h4 className="text-xl font-primary font-bold pt-3 md:pt-5">
          John Smith - Founder and CEO
        </h4>
        <p className="text-xl font-primary py-3">
          {" "}
          With over two decades in the fitness industry, John founded Mighty
          Fitness to revolutionize home gym equipment solutions. His vision and
          leadership drive our commitment to innovation and customer
          satisfaction.
        </p>

        <h4 className="text-xl font-primary font-bold pt-3 md:pt-5">
          Emily Davis - Head of Product Development
        </h4>
        <p className="text-xl font-primary py-3">
          Emily brings a wealth of experience in product design and development.
          Her passion for fitness and keen eye for detail ensure that every
          product at Mighty Fitness meets the highest standards of quality and
          functionality.
        </p>

        <h4 className="text-xl font-primary font-bold pt-3 md:pt-5">
          Michael Lee - Customer Experience Manager
        </h4>
        <p className="text-xl font-primary py-3">
          Michael is dedicated to ensuring every customer's journey with Mighty
          Fitness is exceptional. With a background in customer service and a
          passion for fitness, he strives to provide personalized support and
          guidance to our community.
        </p>

        <h4 className="text-xl font-primary font-bold pt-3 md:pt-5">
          Sarah Johnson - Marketing Director
        </h4>
        <p className="text-xl font-primary py-3">
          Sarah leads our marketing efforts with creativity and strategic
          insight. Her campaigns inspire and engage, spreading the message of
          health and fitness empowerment through Mighty Fitness across digital
          and traditional channels.
        </p>

        <h4 className="text-xl font-primary font-bold pt-3 md:pt-5">
          David Brown - Technical Lead
        </h4>
        <p className="text-xl font-primary py-3">
          As our technical lead, David oversees the development of our digital
          platforms and ensures a seamless online experience for our customers.
          His expertise in technology integration keeps Mighty Fitness at the
          forefront of innovation.
        </p>
      </div>
      <CustomerTestimonial />
      <Contact />
    </div>
  );
};

export default AboutUs;

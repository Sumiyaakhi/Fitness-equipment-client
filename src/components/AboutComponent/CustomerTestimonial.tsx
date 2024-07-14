import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TTestimonial } from "@/types";

const CustomerTestimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emma Smith",
      quote:
        "Mighty Fitness has transformed my home workout routine! Their equipment is top-notch and customer service is excellent.",
      imageUrl: "https://i.ibb.co/nDDMhQ7/Untitled-design.png",
    },
    {
      id: 2,
      name: "John Doe",
      quote:
        "I've been a customer of Mighty Fitness for years. Their products are durable and effective, perfect for my fitness goals.",
      imageUrl: "https://i.ibb.co/VwXLW2z/Untitled-design-4.png",
    },
    {
      id: 3,
      name: "Alice Johnson",
      quote:
        "The team at Mighty Fitness truly cares about their customers. They helped me find the right equipment for my needs.",
      imageUrl:
        "https://i.ibb.co/xJrCL3V/DUM081-Space-Smart-Adjustable-Dumbbell-Barbell-Set-Lifestyle-08-ezgif-com-webp-to-jpg-converter.jpg",
    },
  ];
  return (
    <div>
      <h1 className="text-3xl font-primary py-4 md:py-8 text-center hover:underline">
        Discover the Benefits of Our Fitness Equipment
      </h1>
      <Carousel
        opts={{
          align: "start",
        }}
        orientation="horizontal"
        className="mx-5 w-2/3 md:w-full md:max-w-5xl md:mx-auto"
      >
        <CarouselContent className="flex">
          {testimonials?.map((item: TTestimonial, index: number) => (
            <CarouselItem key={index} className="w-full">
              <div className="md:p-4 grid grid-cols-1 md:grid-cols-2 font-primary">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="md:w-2/3  object-cover "
                />
                <div className=" my-auto">
                  <h2 className="text-2xl font-bold mb-4 hover:underline">
                    {item.name}
                  </h2>
                  <p className="underline  text-xl font-semibold">
                    Review of Fitness Club:
                  </p>
                  <p>{item.quote}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CustomerTestimonial;

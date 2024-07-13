import { useGetBenefitsQuery } from "@/redux/api/baseApi";
import BenefitCard from "./BenefitCard";
import { TBenefit } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const BenefitProducts = () => {
  const { data, isLoading } = useGetBenefitsQuery({});

  if (isLoading) {
    return (
      <>
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </>
    );
  }

  const benefitData = data?.data; // Adjusting to extract the data correctly

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
          {benefitData?.map((item: TBenefit, index: number) => (
            <CarouselItem key={index} className="w-full">
              <BenefitCard benefitData={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default BenefitProducts;

import { TBenefit } from "@/types";

const BenefitCard = ({ benefitData }: { benefitData: TBenefit }) => {
  const { name, img, benefit } = benefitData;
  return (
    <div className="md:p-4 grid grid-cols-1 md:grid-cols-2 font-primary">
      <img src={img} alt={name} className="md:w-2/3  object-cover " />
      <div className=" my-auto">
        <h2 className="text-2xl font-bold mb-4 hover:underline">{name}</h2>
        <p className="underline  text-xl font-semibold">Benefits of {name}:</p>
        <p>{benefit}</p>
      </div>
    </div>
  );
};

export default BenefitCard;

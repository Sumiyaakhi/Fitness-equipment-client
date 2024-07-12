const Cataegory = () => {
  const categories = [
    {
      id: 2,
      name: "Benches",
      image:
        "https://i.ibb.co/2sxvMKY/Am-Staff-TS015-B-Adjustable-Bench-BE005-08-b16436ea-90d4-4997-8a82-50ef90c42e6d.jpg",
    },
    {
      id: 3,
      name: "Squat & Power Racks",
      image:
        "https://i.ibb.co/dg68Wg8/Squat-Power-Rack-Image1-96983d53-6891-4996-9bde-962ba7af7bdc.jpg",
    },

    {
      id: 5,
      name: "Barbells",
      image:
        "https://i.ibb.co/wNcMctT/OLY-1500-LBS-COLLARS-7ft-Olympic-Bar-1500-lbs-w-Needle-Bearings-Collars-5.jpg",
    },

    {
      id: 7,
      name: "Lower body & Legs",
      image:
        "https://i.ibb.co/YpL6nDR/TB59-B-Leg-Press-Machine-Model-05-fa205b80-0d9b-4ce2-989b-f2b5c44deb48.jpg",
    },
    {
      id: 1,
      name: "Cardio",
      image: "https://i.ibb.co/6wsjVrw/Cardio-Treadmills-Email.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-20">
      <div className=" ">
        <h1 className="text-xl text-center font-bebas">
          "Holding the most reputed brands like Reebok, Adidas, <br /> Sole,
          Spirit, Freemotion etc, the owner is very experienced and
          knowledgeable with what he sells. <br /> Very reasonable pricing for
          the quality, most importantly after sales service is exceptional. If
          you are looking for longterm fitness equipment I highly recommend this
          store. Talk to Us"
        </h1>
      </div>
      <div>
        <h1 className="text-3xl font-primary py-4 md:py-8 text-center hover:underline">
          Enhance Your Lifestyle
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
          {categories.map((category, index) => (
            <div className="border-[1px] rounded-b-md" key={index}>
              <img src={category.image} alt="" />
              <p className="text-xl font-primary p-3 hover:underline ">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cataegory;

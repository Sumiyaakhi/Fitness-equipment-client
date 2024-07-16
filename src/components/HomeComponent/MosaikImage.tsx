import { useGetImagesQuery } from "@/redux/api/baseApi";
import { TImage } from "@/types";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const MosaikImage = () => {
  const { data, isLoading } = useGetImagesQuery({});
  console.log(data);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-primary py-4 md:py-8 text-center hover:underline">
        Image Gallery
      </h1>
      <div className="max-w-4xl mx-auto my-10 p-4 border-2 rounded-xl">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {data?.data?.map((item: TImage, index: number) => (
              <div key={index} className="m-2 rounded-lg">
                <img src={item.img} alt="" className="w-full rounded-lg" />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default MosaikImage;

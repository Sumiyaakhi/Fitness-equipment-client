import { useGetImagesQuery } from "@/redux/api/baseApi";
import Gallery from "react-photo-gallery";

const MosaikImage = () => {
  const { data, isLoading } = useGetImagesQuery({});

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

  const photos = data?.data.map((item) => ({
    src: item.img,
  }));

  return (
    <div className="max-w-7xl mx-auto border-2 rounded-xl">
      <Gallery photos={photos} />
    </div>
  );
};

export default MosaikImage;

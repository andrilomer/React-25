import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading data! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occurred! {errorMsg}</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-slate-600">
      <div className="relative flex justify-center items-center w-[600px] h-[450px]">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="absolute left-4 w-8 h-8 text-white drop-shadow-lg cursor-pointer"
        />
        {images && images.length
          ? images.map((imageItem, index) => (
              <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={
                  currentSlide === index
                    ? "rounded-lg shadow-md w-full h-full"
                    : "rounded-lg shadow-md w-full h-full hidden"
                }
              />
            ))
          : null}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="absolute right-4 w-8 h-8 text-white drop-shadow-lg cursor-pointer"
        />
        <span className="absolute bottom-4 flex space-x-2">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  key={index}
                  className={
                    currentSlide === index
                      ? "bg-white h-4 w-4 rounded-full border-none outline-none cursor-pointer"
                      : "bg-gray-400 h-4 w-4 rounded-full border-none outline-none cursor-pointer"
                  }
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))
            : null}
        </span>
      </div>
    </div>
  );
}

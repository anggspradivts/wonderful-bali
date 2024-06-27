import { useState } from "react";

interface DestinationProps {
  data: {
    id: number;
    name: string;
    img: string;
    description: string;
    url: string;
  }[];
}
const Destination: React.FC<DestinationProps> = ({ data }) => {
  const [loadMore, setLoadMore] = useState(3);
  const topPlaces = data.slice(0, loadMore);
  return (
    <div className="py-20">
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="find destination..."
          className="w-[500px] p-3 shadow-2xl"
        />
      </div>
      <div className="destination-sec md:mx-36 mt-10 space-y-4">
        <div className="text-lg">Popular Places 🔥</div>
        {topPlaces.map((destination, index) => (
          <div key={index} className="flex md:h-[100px] space-x-2 shadow-lg hover:scale-95 transition-all duration-300">
            <div className=" w-2/12">
              <img src={destination.img} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="w-10/12">
              <p className="text-lg">{destination.name}</p>
              <p className="text-xs">{destination.description}</p>
            </div>
          </div>
        ))}
        <div className="flex justify-center">
          {loadMore < data.length ? (
            <button
              className="p-2 bg-sky-500 rounded"
              onClick={() => setLoadMore((prev) => prev + 5)}
            >
              Load More
            </button>
          ) : (
            null
          )}
        </div>
      </div>
    </div>
  );
};

export default Destination;

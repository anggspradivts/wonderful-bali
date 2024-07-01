import { useState } from "react";
import LoaderBtn from "../../components/ui/LoaderBtn";
import { useNavigate } from "react-router-dom";

interface DestinationProps {
  data: {
    id: string;
    name: string;
    img: string;
    description: string;
    url: string;
  }[];
}
const Destination: React.FC<DestinationProps> = ({ data }) => {
  const [query, setQuery] = useState("")
  const [loadMore, setLoadMore] = useState(3);
  const topPlaces = data.slice(0, loadMore);
  const navigate = useNavigate();

  const handleClick = () => {
    setLoadMore(loadMore + 3);
  };

  return (
    <div className="py-20">
      <div className="flex justify-center my-3 text-xl font-bold">
        <h1>Search Destination</h1>
      </div>
      <div className="flex justify-center items-center">
        <input
          type="text"
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="find destination... 'not worked yet'"
          className="w-[500px] p-3 shadow-2xl rounded-xl border border-slate-300"
        />
      </div>
      <div className="destination-sec md:mx-36 mt-10 space-y-4">
        <div className="text-lg">Popular Places in Bali🔥</div>
        {topPlaces.map((destination, index) => (
          <div
            role="button"
            key={index}
            onClick={() => navigate(`/destination/${destination.id}`)}
            className="flex md:h-[100px] space-x-2 shadow-lg hover:scale-95 transition-all duration-300"
          >
            <div className=" w-2/12">
              <img
                src={destination.img}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-10/12">
              <p className="text-lg font-semibold">{destination.name}</p>
              <p className="text-xs md:text-md">{destination.description}</p>
            </div>
          </div>
        ))}
        <div className="flex justify-center">
          {loadMore < data.length ? (
            <LoaderBtn content="Load More" onClick={handleClick} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Destination;

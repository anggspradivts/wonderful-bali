import { useParams } from "react-router-dom";

interface popularPlace {
  name: string;
  url: string;
  img: string;
}
interface DestinationDetailProps {
  data: {
    id: string;
    name: string;
    img: string;
    description: string;
    url: string;
    popular_places: popularPlace[];
  }[];
}
const DestinationDetail: React.FC<DestinationDetailProps> = ({ data }) => {
  const { id } = useParams();

  const findDestination = data.find((data) => data.id === id);

  if (!findDestination) {
    return <div>No Destination was found</div>;
  }

  return (
    <div className="py-20">
      <div className="grid md:grid-cols-2 space-x-5">
        <div className="">
          <img
            src={findDestination.img}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-5">
          <h1 className="md:text-5xl font-bold montserrat">
            {findDestination?.name}
          </h1>
          <div className="p-2">
            <p className="font-bold">Description:</p>
            <p>{findDestination?.description}</p>
          </div>
          <div className="w-full">
            <p className="font-semibold">
              Popular places in {findDestination.name}:
            </p>
            <div className="flex flex-nowrap h-[200px] max-w-[300px] sm:max-w-[600px] md:w-full overflow-x-auto gap-2">
              {findDestination.popular_places.map((place, index) => (
                <div key={index} className="h-full w-[200px] flex-shrink-0 text-center">
                  <div className="w-auto h-4/5 bg-slate-200">
                    <img
                      src="/goa-gajah.jpeg"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="w-auto h-1/5">{place.name}</p>
                </div>
              ))}
              <div className="h-full w-[200px] flex-shrink-0 text-center">
                <div className="w-auto h-4/5 bg-slate-200">
                  <img
                    src="/goa-gajah.jpeg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="w-auto h-1/5">Goa Gajah</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;

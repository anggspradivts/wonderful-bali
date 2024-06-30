import { useNavigate } from "react-router-dom";
// import { data } from "../../data/data";
import LoaderBtn from "../../components/ui/LoaderBtn";

interface HomeProps {
  data: {
    id: string;
    name: string;
    img: string;
    description: string;
  }[]
}
const Home: React.FC<HomeProps> = ({ data }) => {
  const place = data.slice(0, 3);
  const navigate = useNavigate();

  const handleNavigate = async () => {
    navigate("/destination");
  };

  return (
    <div className="flex flex-col text-center w-full">
      <div className="text-center py-40 md:py-28">
        <h1 className="text-6xl font-extrabold montserrat">
          <span className="text-green-500">Wonderfull</span> Places
        </h1>
        <h1 className="text-6xl font-extrabold montserrat">
          In <span className="">Bali</span>
        </h1>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {place.map((card, index) => (
          <div key={index} className="p-1 space-y-3">
            <div
              role="button"
              onClick={() => navigate(`/destination/${card.id}`)}
              className="rounded-lg h-[200px] w-auto overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={`${card.img}`}
                alt={card.name}
                className="object-cover w-full h-full shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg font-semibold">{card.name}</p>
              <p className="text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-10">
        <LoaderBtn content="Find more destination" onClick={handleNavigate} />
      </div>
    </div>
  );
};

export default Home;

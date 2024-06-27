import { data } from "../../data/data";

const Home = () => {
  const place = data.slice(0, 3)
  return ( 
    <div className="flex flex-col text-center w-full">
      <div className="text-center py-28 text-6xl font-bold">
        <h1>Wonderfull Bali</h1>
        {/* <h1>In Bali</h1> */}
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {place.map((card, index) => (
          <div key={index} className="p-1">
            <div className="rounded-lg h-[200px] w-auto overflow-hidden shadow-2xl">
              <img src={`${card.img}`} alt={card.name} className="object-cover w-full h-full shadow-lg" />
            </div>
            <div>
              <p className="text-lg">{card.name}</p>
              <p className="text-sm">{card.description}</p>
            </div>
          </div>
        ))}
        <div className="card-sec">
          
        </div>
      </div>
    </div>
   );
}
 
export default Home;
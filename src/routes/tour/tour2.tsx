import { Link, useNavigate } from "react-router-dom";

const Tour2 = () => {
  const tourPackages = [
    {
      title: "Tour Packages 1",
      img: "",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae alias veritatis quo illum assumenda incidunt pariatur quidem cum voluptatibus temporibus iure consequuntur deleniti doloremque, corporis explicabo ea, minus magnam?",
    },
    {
      title: "Tour Packages 2",
      img: "",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae alias veritatis quo illum assumenda incidunt pariatur quidem cum voluptatibus temporibus iure consequuntur deleniti doloremque, corporis explicabo ea, minus magnam?",
    },
    {
      title: "Tour Packages 3",
      img: "",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae alias veritatis quo illum assumenda incidunt pariatur quidem cum voluptatibus temporibus iure consequuntur deleniti doloremque, corporis explicabo ea, minus magnam?",
    },
  ];

  const navigate = useNavigate();

  return (
    <div>
      <header className="text-center md:text-end text-4xl md:text-6xl montserrat font-bold py-20">
        <h1 className="text-green-500">Explore Our</h1>
        <h1 className="text-sky-500">Tour Packages</h1>
      </header>
      <div className="space-y-10 md:mx-24">
        {tourPackages.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate("/")}
            role="button"
            className="md:flex md:h-[200px] space-x-2 shadow-xl hover:scale-95 transition-all duration-300"
          >
            <div className="bg-slate-300 md:w-3/12">
              <img src="" alt="" />
            </div>
            <div className="md:w-9/12 p-1">
              <p className="text-xl font-semibold">{item.title}</p>
              <p>{item.description}</p>
              <p className="italic text-sky-500">click to see more</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tour2;

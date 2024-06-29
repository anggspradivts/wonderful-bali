import clsx from "clsx";
import { useState } from "react";
import { useParams } from "react-router-dom";

const TourDetailPage = () => {
  const [featureState, setFeatureState] = useState({
    id: "",
    name: "",
    description: "",
  });
  const { id } = useParams();

  const feature = [
    {
      id: "1",
      name: "Feature 1",
      description:
        "Feature 1. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quas repellat eos reiciendis illum labore porro? At vitae qui, iste nemo officia laudantium mollitia, dignissimos sunt cumque aut eius cum?",
    },
    {
      id: "2",
      name: "Feature 2",
      description:
        "Feature 2. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quas repellat eos reiciendis illum labore porro? At vitae qui, iste nemo officia laudantium mollitia, dignissimos sunt cumque aut eius cum?",
    },
    {
      id: "3",
      name: "Feature 3",
      description:
        "Feature 3. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quas repellat eos reiciendis illum labore porro? At vitae qui, iste nemo officia laudantium mollitia, dignissimos sunt cumque aut eius cum?",
    },
    {
      id: "4",
      name: "Feature 4",
      description:
        "Feature 4. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quas repellat eos reiciendis illum labore porro? At vitae qui, iste nemo officia laudantium mollitia, dignissimos sunt cumque aut eius cum?",
    },
    {
      id: "5",
      name: "Feature 5",
      description:
        "Feature 5. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quas repellat eos reiciendis illum labore porro? At vitae qui, iste nemo officia laudantium mollitia, dignissimos sunt cumque aut eius cum?",
    },
    {
      id: "6",
      name: "Feature 6",
      description:
        "Feature 6. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quas repellat eos reiciendis illum labore porro? At vitae qui, iste nemo officia laudantium mollitia, dignissimos sunt cumque aut eius cum?",
    },
  ];

  return (
    <div className="py-20">
      <div className="grid md:grid-cols-2 h-screen gap-x-5">
        <div className="sidebar">
          <p className="text-2xl">List of Feature on package {id}</p>
          <div className="md:grid md:grid-cols-1 max-h-[100px] md:max-h-full overflow-auto space-y-1">
            {feature.map((f, index) => (
              <div key={index}>
                <button
                  onClick={() =>
                    setFeatureState({
                      id: f.id,
                      name: f.name,
                      description: f.description,
                    })
                  }
                  className={clsx(
                    "inline-block px-2 rounded-full hover:bg-slate-300 bg-slate-200",
                    {
                      "bg-slate-300": f.id === featureState.id,
                    }
                  )}
                >
                  {f.name}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl m:text-6xl font-bold rounded-full">
            Package Title {id}
          </h1>
          <p className="font-semibold">About this package:</p>
          <div className="space-y-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate, omnis praesentium in error quidem consequuntur amet
              tenetur similique quos perspiciatis a suscipit illo rerum
              reiciendis quod ut quia repudiandae eum.
            </p>
            {featureState && (
              <div>
                <p className="text-lg font-semibold">{featureState.name}</p>
                <p>{featureState.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetailPage;

// This is still on demo

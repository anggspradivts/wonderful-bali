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
  ];

  return (
    <div className="py-20">
      <div className="grid grid-cols-2 h-screen">
        <div className="sidebar">
          <p className="text-2xl">List of Feature on package {id}</p>
          <ul>
            {feature.map((f, index) => (
              <li
                key={index}
                role="button"
                onClick={() =>
                  setFeatureState({
                    id: f.id,
                    name: f.name,
                    description: f.description,
                  })
                }
                className={clsx("hover:text-sky-500", {
                  "text-sky-500": f.id === featureState.id,
                })}
              >
                {f.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-4xl m:text-6xl font-bold">Package Title {id}</h1>
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

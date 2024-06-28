const About = () => {
  const content = [
    {
      header: "Personalized Services",
      text: "Every traveler is unique, and so are our travel plans. We take the time to understand your preferences and design itineraries that cater specifically to your interests and desires.",
    },
    {
      header: "Competitive Price",
      text: "Quality travel doesn’t have to break the bank. We offer competitive prices and exclusive deals, ensuring you get the most value out of your travel budget.",
    },
    {
      header: "Peace Of Minds",
      text: "From booking flights and accommodations to arranging local tours and activities, we handle all the details so you can focus on enjoying your journey.",
    },
  ];

  return (
    <div>
      <div className="flex md:text-end md:justify-end my-20">
        <header className="text-4xl md:text-6xl montserrat font-bold">
          <h1 className="text-green-500">Your Trip</h1>
          <h1 className="text-sky-500">Your Adventure</h1>
        </header>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex items-center w-full h-auto overflow-hidden">
          <img src="pantai-kelingking.jpg" alt="" className="object-cover" />
        </div>
        <div className="text-center md:text-end space-y-11 md:space-y-4">
          <div className="">
            <h1 className="text-xl font-bold p-2 bg-green-500 text-white inline-block rounded-full">
              Why Us
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis deserunt debitis rem impedit harum ipsum nostrum
              reprehenderit perferendis aut sapiente error dolores et laborum ad
              laudantium, amet porro nulla. Autem.
            </p>
          </div>
          {content.map((content, index) => (
            <div key={index} className="section border border-black md:border-none p-2 md:p-0">
              <div className="text-lg font-medium p-3 bg-sky-500 text-white inline-block rounded-full">
                <span className="bg-white px-3 rounded-full text-black">{index + 1}</span>. {content.header}
              </div>
              <div className="">{content.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

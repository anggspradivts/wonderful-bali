const About = () => {
  const content = [
    {
      header: "Why Us",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni eos numquam, deleniti iste tenetur adipisci id perferendis laudantium harum libero! Corporis sequi alias ullam voluptates. Dicta sapiente commodi necessitatibus similique.",
    },
    {
      header: "Why Us",
      text: "From booking flights and accommodations to arranging local tours and activities, we handle all the details so you can focus on enjoying your journey.",
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
          <h1>Your Trip</h1>
          <h1>Your Adventure</h1>
        </header>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex items-center w-full h-auto overflow-hidden">
          <img src="pantai-kelingking.jpg" alt="" className="object-cover" />
        </div>
        <div className="text-center md:text-end space-y-4">
          {content.map((content, index) => (
            <div key={index} className="section">
              <div className="text-lg font-medium">{content.header}</div>
              <div>{content.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

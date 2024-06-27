const About = () => {
  return (
    <div>
      <div className="flex md:text-end md:justify-end my-20">
        <header className="text-4xl md:text-6xl">
          <div>Your Trip</div>
          <div>Your Adventure</div>
        </header>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="w-full h-auto overflow-hidden">
          <img src="pantai-kelingking.jpg" alt="" className="object-cover" />
        </div>
        <div className="text-center md:text-end space-y-4">
          <div className="section">
            <div className="text-lg">header</div>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
              nisi, sunt tempore unde, voluptate voluptatum ad harum rem soluta
              possimus neque, ducimus distinctio fugiat voluptates aut?
              Recusandae fugiat minima sit!
            </div>
          </div>
          <div className="section">
            <div className="text-lg">header</div>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
              nisi, sunt tempore unde, voluptate voluptatum ad harum rem soluta
              possimus neque, ducimus distinctio fugiat voluptates aut?
              Recusandae fugiat minima sit!
            </div>
          </div>
          <div className="section">
            <div className="text-lg">Peace Of Minds</div>
            <div>
              From booking flights and accommodations to arranging local tours
              and activities, we handle all the details so you can focus on
              enjoying your journey.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

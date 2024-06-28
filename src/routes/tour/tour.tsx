const Tour = () => {
  const content =[
    {
      header: "Expertise and Experience",
      text: "Our guides are seasoned professionals with deep local knowledge and years of experience."
    },
    {
      header: "Personalized Attention",
      text: "We tailor your trip to your interests, ensuring a unique and enjoyable experience."
    },
    {
      header: "Engaging Storytellers",
      text: "Our guides bring destinations to life with captivating stories and insights."
    },
  ]

  return (
    <div>
      <div className="py-20 after:content-[''] after:block after:w-[350px] after:bg-black after:h-1">
        <h1 className="text-4xl md:text-6xl font-bold montserrat">Meet Our Guides</h1>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="space-y-3">
          <p>
            We believe that the heart of a memorable travel experience lies in
            the hands of an exceptional guide. Our team of passionate and
            knowledgeable guides are not only experts in their field but also
            avid travelers themselves. They are here to share their love for the
            destinations we offer, ensuring you have an enriching and
            unforgettable journey.
          </p>
          <div className="text-lg after:content-[''] after:block after:w-[150px] after:bg-black after:h-1">
            <p className="font-semibold">Why Choose Our Guides</p>
          </div>
          <div className="pl-5 space-y-3">
            {content.map((content, index) => (
              <div key={index}>
                <h2>{index + 1}. {content.header}</h2>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <img src="https://th.bing.com/th/id/OIP.SaAFCgdzSBX9HNWuQebvzgHaE8?w=282&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="w-full h-full p-5"/>
        </div>
      </div>
    </div>
  );
};

export default Tour;

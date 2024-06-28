const Footer = () => {
  return (
    <footer className="md:mt-10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-gray-400">
              Explore the world with our expertly crafted travel experiences.
              From adventure tours to luxury getaways, we have something for
              every traveler.
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/tours" className="hover:text-gray-300">
                  Tours
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-gray-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Phone:</span>
                <a href="tel:+1234567890" className="hover:text-gray-300">
                  {" "}
                  +1 234 567 890
                </a>
              </li>
              <li>
                <span className="font-semibold">Email:</span>
                <a
                  href="mailto:info@travelagency.com"
                  className="hover:text-gray-300"
                >
                  {" "}
                  info@travelagency.com
                </a>
              </li>
              <li>
                <span className="font-semibold">Address:</span>
                <span className="text-gray-400">
                  {" "}
                  123 Travel St, Adventure City, TX 78901
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Angga Pradivta. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.5c-.9.4-1.8.7-2.8.8 1-1 1.7-2.4 2.1-3.8-.9.5-2 1-3.1 1.2-.9-.9-2-1.5-3.3-1.5-2.5 0-4.4 2.1-4.4 4.4 0 .3 0 .7.1 1-3.6-.2-6.9-1.9-9-4.5-.4.7-.6 1.5-.6 2.3 0 1.6.8 3.1 2.1 4-.7 0-1.4-.2-2-.5 0 2.3 1.6 4.3 3.8 4.7-.4.1-.9.2-1.3.2-.3 0-.6 0-.9-.1.6 1.9 2.4 3.3 4.5 3.4-1.7 1.3-3.8 2-5.9 2-.4 0-.8 0-1.2-.1 2.1 1.3 4.7 2.1 7.4 2.1 8.9 0 13.8-7.4 13.8-13.8v-.6c.9-.7 1.7-1.5 2.4-2.4-.8.4-1.7.7-2.6.8.9-.6 1.6-1.4 2-2.4z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.7.5.5 5.7.5 12S5.7 23.5 12 23.5 23.5 18.3 23.5 12 18.3.5 12 .5zm3.7 9.2c.1.2.1.4.1.6v5.9c0 .5-.1.8-.3 1-.3.3-.7.5-1.2.5H9.7c-.5 0-.9-.1-1.2-.4-.3-.3-.5-.7-.5-1.2v-5.9c0-.2 0-.4.1-.6 0-.2.1-.4.1-.6s.1-.4.2-.5c.1-.2.2-.3.3-.4.1-.1.2-.2.4-.3s.3-.1.5-.2c.2 0 .4-.1.6-.1h1.4c.2 0 .4 0 .6.1s.3.1.5.2.3.2.4.3c.1.1.2.2.3.4s.1.3.2.5c.1.2.1.4.1.6s0 .4-.1.6zM10.6 8.4c.1.3 0 .6-.2.8-.2.2-.5.3-.8.3-.3 0-.6-.1-.8-.3-.2-.2-.3-.5-.3-.8 0-.3.1-.6.3-.8.2-.2.5-.3.8-.3.3 0 .6.1.8.3.2.2.3.5.2.8zm4.7 6.4c0-.2-.1-.3-.3-.4-.2-.1-.4-.2-.7-.2-.3 0-.5.1-.7.2-.2.1-.3.2-.4.4-.1.2-.1.3-.1.4 0 .2.1.3.1.4.1.2.2.3.4.4.2.1.4.2.7.2.3 0 .5-.1.7-.2.2-.1.3-.2.3-.4.1-.2.1-.3.1-.4 0-.1 0-.2-.1-.4z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11.5 19.5h-3v-10h3v10zm-1.5-11.5h-.1c-1 0-1.6-.7-1.6-1.6 0-.9.6-1.6 1.6-1.6s1.6.7 1.6 1.6c0 .9-.6 1.6-1.5 1.6zm13.5 11.5h-3v-5.5c0-1.3-.5-2.2-1.7-2.2-.9 0-1.4.6-1.7 1.3-.1.2-.1.5-.1.7v5.7h-3v-10h3v1.2c.4-.7 1.1-1.2 2.4-1.2 1.7 0 3 1.1 3 3.5v6.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

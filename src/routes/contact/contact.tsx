import { PhoneCall } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <header className="flex items-center py-20 text-4xl md:text-6xl montserrat font-extrabold space-x-5">
        <h1 className="">Contact Us</h1>
        <PhoneCall className="h-14 w-14 text-sky-500" />
      </header>
      <div className="grid md:grid-cols-2">
        <div className="contac-sec">
          <div className="p-5 shadow-md shadow-sky-500">
            <form
              onSubmit={handleSubmit}
              action="mailto:anggapradivta941@gmail.com?subject=Kepentingan%20Bisnis"
              method="post"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="johndoe@mail.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="i want to book custom package..."
                />
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white rounded"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
        <div className="social-sec p-5 bg-sky-500 text-white">
          <div>
            <h1 className="text-2xl ">Get in touch with us ~</h1>
          </div>
          <hr />
          <div className="mt-5">
            <h1>Phone Number:</h1>
            <h1>+6281 2466 6738 3</h1>
          </div>
          <div className="mt-5">
            <h1>Address:</h1>
            <h1>Indonesia, Bali, Gianyar City</h1>
          </div>
          <div className="my-5 space-y-2">
            <div>
              <Link to="https://www.instagram.com/codetillidie/">
                {/* <img className="socmed-icon h-10" src={instagramIcon} alt="" /> */}
                <span className="hover:text-black border-b border-white hover:border-black">
                  Instagram ↗
                </span>
              </Link>
            </div>
            <div>
              <Link to="https://github.com/anggspradivts">
                {/* <img className="h-10" src={githubIcon} alt="" /> */}
                <span className="hover:text-black border-b border-white hover:border-black">
                  GitHub ↗
                </span>
              </Link>
            </div>
            <div>
              <Link to="">
                {/* <img className="h-10" src={twitterIcon} alt="" /> */}
                <span className="hover:text-black border-b border-white hover:border-black">
                  Twitter ↗
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

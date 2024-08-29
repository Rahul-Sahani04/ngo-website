import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />

      <div id="contact-us" className="flex flex-col items-center">
        <h1 className="text-[var(--primary-color)] border-b-2 m-2 text-9xl font-bold"
        style={{ borderBottomWidth: '4px' }} // Custom border height
        >
          Contact Us
        </h1>
        <img
          src="https://example.com/contact-us-banner.jpg"
          className="w-full"
          alt="Contact Us"
        />

        <p className="text-3xl m-14 text-center">
          We'd love to hear from you! Whether you have a question, feedback, or
          simply want to get involved, feel free to reach out. Fill out the form
          below and we will get back to you as soon as possible.
        </p>

        <form className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

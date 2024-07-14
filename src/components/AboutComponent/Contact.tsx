const Contact = () => {
  return (
    <div className="bg-gray-100 py-8 font-primary">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 hover:underline">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-lg mb-4">
              For any questions, feedback, or inquiries, please feel free to
              reach out to us.
            </p>
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 0a10 10 0 0110 10c0 5.523-4.477 10-10 10S0 15.523 0 10A10 10 0 0110 0zm0 2a8 8 0 00-8 8c0 2.245.933 4.276 2.428 5.742L15.742 4.428A7.96 7.96 0 0010 2zm0 16c1.332 0 2.558-.465 3.517-1.242l-9.484-9.484A7.965 7.965 0 002 10c0 4.411 3.589 8 8 8zm6.572-3.243A8 8 0 0016 10h2a10 10 0 01-1.426 5.048l-1.853-1.853z" />
              </svg>
              <p>123 Fitness Club Way, Tejgaon, Dhaka</p>
            </div>
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 6a1 1 0 011-1h8a1 1 0 110 2H5a1 1 0 01-1-1zm10 5a1 1 0 00-1 1v1.586a1 1 0 01-.293.707l-1.414 1.414A1 1 0 0012 20h-4a1 1 0 00-.707.293l-1.414-1.414A1 1 0 005 17.586V16a1 1 0 00-1-1H2a1 1 0 01-1-1V7a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1h-1zm-2-9a3 3 0 11-6 0 3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <p>+123 456 7890</p>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0a10 10 0 0110 10c0 5.523-4.477 10-10 10S0 15.523 0 10A10 10 0 0110 0zm0 2a8 8 0 00-8 8c0 2.245.933 4.276 2.428 5.742L15.742 4.428A7.96 7.96 0 0010 2zm0 16c1.332 0 2.558-.465 3.517-1.242l-9.484-9.484A7.965 7.965 0 002 10c0 4.411 3.589 8 8 8zm6.572-3.243A8 8 0 0016 10h2a10 10 0 01-1.426 5.048l-1.853-1.853z"
                />
              </svg>
              <p>info@fitnessclub.com</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-block bg-primary text-white py-2 px-4 rounded-md hover:bg-white hover:border-primary hover:border-2 hover:text-primary font-bold transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

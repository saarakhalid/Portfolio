import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="font-poppins flex flex-col items-center justify-center md:p-6 md:p-10 mt-18">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Let's Work Together</h2>
      <p className="text-gray-600 mb-8 md:mb-18 text-center">
        Do you have a project in your mind? Contact me here
      </p>

      <div className="bg-white p-6 w-full max-w-7xl md:max-w-9xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="flex flex-col justify-center mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Find Me →</h3>
          <p className="flex items-center gap-2 text-gray-700">
            📧 <a href="mailto:khalidsara004@gmail.com" className="text-indigo-600">khalidsara004@gmail.com</a>
          </p>
          <p className="flex items-center gap-2 text-gray-700 mt-2">
            ☎️ Phone: +254 736050131
          </p>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border rounded-lg p-3 w-full"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border rounded-lg p-3 w-full"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="border rounded-lg p-3 w-full"
            required
          />
          <textarea
            placeholder="Message"
            className="border rounded-lg p-3 w-full h-32"
            required
          ></textarea>
          <button className="bg-indigo-600 text-white py-3 hover:bg-indigo-700 transition ">
            Send →
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;


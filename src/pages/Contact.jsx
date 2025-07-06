import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    company: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      message: '',
      phone: '',
      company: '',
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-10 bg-gradient-to-r from-green-200 via-white to-green-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Contact Farmers Home
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
            Need help with farming or our services? We're here to support you every step of the way.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
          <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
            <div className="overflow-hidden bg-white rounded-xl p-6">
              <p className="text-lg font-medium text-gray-900">+254 700 123 456</p>
              <p className="mt-1 text-lg font-medium text-gray-900">+254 712 345 678</p>
            </div>

            <div className="overflow-hidden bg-white rounded-xl p-6">
              <p className="text-lg font-medium text-gray-900">support@farmershome.com</p>
              <p className="mt-1 text-lg font-medium text-gray-900">info@farmershome.com</p>
            </div>

            <div className="overflow-hidden bg-white rounded-xl p-6">
              <p className="text-lg font-medium leading-relaxed text-gray-900">
                123 Farm Road, Nairobi, Kenya
              </p>
            </div>
          </div>

          <div className="mt-6 overflow-hidden bg-white rounded-xl">
            <div className="px-6 py-12 sm:p-12">
              <h3 className="text-3xl font-semibold text-center text-gray-900">
                Send us a message
              </h3>

              {submitted ? (
                <div className="mt-6 text-green-600 text-center font-medium">
                  Thank you for contacting Farmers Home! We will get back to you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-14">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    <div>
                      <label className="text-base font-medium text-gray-900">Your name</label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-base font-medium text-gray-900">Email address</label>
                      <div className="mt-2.5">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-base font-medium text-gray-900">Phone number</label>
                      <div className="mt-2.5">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-base font-medium text-gray-900">Company name</label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Enter your company"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-base font-medium text-gray-900">Message</label>
                      <div className="mt-2.5">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us how we can assist you"
                          rows="4"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600"
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

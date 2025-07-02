import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="py-10 bg-white sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">

          <div className="col-span-2 md:col-span-4 xl:pr-8">
            <img
              className="w-auto h-9"
              src="src/logo/FARMERS_HOME__4_-removebg-preview (1).png"
              alt="Farmers Home Logo"
            />
            <p className="text-base leading-relaxed text-gray-600 mt-7">
              Empowering farmers with knowledge, quality products, and financial support to grow sustainable and profitable farms.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-green-600 rounded-md hover:bg-green-700 focus:bg-green-700 mt-7"
              title="Contact Support"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span className="ml-2">Contact Support</span>
            </Link>
          </div>

          <div className="lg:col-span-2">
            <p className="text-base font-semibold text-gray-900">Farmers</p>
            <ul className="mt-6 space-y-5">
              {[
                { label: 'Farming Skills', to: '/skills' },
                { label: 'Buy Seeds & Fertilizers', to: '/shop' },
                { label: 'Climate Advice', to: '/climate-advice' },
                { label: 'Delivery Information', to: '/delivery' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    title={label}
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-green-600 focus:text-green-600"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-base font-semibold text-gray-900">SACCO & Loans</p>
            <ul className="mt-6 space-y-4">
              {[
                { label: 'Join SACCO', to: '/sacco/join' },
                { label: 'Loan Application', to: '/loans/apply' },
                { label: 'Loan Status', to: '/loans/status' },
                { label: 'Repayment Info', to: '/loans/repayment' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    title={label}
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-green-600 focus:text-green-600"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-base font-semibold text-gray-900">Resources</p>
            <ul className="mt-6 space-y-5">
              {[
                { label: 'Blog & Tips', to: '/blog' },
                { label: 'Video Tutorials', to: '/videos' },
                { label: 'FAQs', to: '/faq' },
                { label: 'Customer Support', to: '/contact' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    title={label}
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-green-600 focus:text-green-600"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-base font-semibold text-gray-900">Company</p>
            <ul className="mt-6 space-y-5">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'Careers', to: '/careers' },
                { label: 'Privacy Policy', to: '/privacy' },
                { label: 'Terms & Conditions', to: '/terms' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    title={label}
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-green-600 focus:text-green-600"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()}, All Rights Reserved by Farmers Home
          </p>

          <ul className="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">
            {/* Social media icons */}
            {[
              { title: 'Twitter', to: 'https://twitter.com/farmershome', svgPath: (
                <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
              )},
              { title: 'Facebook', to: 'https://facebook.com/farmershome', svgPath: (
                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
              )},
              { title: 'Instagram', to: 'https://instagram.com/farmershome', svgPath: (
                <path d="M7.5 2.5h9a5 5 0 0 1 5 5v9a5 5 0 0 1-5 5h-9a5 5 0 0 1-5-5v-9a5 5 0 0 1 5-5zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm6-10a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              )},
              { title: 'GitHub', to: 'https://github.com/farmershome', svgPath: (
                <path d="M12 0a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.33-1.73-1.33-1.73-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.34-5.46-5.96 0-1.31.47-2.38 1.23-3.22-.13-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.63-2.8 5.65-5.47 5.96.44.39.81 1.16.81 2.34v3.47c0 .32.21.69.82.58A12 12 0 0 0 12 0z" />
              )}
            ].map(({ title, to, svgPath }) => (
              <li key={title}>
                <a
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={title}
                  className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-green-600 hover:text-white focus:text-white hover:bg-green-600 hover:border-green-600 focus:border-green-600"
                >
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    {svgPath}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

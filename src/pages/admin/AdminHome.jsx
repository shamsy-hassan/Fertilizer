export default function AdminHome() {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Admin Dashboard</h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Manage and monitor farmers, orders, loans, and product inventory in one centralized platform.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden bg-white rounded shadow">
            <div className="p-8">
              <p className="text-xl font-semibold text-black">Total Farmers</p>
              <p className="text-3xl font-bold text-blue-600 mt-4">1,245</p>
              <p className="text-sm text-gray-500 mt-2">Active on the platform</p>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded shadow">
            <div className="p-8">
              <p className="text-xl font-semibold text-black">Pending Orders</p>
              <p className="text-3xl font-bold text-blue-600 mt-4">42</p>
              <p className="text-sm text-gray-500 mt-2">Awaiting fulfillment</p>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded shadow">
            <div className="p-8">
              <p className="text-xl font-semibold text-black">Loan Requests</p>
              <p className="text-3xl font-bold text-blue-600 mt-4">18</p>
              <p className="text-sm text-gray-500 mt-2">Pending approval</p>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded shadow">
            <div className="p-8">
              <p className="text-xl font-semibold text-black">Available Products</p>
              <p className="text-3xl font-bold text-blue-600 mt-4">56</p>
              <p className="text-sm text-gray-500 mt-2">In stock</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-black text-center mb-6">Recent Activity</h3>
          <ul className="max-w-3xl mx-auto space-y-4">
            <li className="bg-white px-6 py-4 rounded shadow text-gray-700">
              ✅ New order <strong>#1234</strong> placed by <strong>Mary K.</strong>
            </li>
            <li className="bg-white px-6 py-4 rounded shadow text-gray-700">
              👤 New farmer registered: <strong>John Doe</strong>
            </li>
            <li className="bg-white px-6 py-4 rounded shadow text-gray-700">
              💰 Loan request approved for <strong>Jane Smith</strong>
            </li>
            <li className="bg-white px-6 py-4 rounded shadow text-gray-700">
              🛒 Product <strong>“SuperGro Fertilizer”</strong> added to inventory
            </li>
          </ul>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex p-3 font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">
            View Full Admin Report
          </a>
        </div>
      </div>
    </section>
  );
}

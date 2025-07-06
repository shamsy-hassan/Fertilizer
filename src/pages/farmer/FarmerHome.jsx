import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBasket, FaSeedling, FaMoneyBillWave, FaCloudSun, FaBox, FaLeaf, FaStore, FaTools, FaHistory } from 'react-icons/fa';

const farmerCards = [
  {
    title: 'Active Orders',
    count: '6',
    link: '/farmer/orders',
    icon: <FaShoppingBasket className="text-orange-600 text-3xl" />,
    description: 'Track your current and previous product orders.',
  },
  {
    title: 'Available Skills',
    count: '15',
    link: '/farmer/skills',
    icon: <FaSeedling className="text-green-600 text-3xl" />,
    description: 'Explore agricultural skills and learning modules.',
  },
  {
    title: 'Loan Status',
    count: 'Approved',
    link: '/farmer/loans',
    icon: <FaMoneyBillWave className="text-yellow-600 text-3xl" />,
    description: 'View your SACCO loan application progress.',
  },
  {
    title: 'Agro Climate',
    count: 'Stable',
    link: '/farmer/climate',
    icon: <FaCloudSun className="text-blue-500 text-3xl" />,
    description: 'Weather and climate updates for your region.',
  },
  {
    title: 'Products Available',
    count: '27',
    link: '/farmer/products',
    icon: <FaBox className="text-purple-600 text-3xl" />,
    description: 'Browse products for farming and livestock.',
  },
  {
    title: 'Crop Trending',
    count: 'Top: Beans',
    link: '/farmer/crop-trend',
    icon: <FaLeaf className="text-emerald-600 text-3xl" />,
    description: 'Insights into crops doing well in the market.',
  },
  {
    title: 'Available Markets',
    count: '12 Nearby',
    link: '/farmer/markets',
    icon: <FaStore className="text-pink-600 text-3xl" />,
    description: 'Find markets to sell your produce.',
  },
  {
    title: 'Hire Works',
    count: '3 Requests',
    link: '/farmer/hire',
    icon: <FaTools className="text-gray-600 text-3xl" />,
    description: 'Access help for labor or equipment services.',
  },
];

const recentActivities = [
  'You ordered Hybrid Maize Seed on July 1st.',
  'Loan application was approved by SACCO Nairobi.',
  'Agro-climate updated for your region (Makueni).',
  'Skill completed: Pest Control Techniques.',
  'Market listed: Kajiado Farmers Market.',
];

export default function FarmerHome() {
  return (
    <div className="p-6 bg-gradient-to-r from-green-200 via-white to-green-50 min-h-screen space-y-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
          <ul className="list-disc list-inside space-y-2">
            {recentActivities.map((activity, index) => (
              <li key={index} className="text-gray-700">{activity}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          {farmerCards.slice(0, 2).map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 p-6 block"
            >
              <div className="flex items-start gap-4">
                <div className="p-4 bg-gray-100 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-1">{item.description}</p>
                  <div className="text-xl font-bold text-gray-900">{item.count}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {farmerCards.slice(2).map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 p-6 block"
          >
            <div className="flex items-start gap-4">
              <div className="p-4 bg-gray-100 rounded-full">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-1">{item.description}</p>
                <div className="text-xl font-bold text-gray-900">{item.count}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

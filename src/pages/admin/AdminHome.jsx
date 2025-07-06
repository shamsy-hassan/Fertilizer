import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { FaArrowUp, FaArrowDown, FaUsers, FaLeaf, FaMoneyCheckAlt, FaStore, FaShoppingCart, FaBoxOpen, FaHandHoldingUsd, FaFileAlt, FaUserFriends } from 'react-icons/fa';

const salesData = Array.from({ length: 7 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - (6 - i));
  const label = date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
  return {
    date: label,
    sales2025: Math.floor(Math.random() * 400) + 100,
    sales2024: Math.floor(Math.random() * 300) + 80,
  };
});

const overviewItems = [
  {
    title: 'User Analysis',
    count: '9,528',
    link: '/admin/users',
    icon: <FaUsers className="text-blue-500 text-3xl" />,
    growth: '+9.5%',
    description: 'Track system-wide user interactions and analytics.',
  },
  {
    title: 'Number of Farmers',
    count: '3,210',
    link: '/admin/farmers',
    icon: <FaUserFriends className="text-green-600 text-3xl" />,
    growth: '+2.3%',
    description: 'Registered farmers actively participating in the platform.',
  },
  {
    title: 'Crop Trend',
    count: 'Top: Maize',
    link: '/admin/crop-trend',
    icon: <FaLeaf className="text-green-600 text-3xl" />,
    growth: '+3.2%',
    description: 'Current top-performing crops and seasonal trends.',
  },
  {
    title: 'Loan Requests',
    count: '132 Pending',
    link: '/admin/loan-requests',
    icon: <FaMoneyCheckAlt className="text-yellow-600 text-3xl" />,
    growth: '+4.1%',
    description: 'Track pending and approved SACCO loan requests.',
  },
  {
    title: 'Available Markets',
    count: '67 Active',
    link: '/admin/markets',
    icon: <FaStore className="text-indigo-500 text-3xl" />,
    growth: '+1.2%',
    description: 'View and manage listed agricultural markets.',
  },
  {
    title: 'Orders',
    count: '1,240',
    link: '/admin/orders',
    icon: <FaShoppingCart className="text-orange-600 text-3xl" />,
    growth: '-0.8%',
    description: 'Track all active and completed customer orders.',
  },
  {
    title: 'Products',
    count: '312 Items',
    link: '/admin/products',
    icon: <FaBoxOpen className="text-purple-600 text-3xl" />,
    growth: '+6.0%',
    description: 'Total products listed for purchase on the platform.',
  },
  {
    title: 'SACCOs Available',
    count: '21',
    link: '/admin/saccos',
    icon: <FaHandHoldingUsd className="text-pink-600 text-3xl" />,
    growth: '+2.3%',
    description: 'Registered SACCOs offering financial services to farmers.',
  },
  {
    title: 'SACCO Requests',
    count: '12 Pending',
    link: '/admin/sacco-requests',
    icon: <FaFileAlt className="text-red-600 text-3xl" />,
    growth: '-1.0%',
    description: 'Pending requests from SACCOs waiting for approval.',
  },
];

const recentTransactions = [
  {
    time: '09.30 am',
    message: 'Payment received from John Doe of $386.90',
  },
  {
    time: '10.30 am',
    message: 'New sale recorded #ML-3467',
  },
];

const topProjects = [
  {
    product: 'Organic Fertilizer',
    category: 'Agricultural Inputs',
    progress: 78.5,
    status: 'Low',
    sales: '$3.9k',
  },
  {
    product: 'Hybrid Maize Seed',
    category: 'Seeds',
    progress: 63.2,
    status: 'Moderate',
    sales: '$2.6k',
  },
];

const recentActivities = [
  'Farmer John applied for a SACCO loan',
  'New product added: Organic Fertilizer',
  'SACCO request approved for Farmer Grace',
  'Market listing added: Nairobi Vegetable Market',
  'Order #1234 confirmed',
];

export default function AdminHome() {
  return (
    <div className="p-6 bg-gradient-to-r from-green-200 via-white to-green-50 min-h-screen space-y-10">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Sales & Marketing Overview</h3>
            <span className="text-gray-500">Sep 2025</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales2025" fill="#38bdf8" name="Sales" barSize={20} radius={[5, 5, 0, 0]} />
              <Bar dataKey="sales2024" fill="#34d399" name="Marketing" barSize={20} radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="w-full lg:w-72 space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-sm text-gray-500">Yearly Breakup</h4>
            <div className="text-2xl font-bold">$36,358</div>
            <div className="text-sm text-green-500 flex items-center gap-1">
              <FaArrowUp /> +9% last year
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-sm text-gray-500">Monthly Earnings</h4>
            <div className="text-2xl font-bold">$6,820</div>
            <div className="text-sm text-red-500 flex items-center gap-1">
              <FaArrowDown /> -9% last year
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {overviewItems.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 p-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-4 bg-gray-100 rounded-full">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-1">{item.description}</p>
                <div className="text-xl font-bold text-gray-900">{item.count}</div>
                <div className={`text-sm ${item.growth.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{item.growth}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
          <ul className="list-disc list-inside space-y-2">
            {recentActivities.map((activity, index) => (
              <li key={index} className="text-gray-700">{activity}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
          <ul className="space-y-3">
            {recentTransactions.map((txn, i) => (
              <li key={i} className="text-sm text-gray-700">
                <span className="font-medium text-gray-900 mr-2">{txn.time}</span>
                {txn.message}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Top Products</h3>
          <span className="text-sm text-gray-500">March 2025</span>
        </div>
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="text-gray-600">
              <th className="pb-2">Product</th>
              <th className="pb-2">Progress</th>
              <th className="pb-2">Status</th>
              <th className="pb-2">Sales</th>
            </tr>
          </thead>
          <tbody>
            {topProjects.map((item, index) => (
              <tr key={index} className="border-t text-gray-800">
                <td className="py-2">
                  <div className="font-medium">{item.product}</div>
                  <div className="text-xs text-gray-500">{item.category}</div>
                </td>
                <td className="py-2">{item.progress}%</td>
                <td className="py-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${item.status === 'Low' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{item.status}</span>
                </td>
                <td className="py-2">{item.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

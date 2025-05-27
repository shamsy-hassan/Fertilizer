import { useState } from 'react';

export default function SaccoPlatform() {
  const [activeTab, setActiveTab] = useState('info');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanPurpose, setLoanPurpose] = useState('');
  const [loanStatus, setLoanStatus] = useState(null);

  const handleLoanApplication = (e) => {
    e.preventDefault();
    setLoanStatus('pending');
    setLoanAmount('');
    setLoanPurpose('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-6 text-center">SACCO Platform</h1>

      {/* Tabs */}
      <div className="flex justify-center mb-6 space-x-4 border-b">
        {['info', 'join', 'loan', 'status'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 font-semibold transition-colors duration-200 ${
              activeTab === tab
                ? 'border-b-4 border-green-600 text-green-700'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            {tab === 'info'
              ? 'SACCO Information'
              : tab === 'join'
              ? 'Join SACCO'
              : tab === 'loan'
              ? 'Loan Services'
              : 'My Loan Status'}
          </button>
        ))}
      </div>

      {/* Content */}
      <div>
        {activeTab === 'info' && (
          <div>
            <h2 className="text-xl font-semibold mb-2">About Our SACCO</h2>
            <p className="mb-4">
              Our Savings and Credit Cooperative Organization (SACCO) provides financial services
              to farmers at affordable rates. Benefits include:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Low-interest agricultural loans</li>
              <li>Flexible repayment plans</li>
              <li>Savings with dividends</li>
              <li>Insurance products</li>
            </ul>
          </div>
        )}

        {activeTab === 'join' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Join Our SACCO</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">ID Number</label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Initial Deposit (Minimum KSh 1000)</label>
                <input
                  type="number"
                  min="1000"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        )}

        {activeTab === 'loan' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Apply for Loan</h2>
            <form onSubmit={handleLoanApplication} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Loan Amount (KSh)</label>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Purpose</label>
                <textarea
                  value={loanPurpose}
                  onChange={(e) => setLoanPurpose(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows="3"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Repayment Period (Months)</label>
                <select
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select</option>
                  <option value="3">3 Months</option>
                  <option value="6">6 Months</option>
                  <option value="12">12 Months</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              >
                Submit Application
              </button>
            </form>
            {loanStatus && (
              <p className="mt-4 text-green-700 font-semibold">
                Your loan application is {loanStatus}. We'll contact you soon.
              </p>
            )}
          </div>
        )}

        {activeTab === 'status' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">My Loan Status</h2>
            <div className="border p-4 rounded shadow bg-green-50">
              <h3 className="text-lg font-bold mb-2">Loan #12345</h3>
              <p>Amount: KSh 10,000</p>
              <p>Status: Approved</p>
              <p>Disbursement Date: 2023-05-20</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import { useState } from 'react';

export default function SaccoPlatform() {
  const [joinStatus, setJoinStatus] = useState(null);
  const [hasJoined, setHasJoined] = useState(false);
  const [loanStatus, setLoanStatus] = useState(null);
  const [loanAmount, setLoanAmount] = useState('');
  const [loanPurpose, setLoanPurpose] = useState('');

  const handleJoinApplication = (e) => {
    e.preventDefault();
    setJoinStatus('submitted');
    setHasJoined(true);
  };

  const handleLoanApplication = (e) => {
    e.preventDefault();
    setLoanStatus('pending');
    setLoanAmount('');
    setLoanPurpose('');
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-20 text-slate-900">

      {/* Section 1: SACCO Information */}
      <section className="bg-green-50 rounded-xl p-8 shadow border border-green-100">
        <h2 className="text-3xl font-bold text-green-800 mb-4">What is a SACCO?</h2>
        <p className="text-gray-700 mb-4">
          A SACCO (Savings and Credit Cooperative Organization) helps farmers pool resources and access financial services
          such as loans, savings, and insurance. It strengthens community wealth and independence.
        </p>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Access low-interest farming loans</li>
          <li>Save and earn annual dividends</li>
          <li>Get insured against crop failure</li>
          <li>Benefit from collective financial strength</li>
        </ul>
      </section>

      {/* Section 2: Join SACCO */}
      <section className="bg-white rounded-xl p-8 shadow border border-gray-200">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Join a SACCO</h2>
        {!joinStatus ? (
          <form onSubmit={handleJoinApplication} className="space-y-6">
            <div>
              <label className="block font-semibold mb-1">Full Name</label>
              <input type="text" required className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block font-semibold mb-1">National ID</label>
              <input type="text" required className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Select SACCO</label>
              <select required className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-500">
                <option value="">-- Choose a SACCO --</option>
                <option value="greenFarmers">Green Farmers SACCO</option>
                <option value="harvestUnity">Harvest Unity SACCO</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">Initial Deposit (min KSh 1000)</label>
              <input type="number" min="1000" required className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-500" />
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Submit Application
            </button>
          </form>
        ) : (
          <div className="bg-green-100 p-6 rounded shadow border border-green-300">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Application Submitted!</h3>
            <p className="text-green-700">
              Your request to join the SACCO has been received. You'll be notified shortly after approval.
            </p>
          </div>
        )}
      </section>

      {/* Section 3: Apply for Loan */}
      <section className="bg-white rounded-xl p-8 shadow border border-gray-200">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Apply for a Loan</h2>
        {!hasJoined ? (
          <p className="text-red-600 font-semibold">
            You must join a SACCO before applying for a loan.
          </p>
        ) : (
          <form onSubmit={handleLoanApplication} className="space-y-6">
            <div>
              <label className="block font-semibold mb-1">Loan Amount (KSh)</label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Purpose</label>
              <textarea
                rows="3"
                value={loanPurpose}
                onChange={(e) => setLoanPurpose(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-500 resize-none"
              ></textarea>
            </div>
            <div>
              <label className="block font-semibold mb-1">Repayment Period</label>
              <select required className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-500">
                <option value="">-- Choose Period --</option>
                <option value="3">3 Months</option>
                <option value="6">6 Months</option>
                <option value="12">12 Months</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Submit Loan Request
            </button>
          </form>
        )}
        {loanStatus && (
          <p className="mt-4 text-green-700 font-semibold">
            Your loan application is <span className="capitalize">{loanStatus}</span>.
          </p>
        )}
      </section>

      {/* Section 4: My Loan Status */}
      <section className="bg-green-50 rounded-xl p-8 shadow border border-green-100">
        <h2 className="text-3xl font-bold text-green-800 mb-4">My Loan Status</h2>
        {hasJoined ? (
          <div className="bg-white p-6 rounded shadow border border-gray-200">
            <h3 className="text-lg font-bold mb-2 text-green-700">Loan ID: #00123</h3>
            <p><strong>Amount:</strong> KSh 10,000</p>
            <p><strong>Status:</strong> Approved</p>
            <p><strong>Disbursement Date:</strong> 2025-07-02</p>
          </div>
        ) : (
          <p className="text-red-600">You must join a SACCO to view loan progress.</p>
        )}
      </section>
    </div>
  );
}

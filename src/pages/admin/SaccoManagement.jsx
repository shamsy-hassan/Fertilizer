import React, { useEffect, useState } from 'react';

export default function SaccoManagement() {
  const [saccos, setSaccos] = useState([]);
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    // Simulated fetch
    setSaccos([
      { id: 1, name: 'Green Farmers SACCO', members: 24 },
      { id: 2, name: 'Harvest Unity SACCO', members: 16 }
    ]);

    setLoans([
      { id: 101, member: 'Ali Yusuf', amount: 15000, status: 'pending', sacco: 'Green Farmers' },
      { id: 102, member: 'Warda Ahmed', amount: 10000, status: 'approved', sacco: 'Harvest Unity' }
    ]);
  }, []);

  const approveLoan = (id) => {
    setLoans(prev =>
      prev.map(loan => loan.id === id ? { ...loan, status: 'approved' } : loan)
    );
    alert("Loan approved and members notified.");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-slate-900 space-y-12">
      <h1 className="text-4xl font-bold text-green-700 text-center">SACCO Management Panel</h1>

      {/* List of SACCOs */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">SACCOs</h2>
        <ul className="space-y-2">
          {saccos.map((sacco) => (
            <li key={sacco.id} className="bg-white p-4 border rounded shadow flex justify-between items-center">
              <div>
                <h3 className="font-bold">{sacco.name}</h3>
                <p>{sacco.members} members</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-1 rounded">View Members</button>
            </li>
          ))}
        </ul>
      </section>

      {/* Loan Applications */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Loan Applications</h2>
        <ul className="space-y-3">
          {loans.map((loan) => (
            <li key={loan.id} className="p-4 bg-white rounded shadow border">
              <p><strong>Member:</strong> {loan.member}</p>
              <p><strong>SACCO:</strong> {loan.sacco}</p>
              <p><strong>Amount:</strong> KSh {loan.amount}</p>
              <p><strong>Status:</strong> <span className={loan.status === 'approved' ? 'text-green-600' : 'text-orange-600'}>{loan.status}</span></p>
              {loan.status === 'pending' && (
                <button
                  onClick={() => approveLoan(loan.id)}
                  className="mt-2 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                >
                  Approve Loan
                </button>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

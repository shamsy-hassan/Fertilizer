import { useState, useEffect } from "react";

export default function LoanRequests() {
  const [loans, setLoans] = useState([]);
  const [statusFilter, setStatusFilter] = useState("pending");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/loans")
      .then((res) => res.json())
      .then((data) => {
        setLoans(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch loans:", err);
        setLoading(false);
      });
  }, []);

  const updateLoanStatus = (loanId, newStatus) => {
    fetch(`http://localhost:3000/loans/${loanId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((res) => res.json())
      .then((updatedLoan) => {
        setLoans((prev) =>
          prev.map((loan) => (loan.id === loanId ? updatedLoan : loan))
        );
      })
      .catch((err) => console.error("Failed to update loan:", err));
  };

  const filteredLoans = loans
    .filter((loan) => loan.status === statusFilter)
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // Most recent first

  const statusStyles = {
    pending: "bg-yellow-100 text-yellow-700",
    approved: "bg-blue-100 text-blue-700",
    rejected: "bg-red-100 text-red-700",
    disbursed: "bg-green-100 text-green-700",
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Loan Requests</h1>

      <div className="mb-6 flex justify-center">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
          <option value="disbursed">Disbursed</option>
        </select>
      </div>

      {loading ? (
        <div className="text-center text-gray-500">Loading loans...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-md">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Loan ID</th>
                <th className="px-4 py-2 text-left">Farmer</th>
                <th className="px-4 py-2 text-left">Amount (KSh)</th>
                <th className="px-4 py-2 text-left">Purpose</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLoans.length === 0 ? (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center py-6 text-gray-500 italic"
                  >
                    No loan requests found.
                  </td>
                </tr>
              ) : (
                filteredLoans.map((loan) => (
                  <tr
                    key={loan.id}
                    className="border-b border-gray-200 hover:bg-green-50"
                  >
                    <td className="px-4 py-3">{loan.id}</td>
                    <td className="px-4 py-3">{loan.farmer}</td>
                    <td className="px-4 py-3 font-semibold">{loan.amount}</td>
                    <td className="px-4 py-3">{loan.purpose}</td>
                    <td className="px-4 py-3">{loan.date}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                          statusStyles[loan.status] || "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {loan.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 space-x-2">
                      {loan.status === "pending" && (
                        <>
                          <button
                            onClick={() =>
                              updateLoanStatus(loan.id, "approved")
                            }
                            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() =>
                              updateLoanStatus(loan.id, "rejected")
                            }
                            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                          >
                            Reject
                          </button>
                        </>
                      )}
                      {loan.status === "approved" && (
                        <button
                          onClick={() =>
                            updateLoanStatus(loan.id, "disbursed")
                          }
                          className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
                        >
                          Mark Disbursed
                        </button>
                      )}
                      {(loan.status === "rejected" ||
                        loan.status === "disbursed") && (
                        <span className="text-gray-500 italic">No actions</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

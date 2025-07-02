import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Simulated login data (replace this with real login data or context when ready)
const loggedInFarmer = {
  name: "Ali Musa",
  phone: "0712345678",
};

export default function MyLoans() {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/loans?farmer=${encodeURIComponent(loggedInFarmer.name)}`)
      .then((res) => res.json())
      .then((data) => {
        setLoans(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">My Loan History</h1>

      <button
        onClick={() => navigate("/farmer-dashboard/sacco")}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Apply for Loan
      </button>

      {loading ? (
        <p>Loading your loans...</p>
      ) : loans.length === 0 ? (
        <p className="text-gray-500 italic">You have no loan history.</p>
      ) : (
        <table className="min-w-full border border-gray-300 rounded-md">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Amount (KSh)</th>
              <th className="px-4 py-2 text-left">Purpose</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {loans.map(({ amount, purpose, date, status }, i) => (
              <tr
                key={i}
                className="border-b border-gray-200 hover:bg-green-50"
              >
                <td className="px-4 py-3 font-semibold">{amount}</td>
                <td className="px-4 py-3">{purpose}</td>
                <td className="px-4 py-3">{date}</td>
                <td className="px-4 py-3 capitalize">{status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

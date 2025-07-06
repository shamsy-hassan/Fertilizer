import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MyMarket() {
  const [listings, setListings] = useState([]);
  const farmerId = 101;

  useEffect(() => {
    axios.get(`http://localhost:3000/marketListings?farmerId=${farmerId}`).then((res) => {
      setListings(res.data);
    });
  }, []);

  const handleApprove = (listingId) => {
    axios.patch(`http://localhost:3000/marketListings/${listingId}`, {
      status: "Approved"
    }).then(() => {
      axios.post("http://localhost:3000/notifications", {
        farmerId,
        cropId: listingId,
        message: "You approved the admin's request. Waiting for pickup details.",
        read: false
      });
      setListings((prev) =>
        prev.map((item) =>
          item.id === listingId ? { ...item, status: "Approved" } : item
        )
      );
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Market</h2>

      <Link to="/notifications" className="text-blue-600 underline">
        View Notifications
      </Link>

      <ul className="space-y-4 mt-6">
        {listings.map((item) => (
          <li key={item.id} className="border p-4 rounded">
            <p><strong>Crop:</strong> {item.crop}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <p><strong>Status:</strong> {item.status}</p>

            {item.status === "Requested" && (
              <button
                onClick={() => handleApprove(item.id)}
                className="bg-green-600 text-white px-4 py-2 mt-2"
              >
                Approve Request
              </button>
            )}

            {item.status === "Scheduled for Pickup" && (
              <p><strong>Pickup:</strong> {item.pickupDate} at {item.pickupLocation}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

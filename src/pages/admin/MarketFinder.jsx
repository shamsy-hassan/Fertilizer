import { useEffect, useState } from "react";
import axios from "axios";

export default function MarketFinder() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/marketListings").then((res) => {
      setListings(res.data);
    });
  }, []);

  const requestGoods = (listingId) => {
    axios.patch(`http://localhost:3000/marketListings/${listingId}`, {
      status: "Requested"
    }).then(() => {
      setListings((prev) =>
        prev.map((item) =>
          item.id === listingId ? { ...item, status: "Requested" } : item
        )
      );
    });
  };

  const setPickupDetails = (listingId) => {
    const location = prompt("Enter pickup location:");
    const date = prompt("Enter pickup date (YYYY-MM-DD):");

    axios.patch(`http://localhost:3000/marketListings/${listingId}`, {
      status: "Scheduled for Pickup",
      pickupLocation: location,
      pickupDate: date
    }).then(() => {
      setListings((prev) =>
        prev.map((item) =>
          item.id === listingId
            ? { ...item, status: "Scheduled for Pickup", pickupLocation: location, pickupDate: date }
            : item
        )
      );
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Market Coordination</h2>

      <ul className="space-y-4">
        {listings.map((item) => (
          <li key={item.id} className="border p-4 rounded">
            <p><strong>Farmer ID:</strong> {item.farmerId}</p>
            <p><strong>Crop:</strong> {item.crop}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <p><strong>Status:</strong> {item.status}</p>

            {item.status === "Available" && (
              <button
                onClick={() => requestGoods(item.id)}
                className="bg-blue-600 text-white px-4 py-2"
              >
                Request Goods
              </button>
            )}

            {item.status === "Approved" && (
              <button
                onClick={() => setPickupDetails(item.id)}
                className="bg-orange-600 text-white px-4 py-2 mt-2"
              >
                Set Pickup Details
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

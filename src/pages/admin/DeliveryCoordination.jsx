import { useState, useEffect } from "react";

export default function DeliveryCoordination() {
  const [deliveries, setDeliveries] = useState([]);
  const [statusFilter, setStatusFilter] = useState("scheduled");

  // FETCH deliveries from json-server
  useEffect(() => {
    fetch("http://localhost:3000/orders")
      .then((res) => res.json())
      .then((data) => setDeliveries(data))
      .catch((err) => console.error("Failed to fetch orders:", err));
  }, []);

  // FILTER based on status
  const filteredDeliveries =
    statusFilter === "all"
      ? deliveries
      : deliveries.filter((delivery) => delivery.status === statusFilter);

  // UPDATE delivery status and persist it in json-server
  const updateDeliveryStatus = (deliveryId, newStatus) => {
    const deliveryToUpdate = deliveries.find((d) => d.id === deliveryId);
    if (!deliveryToUpdate) return;

    const updatedDelivery = { ...deliveryToUpdate, status: newStatus };

    // Update on the server
    fetch(`http://localhost:3000/orders/${deliveryId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update status");
        setDeliveries((prev) =>
          prev.map((d) => (d.id === deliveryId ? updatedDelivery : d))
        );
      })
      .catch((err) => console.error("Update failed:", err));
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-r from-green-200 via-white to-green-50">
      <h1 className="text-3xl font-bold mb-6 text-center">Delivery Coordination</h1>

      <div className="mb-6 flex justify-center">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="all">All Deliveries</option>
          <option value="scheduled">Scheduled</option>
          <option value="in-transit">In Transit</option>
          <option value="delivered">Delivered</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-md">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Delivery ID</th>
              <th className="px-4 py-2 text-left">Order ID</th>
              <th className="px-4 py-2 text-left">Farmer</th>
              <th className="px-4 py-2 text-left">Address</th>
              <th className="px-4 py-2 text-left">Products</th>
              <th className="px-4 py-2 text-left">Scheduled Date</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDeliveries.length === 0 ? (
              <tr>
                <td
                  colSpan="8"
                  className="text-center py-6 text-gray-500 italic"
                >
                  No deliveries found.
                </td>
              </tr>
            ) : (
              filteredDeliveries.map((delivery) => (
                <tr
                  key={delivery.id}
                  className="border-b border-gray-200 hover:bg-green-50"
                >
                  <td className="px-4 py-3">{delivery.id}</td>
                  <td className="px-4 py-3">{delivery.id}</td>
                  <td className="px-4 py-3">{delivery.farmer}</td>
                  <td className="px-4 py-3">{delivery.address}</td>
                  <td className="px-4 py-3">{delivery.products?.join(", ")}</td>
                  <td className="px-4 py-3">{delivery.scheduledDate}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                        delivery.status === "scheduled"
                          ? "bg-yellow-100 text-yellow-700"
                          : delivery.status === "in-transit"
                          ? "bg-blue-100 text-blue-700"
                          : delivery.status === "delivered"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {delivery.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 space-x-2">
                    {delivery.status === "scheduled" && (
                      <button
                        onClick={() =>
                          updateDeliveryStatus(delivery.id, "in-transit")
                        }
                        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                      >
                        Dispatch
                      </button>
                    )}
                    {delivery.status === "in-transit" && (
                      <button
                        onClick={() =>
                          updateDeliveryStatus(delivery.id, "delivered")
                        }
                        className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
                      >
                        Mark Delivered
                      </button>
                    )}
                    {delivery.status === "delivered" && (
                      <span className="text-gray-500 italic">Completed</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

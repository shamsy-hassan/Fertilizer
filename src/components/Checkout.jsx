import { useState } from "react";

export default function Checkout({ cart, onSubmit }) {
  const [location, setLocation] = useState("");
  const [payment, setPayment] = useState("payAfter");
  const [submitted, setSubmitted] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate delivery date/time (e.g., 2 days from now)
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 2);
    const deliveryDateStr = deliveryDate.toLocaleString();

    const orderData = {
      deliveryLocation: location,
      paymentOption: payment,
      deliveryDate: deliveryDateStr,
    };

    onSubmit(orderData);

    setDeliveryInfo(deliveryDateStr);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-6 rounded shadow max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Order Confirmed!</h2>
        <p>Your order will be delivered to <strong>{location}</strong> on <strong>{deliveryInfo}</strong>.</p>
        <p>Payment option: <strong>{payment === "payAfter" ? "Pay After Delivery" : "Pay Before Delivery"}</strong></p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded shadow max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1" htmlFor="location">Delivery Location</label>
          <input
            id="location"
            type="text"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter your delivery location"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Payment Option</label>
          <div className="flex gap-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="payment"
                value="payAfter"
                checked={payment === "payAfter"}
                onChange={() => setPayment("payAfter")}
                className="mr-2"
              />
              Pay After Delivery
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="payment"
                value="payBefore"
                checked={payment === "payBefore"}
                onChange={() => setPayment("payBefore")}
                className="mr-2"
              />
              Pay Before Delivery
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 font-semibold"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
}

import { useState } from 'react';

export default function Checkout({ cart, onSubmit }) {
  const [deliveryInfo, setDeliveryInfo] = useState({
    location: '',
    phone: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...deliveryInfo,
      products: cart
    });
  };

  return (
    <div className="checkout-modal">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Delivery Location"
          value={deliveryInfo.location}
          onChange={(e) => setDeliveryInfo({...deliveryInfo, location: e.target.value})}
          required
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}
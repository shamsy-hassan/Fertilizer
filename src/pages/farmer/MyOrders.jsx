import { useEffect, useState } from 'react';

export default function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/orders?farmer=John%20Doe')
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-6">📦 My Orders</h1>

      {orders.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">Order #{order.id}</h3>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                  order.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-800'
                    : order.status === 'approved'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {order.status}
                </span>
              </div>
              <div className="text-sm text-gray-700">
                <p className="font-medium mb-1">Products:</p>
                <ul className="list-disc list-inside space-y-1">
                  {order.products.map(product => (
                    <li key={product.id}>
                      {product.name} <span className="text-xs text-gray-500">({product.category})</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

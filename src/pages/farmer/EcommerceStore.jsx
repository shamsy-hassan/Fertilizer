import { useState, useEffect } from "react";

export default function EcommerceStore() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderMessage, setOrderMessage] = useState(null);

  // Fetch categories once
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        if (data.length > 0) setActiveCategory(data[0].id);
      })
      .catch((err) => console.error("Failed to fetch categories:", err));
  }, []);

  // Fetch products when activeCategory changes
  useEffect(() => {
    if (!activeCategory) return;
    fetch(`http://localhost:3000/products?categoryId=${activeCategory}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, [activeCategory]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleCheckout = (orderData) => {
    // Calculate delivery date/time, e.g., +2 hours from now
    const deliveryDate = new Date(Date.now() + 2 * 60 * 60 * 1000);
    const deliveryDateString = deliveryDate.toLocaleString();

    const order = {
      ...orderData,
      customer: "John Doe", // <-- IMPORTANT: add customer name here
      products: cart,
      total: cart.reduce((sum, item) => sum + item.price, 0),
      status: "pending",
      deliveryDate: deliveryDateString,
    };

    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    })
      .then(() => {
        setCart([]);
        setCheckoutOpen(false);
        setOrderMessage(`Order placed! Your items will be delivered on ${deliveryDateString}`);
      })
      .catch((err) => console.error("Failed to place order:", err));
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-700">🛒 Farm Products Store</h1>

      {/* Category Tabs */}
      <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium border 
              ${
                activeCategory === category.id
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-green-600 font-bold">KSh {product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-3 inline-block w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Checkout Button or Modal */}
      {checkoutOpen ? (
        <CheckoutForm cart={cart} onSubmit={handleCheckout} onCancel={() => setCheckoutOpen(false)} />
      ) : (
        <div className="fixed bottom-4 right-4">
          <button
            onClick={() => setCheckoutOpen(true)}
            className="px-6 py-3 bg-green-700 text-white font-semibold rounded-full shadow-lg hover:bg-green-800"
            disabled={cart.length === 0}
          >
            Checkout ({cart.length})
          </button>
        </div>
      )}

      {/* Order message */}
      {orderMessage && (
        <div className="fixed bottom-20 right-4 bg-green-100 text-green-900 p-4 rounded shadow-lg max-w-xs">
          {orderMessage}
          <button className="ml-4 underline" onClick={() => setOrderMessage(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

// Checkout form component with delivery info
function CheckoutForm({ cart, onSubmit, onCancel }) {
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [paymentOption, setPaymentOption] = useState("Pay After Delivery");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!deliveryLocation) {
      alert("Please enter delivery location");
      return;
    }
    onSubmit({ deliveryLocation, paymentOption });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full space-y-4"
      >
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Delivery Details</h2>

        <div>
          <label className="block mb-1 font-medium" htmlFor="deliveryLocation">
            Delivery Location
          </label>
          <input
            id="deliveryLocation"
            type="text"
            value={deliveryLocation}
            onChange={(e) => setDeliveryLocation(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter delivery location"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Payment Option</label>
          <select
            value={paymentOption}
            onChange={(e) => setPaymentOption(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option>Pay After Delivery</option>
            <option>Pay Before Delivery</option>
          </select>
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
          >
            Submit Order
          </button>
        </div>
      </form>
    </div>
  );
}

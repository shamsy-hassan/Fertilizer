import { useState, useEffect } from "react";
import Checkout from "../../components/Checkout";

export default function EcommerceStore() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // Fetch categories once
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        if (data.length > 0) setActiveCategory(data[0].id); // Select first category by default
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
    const order = {
      ...orderData,
      products: cart,
      total: cart.reduce((sum, item) => sum + item.price, 0),
      status: "pending",
    };

    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    })
      .then(() => {
        setCart([]);
        setCheckoutOpen(false);
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
        <Checkout cart={cart} onSubmit={handleCheckout} />
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
    </div>
  );
}

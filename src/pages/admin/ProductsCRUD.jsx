import { useState, useEffect } from "react";

export default function ProductsCRUD() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    img: "",
  });
  const [editingProduct, setEditingProduct] = useState(null);

  // Fetch categories on mount
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        if (data.length > 0) {
          setActiveCategory(data[0].id);
        }
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // Fetch products for active category
  useEffect(() => {
    if (!activeCategory) return;

    fetch(`http://localhost:3000/products?categoryId=${activeCategory}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, [activeCategory]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddOrUpdateProduct = (e) => {
    e.preventDefault();
    const url = "http://localhost:3000/products";

    if (editingProduct) {
      fetch(`${url}/${editingProduct.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...editingProduct,
          ...newProduct,
          price: Number(newProduct.price),
          categoryId: activeCategory,
        }),
      })
        .then((res) => res.json())
        .then((updated) => {
          setProducts(products.map((p) => (p.id === updated.id ? updated : p)));
          setNewProduct({ name: "", price: "", description: "", img: "" });
          setEditingProduct(null);
        });
    } else {
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...newProduct,
          price: Number(newProduct.price),
          categoryId: activeCategory,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setProducts([...products, data]);
          setNewProduct({ name: "", price: "", description: "", img: "" });
        });
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setNewProduct({
      name: product.name,
      price: product.price,
      description: product.description,
      img: product.img,
    });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    })
      .then(() => setProducts(products.filter((p) => p.id !== id)))
      .catch((error) => console.error("Error deleting product:", error));
  };

  const filteredProducts = products.filter((product) =>
    [product.name, product.description]
      .some((field) => field.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section className="py-10 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-lg font-medium text-green-700">Product Management</p>
        <h1 className="text-4xl font-extrabold my-4">Manage Your Inventory</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Easily add, edit, and organize your agricultural products.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map(({ id, name }) => (
          <button
            key={id}
            onClick={() => {
              setActiveCategory(id);
              setEditingProduct(null);
              setNewProduct({ name: "", price: "", description: "", img: "" });
            }}
            className={`px-5 py-2 rounded-full font-medium transition ${
              activeCategory === id
                ? "bg-green-600 text-white shadow"
                : "bg-gray-200 text-gray-700 hover:bg-green-100"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="max-w-md mx-auto mb-8">
        <input
          type="search"
          placeholder="Search Products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Add / Edit Product Form */}
      <form
        onSubmit={handleAddOrUpdateProduct}
        className="mb-12 p-6 border border-gray-300 rounded-lg max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-semibold mb-6 text-green-700">
          {editingProduct ? "Edit Product" : "Add New Product"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newProduct.price}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
          />
        <input
  type="file"
  accept="image/*"
  onChange={(e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct((prev) => ({ ...prev, img: reader.result }));
      };
      reader.readAsDataURL(file); // Converts image to Base64
    }
  }}
  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
/>

          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newProduct.description}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
        >
          {editingProduct ? "Update Product" : "Add Product"}
        </button>
      </form>

      {/* Products Display */}
      <h3 className="text-3xl font-bold mb-6 text-center">
        {categories.find((c) => c.id === activeCategory)?.name} (
        {filteredProducts.length})
      </h3>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            No products found.
          </p>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
            >
              {product.img && (
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-48 w-full object-cover"
                />
              )}
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-green-700">
                    {product.name}
                  </h4>
                  <p className="text-gray-600 mb-3">{product.description}</p>
                  <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {categories.find((c) => c.id === product.categoryId)?.name}
                  </span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-700">
                    ${product.price}
                  </span>
                  <div className="space-x-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="px-3 py-1 border border-yellow-400 text-yellow-600 rounded hover:bg-yellow-50 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="px-3 py-1 border border-red-600 text-red-600 rounded hover:bg-red-50 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

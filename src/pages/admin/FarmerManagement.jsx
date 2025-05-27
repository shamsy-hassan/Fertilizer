import { useState, useEffect } from "react";

export default function FarmerManagement() {
  const [farmers, setFarmers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newFarmer, setNewFarmer] = useState({
    name: "",
    region: "",
    phone: "",
    joined: new Date().toISOString().split("T")[0],
  });
  const [editingFarmer, setEditingFarmer] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/farmers")
      .then((res) => res.json())
      .then((data) => setFarmers(data))
      .catch((err) => console.error("Failed to fetch farmers:", err));
  }, []);

  const filteredFarmers = farmers.filter(
    (farmer) =>
      farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      farmer.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      farmer.phone.includes(searchTerm)
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFarmer({ ...newFarmer, [name]: value });
  };

  const handleAddFarmer = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/farmers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFarmer),
    })
      .then((res) => res.json())
      .then((data) => {
        setFarmers([...farmers, data]);
        setNewFarmer({
          name: "",
          region: "",
          phone: "",
          joined: new Date().toISOString().split("T")[0],
        });
      })
      .catch((err) => console.error("Failed to add farmer:", err));
  };

  const handleEditClick = (farmer) => {
    setEditingFarmer(farmer);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingFarmer({ ...editingFarmer, [name]: value });
  };

  const handleUpdateFarmer = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/farmers/${editingFarmer.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editingFarmer),
    })
      .then((res) => res.json())
      .then((data) => {
        setFarmers(
          farmers.map((farmer) =>
            farmer.id === data.id ? data : farmer
          )
        );
        setEditingFarmer(null);
      })
      .catch((err) => console.error("Failed to update farmer:", err));
  };

  const handleDeleteFarmer = (id) => {
    fetch(`http://localhost:3000/farmers/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setFarmers(farmers.filter((farmer) => farmer.id !== id));
      })
      .catch((err) => console.error("Failed to delete farmer:", err));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <header className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 sm:mb-0">
          Farmer Management
        </h1>
        <input
          type="text"
          placeholder="Search farmers by name, region, or phone"
          className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      {/* Add Farmer Form */}
      <form onSubmit={handleAddFarmer} className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Add New Farmer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newFarmer.name}
            onChange={handleInputChange}
            className="px-4 py-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="text"
            name="region"
            placeholder="Region"
            value={newFarmer.region}
            onChange={handleInputChange}
            className="px-4 py-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={newFarmer.phone}
            onChange={handleInputChange}
            className="px-4 py-2 border border-gray-300 rounded-md"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Add Farmer
          </button>
        </div>
      </form>

      {/* Edit Farmer Form */}
      {editingFarmer && (
        <form onSubmit={handleUpdateFarmer} className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Edit Farmer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={editingFarmer.name}
              onChange={handleEditChange}
              className="px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="text"
              name="region"
              placeholder="Region"
              value={editingFarmer.region}
              onChange={handleEditChange}
              className="px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={editingFarmer.phone}
              onChange={handleEditChange}
              className="px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Update Farmer
            </button>
          </div>
        </form>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {["ID", "Name", "Region", "Phone", "Joined", "Actions"].map(
                (head) => (
                  <th
                    key={head}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {head}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredFarmers.map(({ id, name, region, phone, joined }) => (
              <tr key={id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                  {name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {region}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {phone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {joined}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm flex gap-3">
                  <button
                    onClick={() => handleEditClick({ id, name, region, phone, joined })}
                    className="px-3 py-1 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition"
                    type="button"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteFarmer(id)}
                    className="px-3 py-1 border border-red-600 text-red-600 rounded-md hover:bg-red-50 transition"
                    type="button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredFarmers.length === 0 && (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-6 text-gray-500 italic"
                >
                  No farmers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

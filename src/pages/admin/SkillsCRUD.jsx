import { useState, useEffect } from "react";

export default function SkillsCRUD() {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({
    title: "",
    category: "",
    description: "",
  });

  const [editingSkillId, setEditingSkillId] = useState(null);
  const [editingSkillData, setEditingSkillData] = useState({
    title: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = () => {
    fetch("http://localhost:3000/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Fetch skills error:", err));
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/skills", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSkill),
    })
      .then((res) => res.json())
      .then((data) => {
        setSkills((prev) => [...prev, data]);
        setNewSkill({ title: "", category: "", description: "" });
      })
      .catch((err) => console.error("Add skill error:", err));
  };

  const startEditing = (skill) => {
    setEditingSkillId(skill.id);
    setEditingSkillData({
      title: skill.title,
      category: skill.category,
      description: skill.description,
    });
  };

  const cancelEditing = () => {
    setEditingSkillId(null);
    setEditingSkillData({ title: "", category: "", description: "" });
  };

  const saveEdit = (id) => {
    fetch(`http://localhost:3000/skills/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingSkillData),
    })
      .then((res) => res.json())
      .then((updatedSkill) => {
        setSkills((prev) =>
          prev.map((skill) => (skill.id === id ? updatedSkill : skill))
        );
        cancelEditing();
      })
      .catch((err) => console.error("Update skill error:", err));
  };

  const deleteSkill = (id) => {
    if (!window.confirm("Are you sure you want to delete this skill?")) return;
    fetch(`http://localhost:3000/skills/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setSkills((prev) => prev.filter((skill) => skill.id !== id));
      })
      .catch((err) => console.error("Delete skill error:", err));
  };

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    acc[skill.category] = acc[skill.category] || [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12 text-slate-900">
      {/* Page Title */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-700">Skills Management</h1>
        <p className="mt-2 text-gray-600">
          Add, update, and organize agricultural skills by category.
        </p>
      </div>

      {/* Add New Skill Section */}
      <section className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Add New Skill</h2>
        <form onSubmit={handleAddSkill} className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Skill Title"
            value={newSkill.title}
            onChange={(e) => setNewSkill({ ...newSkill, title: e.target.value })}
            required
            className="border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Category (e.g. Crop, Animal, Soil)"
            value={newSkill.category}
            onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
            required
            className="border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-green-500"
          />
          <textarea
            placeholder="Skill Description"
            value={newSkill.description}
            onChange={(e) => setNewSkill({ ...newSkill, description: e.target.value })}
            required
            rows={4}
            className="md:col-span-2 border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-green-500 resize-none"
          />
          <button
            type="submit"
            className="md:col-span-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded shadow transition"
          >
            Add Skill
          </button>
        </form>
      </section>

      {/* Skills by Category Section */}
      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-6">Skills by Category</h2>

        {Object.keys(groupedSkills).length === 0 ? (
          <p className="text-gray-500">No skills added yet.</p>
        ) : (
          Object.entries(groupedSkills).map(([category, skills]) => (
            <div key={category} className="mb-10">
              <h3 className="text-xl font-bold text-green-600 mb-4 underline">{category}</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm rounded shadow-md">
                  <thead className="bg-green-100 text-left">
                    <tr>
                      <th className="p-3 border">Title</th>
                      <th className="p-3 border">Description</th>
                      <th className="p-3 border text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {skills.map((skill) => (
                      <tr key={skill.id} className="hover:bg-green-50">
                        {editingSkillId === skill.id ? (
                          <>
                            <td className="border p-2">
                              <input
                                value={editingSkillData.title}
                                onChange={(e) =>
                                  setEditingSkillData({ ...editingSkillData, title: e.target.value })
                                }
                                className="w-full px-2 py-1 border rounded"
                              />
                            </td>
                            <td className="border p-2">
                              <textarea
                                rows={3}
                                value={editingSkillData.description}
                                onChange={(e) =>
                                  setEditingSkillData({
                                    ...editingSkillData,
                                    description: e.target.value,
                                  })
                                }
                                className="w-full px-2 py-1 border rounded resize-none"
                              />
                            </td>
                            <td className="border p-2 text-center space-x-2">
                              <button
                                onClick={() => saveEdit(skill.id)}
                                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                              >
                                Save
                              </button>
                              <button
                                onClick={cancelEditing}
                                className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
                              >
                                Cancel
                              </button>
                            </td>
                          </>
                        ) : (
                          <>
                            <td className="border p-3">{skill.title}</td>
                            <td className="border p-3">{skill.description}</td>
                            <td className="border p-3 text-center space-x-2">
                              <button
                                onClick={() => startEditing(skill)}
                                className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => deleteSkill(skill.id)}
                                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                              >
                                Delete
                              </button>
                            </td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

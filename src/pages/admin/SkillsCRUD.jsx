import { useState, useEffect } from "react";

export default function SkillsCRUD() {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({
    title: "",
    category: "",
    description: "",
  });

  // Track editing skill id and form
  const [editingSkillId, setEditingSkillId] = useState(null);
  const [editingSkillData, setEditingSkillData] = useState({
    title: "",
    category: "",
    description: "",
  });

  // Fetch all skills on component mount
  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = () => {
    fetch("http://localhost:3000/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Fetch skills error:", err));
  };

  // Add new skill
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

  // Start editing a skill
  const startEditing = (skill) => {
    setEditingSkillId(skill.id);
    setEditingSkillData({
      title: skill.title,
      category: skill.category,
      description: skill.description,
    });
  };

  // Cancel editing
  const cancelEditing = () => {
    setEditingSkillId(null);
    setEditingSkillData({ title: "", category: "", description: "" });
  };

  // Save edited skill
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

  // Delete skill
  const deleteSkill = (id) => {
    if (!window.confirm("Are you sure you want to delete this skill? This action cannot be undone.")) {
      return;
    }
    fetch(`http://localhost:3000/skills/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setSkills((prev) => prev.filter((skill) => skill.id !== id));
      })
      .catch((err) => console.error("Delete skill error:", err));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Manage Skills</h1>

      {/* Add Skill Form */}
      <form onSubmit={handleAddSkill} className="space-y-4 mb-8">
        <input
          type="text"
          placeholder="Title"
          value={newSkill.title}
          onChange={(e) => setNewSkill({ ...newSkill, title: e.target.value })}
          required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          placeholder="Category"
          value={newSkill.category}
          onChange={(e) =>
            setNewSkill({ ...newSkill, category: e.target.value })
          }
          required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <textarea
          placeholder="Description"
          value={newSkill.description}
          onChange={(e) =>
            setNewSkill({ ...newSkill, description: e.target.value })
          }
          required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
          rows={4}
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Add Skill
        </button>
      </form>

      {/* Skills Table */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Existing Skills</h2>
        {skills.length === 0 ? (
          <p className="text-gray-600">No skills added yet</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-300">
              <thead className="bg-green-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Title
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Category
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Description
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {skills.map((skill) => (
                  <tr key={skill.id} className="hover:bg-green-50">
                    {editingSkillId === skill.id ? (
                      <>
                        <td className="border border-gray-300 px-4 py-2">
                          <input
                            type="text"
                            value={editingSkillData.title}
                            onChange={(e) =>
                              setEditingSkillData((prev) => ({
                                ...prev,
                                title: e.target.value,
                              }))
                            }
                            className="w-full border border-gray-300 rounded px-2 py-1"
                          />
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <input
                            type="text"
                            value={editingSkillData.category}
                            onChange={(e) =>
                              setEditingSkillData((prev) => ({
                                ...prev,
                                category: e.target.value,
                              }))
                            }
                            className="w-full border border-gray-300 rounded px-2 py-1"
                          />
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <textarea
                            value={editingSkillData.description}
                            onChange={(e) =>
                              setEditingSkillData((prev) => ({
                                ...prev,
                                description: e.target.value,
                              }))
                            }
                            className="w-full border border-gray-300 rounded px-2 py-1 resize-none"
                            rows={3}
                          />
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center space-x-2">
                          <button
                            onClick={() => saveEdit(skill.id)}
                            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                          >
                            Save
                          </button>
                          <button
                            onClick={cancelEditing}
                            className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500 transition"
                          >
                            Cancel
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="border border-gray-300 px-4 py-2">
                          {skill.title}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {skill.category}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {skill.description}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center space-x-2">
                          <button
                            onClick={() => startEditing(skill)}
                            className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteSkill(skill.id)}
                            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
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
        )}
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react'

export default function SkillCenter() {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [expandedSkillIds, setExpandedSkillIds] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/skills')
      .then(res => res.json())
      .then(data => {
        setSkills(data)
        setLoading(false)
      })
  }, [])

  const filteredSkills = categoryFilter === 'all'
    ? skills
    : skills.filter(skill => skill.category === categoryFilter)

  const toggleExpand = (id) => {
    setExpandedSkillIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Skill Center</h1>
        <p className="text-gray-500 mt-1">Explore agricultural skills by category</p>
      </div>

      <div className="mb-6 flex items-center gap-4">
        <label className="text-gray-700 font-medium">Filter by category:</label>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="all">All Categories</option>
          <option value="Planting">Planting</option>
          <option value="Protection">Protection</option>
          <option value="Soil">Soil</option>
          <option value="Harvesting">Harvesting</option>
        </select>
      </div>

      {loading ? (
        <div className="text-gray-600 text-lg">Loading skills...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map(skill => {
            const isExpanded = expandedSkillIds.includes(skill.id)
            return (
              <div
                key={skill.id}
                className={`bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition duration-300 ${
                  isExpanded ? 'h-auto' : 'h-auto'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-blue-700">{skill.title}</h3>
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                    {skill.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  {isExpanded ? skill.fullDescription || skill.description : skill.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="italic">Estimated: 30 min</span>
                  <button
                    onClick={() => toggleExpand(skill.id)}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    {isExpanded ? 'Show Less' : 'View Details →'}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

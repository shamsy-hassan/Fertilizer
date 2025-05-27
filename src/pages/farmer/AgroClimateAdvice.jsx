import { useState } from 'react'

export default function AgroClimateAdvice() {
  const [region, setRegion] = useState('')

  const regions = {
    northeastern: {
      name: "Northeastern (Arid - Low Rainfall)",
      crops: ["Drought-resistant maize", "Sorghum", "Millet", "Cowpeas"],
      practices: ["Dry farming techniques", "Mulching", "Early planting"],
      soil: ["Add organic matter", "Use cover crops", "Minimize tillage"],
      water: ["Water harvesting", "Drip irrigation", "Reduce evaporation"]
    },
    tana: {
      name: "Tana River (River/Irrigation Zone)",
      crops: ["Rice", "Tomatoes", "Onions", "Bananas"],
      practices: ["Irrigation scheduling", "Flood irrigation", "Crop rotation"],
      soil: ["Regular soil testing", "Balanced fertilization", "Salinity management"],
      water: ["Efficient irrigation", "Water recycling", "Canal maintenance"]
    },
    highRainfall: {
      name: "High-Rainfall Zones",
      crops: ["Tea", "Coffee", "Bananas", "Avocados"],
      practices: ["Terracing", "Drainage systems", "Shade management"],
      soil: ["Erosion control", "Acidity management", "Organic amendments"],
      water: ["Rainwater harvesting", "Drainage channels", "Water storage"]
    }
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-6">🌾 Agro-Climate Advice</h1>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3 text-gray-700">Select Your Region:</h2>
        <div className="flex flex-wrap gap-4">
          {Object.keys(regions).map((key) => (
            <button
              key={key}
              onClick={() => setRegion(key)}
              className={`px-4 py-2 rounded-md text-sm font-medium shadow-sm 
                ${region === key 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {regions[key].name.split('(')[0].trim()}
            </button>
          ))}
        </div>
      </div>

      {region && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">
            ✅ Recommendations for <span className="text-green-600">{regions[region].name}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AdviceCard title="Suitable Crops" items={regions[region].crops} />
            <AdviceCard title="Farming Practices" items={regions[region].practices} />
            <AdviceCard title="Soil Improvement" items={regions[region].soil} />
            <AdviceCard title="Water Management" items={regions[region].water} />
          </div>
        </div>
      )}
    </div>
  )
}

function AdviceCard({ title, items }) {
  return (
    <div className="bg-white border rounded-lg shadow p-5">
      <h3 className="text-lg font-bold text-green-700 mb-3">{title}</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

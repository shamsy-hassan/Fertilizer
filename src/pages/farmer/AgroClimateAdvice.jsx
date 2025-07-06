import { useState, useEffect } from 'react';

export default function AgroClimateAdvice() {
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
    },
    coastal: {
      name: "Coastal Region (Warm & Humid)",
      crops: ["Cashew nuts", "Coconuts", "Mangoes", "Pineapples"],
      practices: ["Salt-tolerant crops", "Windbreaks", "Disease monitoring"],
      soil: ["Manage salinity", "Add compost", "Proper drainage"],
      water: ["Irrigation canals", "Mulching to reduce evaporation", "Pond storage"]
    },
    riftValley: {
      name: "Rift Valley (Highlands & Valleys)",
      crops: ["Wheat", "Barley", "Maize", "Potatoes"],
      practices: ["Contour plowing", "Intercropping", "Timely planting"],
      soil: ["Deep tilling", "pH testing", "Crop rotation"],
      water: ["Rainwater tanks", "Dam building", "Irrigation planning"]
    },
    western: {
      name: "Western Kenya (Wet & Fertile)",
      crops: ["Sugarcane", "Sweet potatoes", "Beans", "Groundnuts"],
      practices: ["Organic farming", "Timely weeding", "Pest management"],
      soil: ["Nutrient balancing", "Mulching", "Minimum tillage"],
      water: ["Rain-fed farming", "Water pans", "Sprinkler systems"]
    }
  };

  const regionKeys = Object.keys(regions);
  const [region, setRegion] = useState('');

  // Default to the first region
  useEffect(() => {
    setRegion(regionKeys[0]);
  }, []);

  return (
    <div className="p-6 sm:p-12 max-w-6xl mx-auto text-slate-900 space-y-10">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-green-800 mb-4">🌾 Agro-Climate Advice</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get personalized farming advice based on your region's climate. Choose a region to explore suitable crops,
          best farming practices, soil management tips, and water solutions.
        </p>
      </header>

      {/* Region Selector */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">📍 Select Your Region</h2>
        <div className="flex flex-wrap gap-4">
          {regionKeys.map((key) => (
            <button
              key={key}
              onClick={() => setRegion(key)}
              className={`px-5 py-2 rounded-full text-sm font-medium shadow-md transition 
                ${region === key
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-green-100'}`}
            >
              {regions[key].name.split('(')[0].trim()}
            </button>
          ))}
        </div>
      </section>

      {/* Recommendations */}
      {region && (
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-green-700">
            ✅ Recommendations for <span className="text-green-800">{regions[region].name}</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <AdviceCard title="🌱 Suitable Crops" items={regions[region].crops} />
            <AdviceCard title="🛠️ Farming Practices" items={regions[region].practices} />
            <AdviceCard title="🧪 Soil Improvement" items={regions[region].soil} />
            <AdviceCard title="💧 Water Management" items={regions[region].water} />
          </div>
        </section>
      )}

      {/* Help Section */}
      <section className="mt-10 p-6 bg-green-50 border-l-4 border-green-600 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Need More Help?</h3>
        <p className="text-gray-700">
          Talk to an agronomist, get expert advice, or connect with your local agricultural extension office. 
        </p>
        <button className="mt-4 bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition">
          Contact Agricultural Expert
        </button>
      </section>
    </div>
  );
}

function AdviceCard({ title, items }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow p-5">
      <h3 className="text-lg font-bold text-green-700 mb-3">{title}</h3>
      <ul className="list-disc list-inside text-gray-800 space-y-1">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
  
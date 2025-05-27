export default function About() {
  return (
    <section className="py-16 bg-white sm:py-20 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">About Farmers Home</h1>
          <p className="mt-4 text-lg text-gray-600">
            Empowering farmers through technology and knowledge
          </p>
        </div>

        {/* Mission */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Our Mission</h2>
          <p className="mt-4 max-w-4xl mx-auto text-center text-gray-600 text-base">
            Farmers Home is dedicated to providing small-scale farmers with the tools, 
            knowledge, and resources they need to improve agricultural productivity 
            and sustainability.
          </p>
        </div>

        {/* Team */}
        <div className="mt-20">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Our Team</h2>
          <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 md:grid-cols-3">
            {[
              { name: 'Dr. Jane Mwangi', role: 'Agricultural Expert' },
              { name: 'John Otieno', role: 'Technology Lead' },
              { name: 'Mary Wambui', role: 'Farmer Relations' }
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center shadow-sm">
                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4"></div>
                <h3 className="text-xl font-medium text-gray-900">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Our Values</h2>
          <ul className="mt-6 max-w-3xl mx-auto space-y-4 text-base text-gray-700">
            <li>
              <strong className="text-gray-900">Sustainability:</strong> Promoting farming practices that protect the environment
            </li>
            <li>
              <strong className="text-gray-900">Empowerment:</strong> Equipping farmers with knowledge and tools
            </li>
            <li>
              <strong className="text-gray-900">Innovation:</strong> Leveraging technology to solve agricultural challenges
            </li>
            <li>
              <strong className="text-gray-900">Community:</strong> Building a supportive network of farmers
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

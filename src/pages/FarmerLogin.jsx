import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function FarmerLogin() {
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [region, setRegion] = useState('')
  const [isNewFarmer, setIsNewFarmer] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!phone) {
      alert('Please enter your phone number')
      return
    }

    if (isNewFarmer && (!name || !region)) {
      alert('Please fill in all fields')
      return
    }

    navigate('/farmer-dashboard')
  }

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            {isNewFarmer ? 'Farmer Registration' : 'Farmer Login'}
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Access your farming resources and tools
          </p>
        </div>

        <div className="relative max-w-md mx-auto mt-8 md:mt-16">
          <div className="overflow-hidden bg-white rounded-md shadow-md">
            <div className="px-4 py-6 sm:px-8 sm:py-7">
              <form onSubmit={handleSubmit}>
                <div className="space-y-5">

                  {isNewFarmer && (
                    <>
                      <div>
                        <label className="text-base font-medium text-gray-900">Full Name</label>
                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your full name"
                            className="block w-full py-4 pl-4 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-base font-medium text-gray-900">Region</label>
                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                          <select
                            value={region}
                            onChange={(e) => setRegion(e.target.value)}
                            className="block w-full py-4 pl-4 pr-4 text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                            required
                          >
                            <option value="">Select your region</option>
                            <option value="northeastern">Northeastern (Arid)</option>
                            <option value="tana">Tana River</option>
                            <option value="highRainfall">High-Rainfall Zones</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  <div>
                    <label className="text-base font-medium text-gray-900">Phone Number</label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0712345678"
                        className="block w-full py-4 pl-4 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                    >
                      {isNewFarmer ? 'Register' : 'Login'}
                    </button>
                  </div>

                  <div className="text-center">
                    <p className="text-base text-gray-600">
                      {isNewFarmer ? 'Already registered?' : 'New farmer?'}{' '}
                      <button
                        type="button"
                        onClick={() => setIsNewFarmer(!isNewFarmer)}
                        className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline"
                      >
                        {isNewFarmer ? 'Login here' : 'Register here'}
                      </button>
                    </p>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

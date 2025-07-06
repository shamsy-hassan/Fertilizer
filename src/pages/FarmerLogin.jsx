import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FarmerLogin() {
   const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [region, setRegion] = useState('');
  const [isNewFarmer, setIsNewFarmer] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phone) {
      alert('Please enter your phone number');
      return;
    }

    if (isNewFarmer && (!name || !region)) {
      alert('Please fill in all fields');
      return;
    }

    navigate('/farmer-dashboard');
  };

  return (
    <div className="lg:min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-r from-green-200 via-white to-green-50">
      <div className="grid lg:grid-cols-2 items-center gap-10 max-w-6xl w-full">
        {/* Left Side Text */}
        <div>
          <h1 className="lg:text-5xl text-4xl font-bold text-slate-900 !leading-tight">
            Seamless {isNewFarmer ? 'Registration' : 'Login'} for Exclusive Access
          </h1>
          <p className="text-[15px] mt-6 text-slate-600 leading-relaxed">
            Immerse yourself in a hassle-free {isNewFarmer ? 'sign up' : 'sign in'} journey with our intuitively designed form. Effortlessly access your account.
          </p>
          <p className="text-[15px] mt-6 lg:mt-12 text-slate-600">
            {isNewFarmer ? "Already registered?" : "Don't have an account?"}
            <button
              type="button"
              onClick={() => setIsNewFarmer(!isNewFarmer)}
              className="text-blue-600 font-medium hover:underline ml-1"
            >
              {isNewFarmer ? 'Login here' : 'Register here'}
            </button>
          </p>
        </div>

        {/* Right Side Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-md lg:ml-auto w-full bg-white p-6 rounded-md shadow-md"
        >
          <h2 className="text-slate-900 text-3xl font-semibold mb-8">
            {isNewFarmer ? 'Register' : 'Sign in'}
          </h2>

          <div className="space-y-6">
            {isNewFarmer && (
              <>
                <div>
                  <label className="text-sm text-slate-900 font-medium mb-2 block">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter full name"
                    className="bg-slate-100 w-full text-sm text-slate-900 px-4 py-3 rounded-md outline-0 border border-gray-200 focus:border-blue-600 focus:bg-transparent"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-900 font-medium mb-2 block">Region</label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    required
                    className="bg-slate-100 w-full text-sm text-slate-900 px-4 py-3 rounded-md outline-0 border border-gray-200 focus:border-blue-600 focus:bg-transparent"
                  >
                    <option value="">Select your region</option>
                    <option value="northeastern">Northeastern (Arid)</option>
                    <option value="tana">Tana River</option>
                    <option value="highRainfall">High-Rainfall Zones</option>
                  </select>
                </div>
              </>
            )}

            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder="Enter user name"
                    className="w-full text-sm text-slate-900 border border-slate-300 pl-4 pr-10 py-3 rounded-lg outline-green-600 bg-green-50 focus:bg-white"
                  />
            </div>


            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="Enter Phone Number"
                 className="w-full text-sm text-slate-900 border border-slate-300 pl-4 pr-10 py-3 rounded-lg outline-green-600 bg-green-50 focus:bg-white"
                  />
            </div>

            
            <div className="!mt-12">
              <button
                type="submit"
                className="w-full shadow-xl py-2.5 px-4 text-[15px] font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                {isNewFarmer ? 'Register' : 'Log in'}
              </button>
            </div>

           
           
            
          </div>
        </form>
      </div>
    </div>
  );
}

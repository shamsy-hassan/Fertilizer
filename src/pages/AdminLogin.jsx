import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (username === 'admin' && password === 'admin123') {
      navigate('/admin-dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-200 via-white to-green-50">
      <div className="py-6 px-4">
        <div className="grid lg:grid-cols-2 items-center gap-6 max-w-6xl w-full">
          {/* Login Form */}
          <div className="border border-green-200 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.1)] bg-white max-lg:mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="mb-12">
                <h1 className="text-green-900 text-3xl font-semibold">Admin Login</h1>
                <p className="text-slate-600 text-[15px] mt-6 leading-relaxed">
                  Sign in as admin to manage all operations in the Farmers Home system.
                </p>
              </div>

              {error && (
                <div className="text-red-600 text-sm font-medium text-center">{error}</div>
              )}

              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">Username</label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder="Enter user name"
                    className="w-full text-sm text-slate-900 border border-slate-300 pl-4 pr-10 py-3 rounded-lg outline-green-600 bg-green-50 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter password"
                    className="w-full text-sm text-slate-900 border border-slate-300 pl-4 pr-10 py-3 rounded-lg outline-green-600 bg-green-50 focus:bg-white"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-slate-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm text-slate-900">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="text-green-600 hover:underline font-medium">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className="!mt-12">
                <button
                  type="submit"
                  className="w-full shadow-xl py-2.5 px-4 text-[15px] font-medium tracking-wide rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>

          {/* Side Image */}
          <div className="max-lg:mt-8">
            <img
              src="https://readymadeui.com/login-image.webp"
              className="w-full aspect-[71/50] max-lg:w-4/5 mx-auto block object-cover rounded-lg shadow"
              alt="admin login"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

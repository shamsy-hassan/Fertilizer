import { Link } from 'react-router-dom'
import { FaUserTie, FaUserShield } from 'react-icons/fa'

export default function WelcomePage() {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Welcome to Farmers Home</h1>
        <p>Your agricultural companion for better farming</p>
        <div className="auth-options">
          <Link to="/farmer-login" className="auth-btn farmer">
            <FaUserTie /> Continue as Farmer
          </Link>
          <Link to="/admin-login" className="auth-btn admin">
            <FaUserShield /> Continue as Admin
          </Link>
        </div>
      </div>
    </div>
  )
}
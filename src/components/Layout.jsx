import { Link, Outlet } from 'react-router-dom';
import '../App.css';
import logo from '../assets/logo.png'; 

export default function Layout() {
  return (
    <div>
      <nav className="navbar-container">
        
        {/* Left Links */}
        <div className="nav-left">
          <Link to="/" className="nav-link">Portfolio</Link>
          <Link to="/clients" className="nav-link">Clients</Link>
        </div>

        {/* Center Logo */}
        <div className="nav-center">
          <Link to="/">
            <img src={logo} alt="VT Photography" className="logo-img" />
          </Link>
        </div>

        {/* Right Links */}
        <div className="nav-right">
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/inquire" className="nav-link">Inquire</Link>
        </div>

      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
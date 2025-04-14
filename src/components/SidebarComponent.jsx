import { useState, useEffect, useRef } from "react";
import { FaBars, FaTachometerAlt, FaHome, FaBook, FaCog, FaEnvelope, FaChartPie, FaBell, FaCalendarAlt, FaClipboard, FaTh, FaUsers, FaUserCog, FaUserCircle } from "react-icons/fa";
import logo from "../assets/img/logo.png";
import logoSmall from "../assets/img/logo-small.png";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const roleDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setShowRoleDropdown(false);
    setShowProfileDropdown(false);
  };

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const toggleRoleDropdown = () => {
    setShowRoleDropdown(!showRoleDropdown);
    setShowProfileDropdown(false);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
    setShowRoleDropdown(false);
  };

  const handleClickOutside = (event) => {
    if (roleDropdownRef.current && !roleDropdownRef.current.contains(event.target)) {
      setShowRoleDropdown(false);
    }
    if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
      setShowProfileDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={`sidebar ${isSidebarExpanded ? "expanded" : "collapsed"}`}
        style={{
          width: isSidebarExpanded ? "250px" : "70px",
        }}
      >
        {/* Logo */}
        {!isSidebarExpanded ? (
          <div className="sidebar-logo-collapsed">
            <img src={logoSmall} alt="Small Logo" />
          </div>
        ) : (
          <a href="/" className="sidebar-logo-expanded">
            <img src={logo} alt="Campus Digital Logo" />
          </a>
        )}

        {/* Menu Items */}
        <ul className="sidebar-menu">
          {[
            { icon: <FaTachometerAlt />, label: "Dashboard", menu: "dashboard" },
            { icon: <FaHome />, label: "Menu 1", menu: "menu-1" },
            { icon: <FaBook />, label: "Menu 2", menu: "menu-2" },
            { icon: <FaCog />, label: "Menu 3", menu: "menu-3" },
            { icon: <FaEnvelope />, label: "Menu 4", menu: "menu-4" },
            { icon: <FaChartPie />, label: "Menu 5", menu: "menu-5" },
            { icon: <FaBell />, label: "Menu 6", menu: "menu-6" },
            { icon: <FaCalendarAlt />, label: "Menu 7", menu: "menu-7" },
            { icon: <FaClipboard />, label: "Menu 8", menu: "menu-8" },
          ].map((item) => (
            <li key={item.menu} className="nav-item">
              <a href={`/${item.menu}`} className={`nav-link ${activeMenu === item.menu ? "active" : ""}`} onClick={() => handleMenuClick(item.menu)}>
                <span className="nav-icon">{item.icon}</span>
                {isSidebarExpanded && <span className="nav-label">{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div
        className="main-content"
        style={{
          marginLeft: isSidebarExpanded ? "250px" : "70px",
        }}
      >
        {/* Header */}
        <div className="header-controls">
          <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
            <FaBars />
          </button>

          <div className="role-dropdown-container fixed" ref={roleDropdownRef} onMouseLeave={() => setShowRoleDropdown(false)}>
            <button className="role-dropdown-toggle" onClick={toggleRoleDropdown}>
              <FaTh />
            </button>

            {showRoleDropdown && (
              <div className="role-dropdown-menu">
                <a href="/datarole" className={`dropdown-item ${activeMenu === "datarole" ? "active" : ""}`} onClick={() => handleMenuClick("datarole")}>
                  <FaUsers className="me-2" />
                  Data Role
                </a>
                <a href="/rolemanagement" className={`dropdown-item ${activeMenu === "role-management" ? "active" : ""}`} onClick={() => handleMenuClick("rolemanagement")}>
                  <FaUserCog className="me-2" />
                  Role Management
                </a>
              </div>
            )}
          </div>

          <div className="profile-dropdown-container fixed" ref={profileDropdownRef} onMouseLeave={() => setShowProfileDropdown(false)}>
            <button className="profile-dropdown-toggle" onClick={toggleProfileDropdown}>
              <FaUserCircle />
            </button>

            {showProfileDropdown && (
              <div className="profile-dropdown-menu">
                <a href="/505" className="dropdown-item">
                  Profil
                </a>
                <a href="/login" className="dropdown-item">
                  Keluar
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style>{`
        /* Sidebar */
        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          background: #3a0057;
          box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          transition: width 0.3s;
          overflow-y: auto;
          color: white;
        }

        .sidebar-logo-expanded,
        .sidebar-logo-collapsed {
          padding: 20px;
          display: flex;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
        }

        .sidebar-logo-expanded img {
          height: 50px;
        }

        .sidebar-logo-collapsed img {
          width: 40px;
          height: 40px;
        }

        /* Sidebar Menu */
        .sidebar-menu {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .nav-item {
          margin: 5px 10px;
        }

        .nav-link {
          display: flex;
          align-items: center;
          padding: 10px 15px;
          border-radius: 8px;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: all 0.3s;
        }

        .nav-link:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .nav-link.active {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }

        .nav-icon {
          font-size: 1.1rem;
          min-width: 24px;
          display: flex;
          justify-content: center;
        }

        .nav-label {
          margin-left: 10px;
        }

        /* Main Content */

        /* Header Controls */
        .header-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: calc(200% - 250px); /* Adjust width to exclude sidebar */
          padding: 35px 20px;
          position: fixed;
          top: 0;
          left: 250px; /* Start after the sidebar */
          background: white;
          z-index: 1100;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          transition: left 0.3s, width 0.3s;
        }

        .sidebar.collapsed + .main-content .header-controls {
          left: 70px; /* Adjust for collapsed sidebar */
          width: calc(100% - 70px);
        }

        .role-dropdown-container,
        .profile-dropdown-container {
          position: relative;
        }

        .role-dropdown-container.fixed,
        .profile-dropdown-container.fixed {
          position: fixed;
          top: 20px;
        }

        .role-dropdown-container.fixed {
          right: 70px;
        }

        .profile-dropdown-container.fixed {
          right: 20px;
        }

        /* Sidebar Toggle Button */
        .sidebar-toggle-btn {
          position: fixed;
          top: 20px;
          left: ${isSidebarExpanded ? "270px" : "100px"}; /* Adjust position dynamically */
          z-index: 1100;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: white;
          color: #6f42c1;
          border: none;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
        }

        .sidebar-toggle-btn:hover {
          background: #6f42c1;
          color: white;
          transform: scale(1.1);
        }

        /* Role Dropdown */
        .role-dropdown-container {
          position: relative;
        }

        .role-dropdown-toggle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background: white;
          color: #6f42c1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
        }

        .role-dropdown-toggle:hover {
          background: #6f42c1;
          color: white;
        }

        .role-dropdown-menu {
          position: absolute;
          right: 0;
          top: 100%;
          background: white;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          min-width: 200px;
          overflow: hidden;
          z-index: 1000;
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          padding: 10px 15px;
          color: #495057;
          text-decoration: none;
          transition: all 0.2s;
        }

        .dropdown-item:hover {
          background: #f8f9fa;
          color: #6f42c1;
        }

        .dropdown-item.active {
          background: #3a0057;
          color: white;
        }

        /* Profile Dropdown */
        .profile-dropdown-container {
          position: relative;
        }

        .profile-dropdown-toggle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background: white;
          color: #6f42c1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
        }

        .profile-dropdown-toggle:hover {
          background: #6f42c1;
          color: white;
        }

        .profile-dropdown-menu {
          position: absolute;
          right: 0;
          top: 100%;
          background: white;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          min-width: 150px;
          overflow: hidden;
          z-index: 1000;
        }

        .profile-dropdown-menu .dropdown-item {
          display: flex;
          align-items: center;
          padding: 10px 15px;
          color: #495057;
          text-decoration: none;
          transition: all 0.2s;
        }

        .profile-dropdown-menu .dropdown-item:hover {
          background: #f8f9fa;
          color: #6f42c1;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;

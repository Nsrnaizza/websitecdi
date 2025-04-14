import { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { FaChevronDown, FaUser, FaUserPlus, FaBars } from "react-icons/fa";
import logo from "../assets/img/image.png";

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const changeBackground = () => {
    setScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className={`py-2 ${scrolled ? "navbar-scrolled" : "navbar-transparent"}`}
      style={{
        transition: "all 0.3s ease",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.85)",
        boxShadow: scrolled ? "0 2px 15px rgba(0, 0, 0, 0.1)" : "none",
        borderBottom: scrolled ? "none" : "1px solid rgba(0, 0, 0, 0.05)",
      }}
    >
      <Container>
        {/* Logo lebih proporsional */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img src={logo} alt="logo" width="90" height="auto" className="d-inline-block" />
        </Navbar.Brand>

        {/* Toggle Button (Mobile) */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
          className="border-0"
        >
          <FaBars size={22} />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto align-items-center gap-3">
            <NavLink to="/" className="nav-link">Beranda</NavLink>

            {/* Dropdown Tentang Kami */}
            <NavDropdown title="Tentang Kami" id="tentang-kami-dropdown">
              <NavDropdown.Item as={NavLink} to="/tentangkami/sejarah">Sejarah</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/tentangkami/visi-misi">Visi & Misi</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/tentangkami/budaya-kerja">Budaya Kerja</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/tentangkami/fasilitas-keunggulan">Fasilitas & Keunggulan</NavDropdown.Item>
            </NavDropdown>

            <NavLink to="/cabang" className="nav-link">Cabang</NavLink>
            <NavLink to="/galery" className="nav-link">Galeri</NavLink>

            {/* Dropdown Program */}
            <NavDropdown title="Program" id="program-dropdown">
              <NavDropdown.Item as={NavLink} to="/program-reguler">Reguler</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/program-corporate">Corporate</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/program-profesi">Profesi</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/program-sertifikasi">Sertifikasi</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/program/magang/internprogram">Magang/Intern</NavDropdown.Item>
            </NavDropdown>

            <NavLink to="/afiliasi" className="nav-link">Afiliasi</NavLink>
            <NavLink to="/artikel" className="nav-link">Artikel</NavLink>

            {/* Dropdown Hubungi Kami */}
            <NavDropdown title="Hubungi Kami" id="hubungi-kami-dropdown">
              <NavDropdown.Item as={NavLink} to="/hubungikami/investasipendidikan">Investasi Pendidikan</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/hubungikami/informasipendaftaran">Informasi Pendaftaran</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Tombol Masuk & Daftar */}
          <div className="d-flex flex-column flex-lg-row align-items-center ms-lg-3">
            <button
              className="btn btn-outline-primary btn-sm me-lg-2 d-flex align-items-center my-1 my-lg-0"
              onClick={() => {
                navigate("/login");
                setExpanded(false);
              }}
              style={{
                borderRadius: "20px",
                padding: "5px 15px",
                borderWidth: "1.5px",
              }}
            >
              <FaUser className="me-1" size={12} />
              <span>Masuk</span>
            </button>
            <button
              className="btn btn-primary btn-sm d-flex align-items-center my-1 my-lg-0"
              onClick={() => {
                navigate("/register");
                setExpanded(false);
              }}
              style={{
                borderRadius: "20px",
                padding: "5px 15px",
                backgroundColor: "#330369",
                borderColor: "#330369",
              }}
            >
              <FaUserPlus className="me-1" size={12} />
              <span>Daftar</span>
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

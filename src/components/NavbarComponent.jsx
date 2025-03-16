import { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/img/image.png";
import { NavLink, useNavigate } from "react-router-dom"; // Pastikan hanya pakai useNavigate

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  const navigate = useNavigate(); // Inisialisasi navigate

  const changeBackgroundColor = () => {
    setChangeColor(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroundColor);
    return () => window.removeEventListener("scroll", changeBackgroundColor);
  }, []);

  return (
    <Navbar expand="lg" className={`navbar fixed-top ${changeColor ? "color-active" : "bg-white shadow-sm"}`}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" width="120" height="auto" className="me-2" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            <NavLink to="/" className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}>
              Beranda
            </NavLink>

            {/* Dropdown Tentang Kami */}
            <NavDropdown title="Tentang Kami" id="tentang-kami-dropdown">
              <NavDropdown.Item as={NavLink} to="/tentangkami/sejarah">Sejarah</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/tentangkami/visi-misi">Visi & Misi</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/tentangkami/budaya-kerja">Budaya Kerja</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/tentangkami/fasilitas-keunggulan">Fasilitas & Keunggulan</NavDropdown.Item>
            </NavDropdown>

            <NavLink to="/cabang" className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}>
              Cabang
            </NavLink>

            <NavLink to="/galery" className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}>
              Galeri
            </NavLink>

            {/* Dropdown Program */}
            <NavDropdown title="Program" id="program-dropdown">
              <NavDropdown.Item as={NavLink} to="/program-reguler">Reguler</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/program-corporate">Corporate</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/program-profesi">Profesi</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/program-sertifikasi">Sertifikasi</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/program/magang/internprogram">Magang/Intern Program</NavDropdown.Item>
            </NavDropdown>

            <NavLink to="/afiliasi" className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}>
              Afiliasi
            </NavLink>

            <NavLink to="/artikel" className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}>
              Artikel
            </NavLink>

            {/* Dropdown Hubungi Kami */}
            <NavDropdown title="Hubungi Kami" id="hubungi-kami-dropdown">
              <NavDropdown.Item as={NavLink} to="/hubungikami/investasipendidikan">Investasi Pendidikan</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/hubungikami/informasipendaftaran">Informasi Pendaftaran</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Tombol Masuk & Daftar */}
          <div className="d-flex text-center">
            <button 
              className="btn me-2" 
              style={{ borderColor: "#dcc8f4", color: "#330369" }} 
              onClick={() => navigate("/login")}
            >
              Masuk
            </button>
            <button 
              className="btn" 
              style={{ backgroundColor: "#dcc8f4", borderColor: "#dcc8f4", color: "#330369" }} 
              onClick={() => navigate("/register")}
            >
              Daftar
            </button>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

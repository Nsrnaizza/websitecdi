import "../../dist/css/main.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NetworkComponent = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  const toggleCollapse = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="page-program">
      {/* Hero Section */}
      <div className="hero-section2 d-flex align-items-center" >
        <div className="container">
          <h1 className="mb-3 text-start">Network, Infrastruktur, IOT and Service</h1>
          <div className="flex">
            
          </div>
          <p className="badge bg-white text-body text-left badge-left mb-3">Sertifikasi</p>
          <nav className="mt-2">
            <ol className="breadcrumb py-2 px-3 rounded-5 text-dark text">
              <li>
                <a href="/">Beranda</a>
              </li>
              <li>
                <span> / </span>
                <a href="/program-sertifikasi">Sertifikasi</a>
              </li>
              <li>
                <span> / </span>
                Network, Infrastruktur, IOT and Service
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Pelatihan Info */}
      <div className="container training-info bg-light-puple text-center p-4 rounded shadow mt-5">
        <h2>
          Pelatihan Cepat <span>7 Hari Langsung Ujian</span>
        </h2>
        <h3>
          Sertifikasi <b>Network, Infrastruktur, IOT and Service</b> BNSP
        </h3>
        <img className="bnsp-logo" src="https://campusdigital.id/assets/images/bnsp/logo_bnsp.png" alt="BNSP-LOGO" />
        <p>Program pembelajaran online via Zoom atau offline tatap muka untuk Anda yang membutuhkan sertifikat BNSP di bidang Network, Infrastruktur, IOT and Service.</p>
        <a href="#form-registration" className="btn-register">
          DAFTAR SEKARANG
        </a>
      </div>
      {/* Manfaat Digital Marketing */}
      <div className="benefits-section">
        <h3>
          Manfaat Pelatihan <span>Network, Infrastruktur, IOT and Service</span>
        </h3>
        <ul>
          <li>
            Skema Sertifikasi:
          </li>
          <li>1. Network Administrator Muda</li>
          <li>2. Network Administrator Madya</li>
          <li>3. Network Administator Utama</li>
          <li>4. Junior Technical Support</li>
          <li>5. Staff Operasi IT</li>
          <li>6. Ahli Cloud Computing</li>
          <li>7. System Integrator</li>
          <li>8. Network Security Analyst</li>
          <li>9. Digital Computer Technology Scientist</li>
          <li>10. Network Security Auditor</li>
          <li>11. Staff Operasi IT</li>
          <li>12.Teknisi Telepon Seluler Reparasi Perangkat Lunak Reakaya</li>
          <li>13.Teknisi Telepon Seluler Reparasi Perangkat Keras </li>
          <li>14. Clear OS Specialyst*</li>
          <li>15.Cisco and Microtik Sertification*</li>
        </ul>
      </div>
      
      {/* Form Pendaftaran */}
      <div className="registration-section">
        <h5>Form Pendaftaran</h5>
        <div className="form-wrapper">
          <form id="form-registration" method="post" action="/" onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
              <label htmlFor="nama_lengkap">Nama Lengkap</label>
              <input type="text" id="nama_lengkap" name="nama_lengkap" placeholder="Nama Lengkap" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="nama_panggilan">Instansi</label>
              <input type="text" id="nama_panggilan" name="nama_panggilan" placeholder="Instansi" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Email" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="nomor_hp">No HP / WhatsApp</label>
              <input type="tel" id="nomor_hp" name="nomor_hp" placeholder="No HP / WhatsApp" className="form-input" required />
            </div>
            <button type="submit" className="btn-submit">
              Daftar
            </button>
          </form>
          <img src="https://campusdigital.id/assets/images/illustration/customer-service.svg" alt="Customer Service" className="form-image" />
        </div>
      </div>
    </div>
  );
};

export default NetworkComponent;

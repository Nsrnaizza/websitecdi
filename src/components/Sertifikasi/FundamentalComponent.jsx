import "../../dist/css/main.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FundamentalComponent = () => {
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
          <h1 className="mb-3 text-start">Digital Marketing And IT Fundamental</h1>
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
                Digital Marketing And IT Fundamental
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
          Sertifikasi <b>Digital Marketing And IT Fundamental</b> BNSP
        </h3>
        <img className="bnsp-logo" src="https://campusdigital.id/assets/images/bnsp/logo_bnsp.png" alt="BNSP-LOGO" />
        <p>Program pembelajaran online via Zoom atau offline tatap muka untuk Anda yang membutuhkan sertifikat BNSP di bidang Digital Marketing And IT Fundamental.</p>
        <a href="#form-registration" className="btn-register">
          DAFTAR SEKARANG
        </a>
      </div>
      {/* Manfaat Digital Marketing */}
      <div className="benefits-section">
        <h3>
          Manfaat Pelatihan <span>Digital Marketing And IT Fundamental</span>
        </h3>
        <ul>
          <li>Skema Sertifikasi:</li>

          <li>1. Junior Web Programmer / Developer</li>
          <li>2. Junior Mobile Programmer</li>
          <li>3. Junior Mobile Computing</li>
          <li>4. Database Programmer</li>
          <li>5. System Analyst</li>
          <li>6. Big Data Scientist </li>
          <li>7. Junior Data Miner* </li>
          <li>8. Image Processing Specialyst*</li>
          <li>9. Junior Data Scientist</li>
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

export default FundamentalComponent;

import "../../dist/css/main.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

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
<section className="py-5 bg-light">
        <div className="container ">
          <motion.div 
            className="card border-0 shadow-sm p-4 p-md-5 text-center "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="row justify-content-center ">
              <div className="col-md-8">
                <h2 className="fw-bold mb-3">
                  Pelatihan Cepat <span className="text-danger">7 Hari Langsung Ujian</span>
                </h2>
                <h3 className="mb-4">
                  Sertifikasi <span className="fw-bold text-">Network, Infrastructure, IOT And Services</span> BNSP
                </h3>
                <img 
                  src="https://campusdigital.id/assets/images/bnsp/logo_bnsp.png" 
                  alt="BNSP-LOGO" 
                  className="img-fluid mb-4"
                  style={{ maxHeight: '100px' }}
                />
                <p className="lead mb-4" style={{ fontSize: '1rem' }}>
                Progam Pembelajaran Online Via Zoom Meet atau Offline Tatap Muka Untuk Anda Yang Membutuhkan Sertifikat BNSP di Bidang  Network, Infrastructure, IOT And Services
                </p>
                <motion.a 
                  href="#form-registration" 
                  className="btn btn-danger btn-lg px-4 py-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  DAFTAR SEKARANG
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Manfaat Digital Marketing */}
      <section className="py-5">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8 text-center mb-2">
        <h2 className="fw-bold mb-4 fs-7">
          Manfaat Pelatihan<span className="text-danger fs-7"> Network, Infrastruktur, IOT and Service</span>
        </h2>
        <p className="">
          Skema Sertifikasi:
        </p>
      </div>
    </div>
    
    <div className="row g-3">
      {[
        "Network Administrator Muda",
        "Network Administrator Madya",
        "Network Administator Utama",
        "Junior Technical Support",
        "Staff Operasi IT",
        "Ahli Cloud Computing",
        "System Integrator",
        "Network Security Analyst",
        "Digital Computer Technology Scientist",
        "Network Security Auditor",
        "Staff Operasi IT",
        "Teknisi Telepon Seluler Reparasi Perangkat Lunak Reakaya",
        "Teknisi Telepon Seluler Reparasi Perangkat Keras",
        "Clear OS Specialyst*",
        "Cisco and Microtik Sertification"
      ].map((item, index) => (
        <div className="col-md-6 col-lg-4" key={index}>
          <motion.div 
            className="card border-0 shadow-sm h-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="p-3">
              <div className="d-flex align-items-start">
                <div className="bg-primary bg-opacity-10 p-1 rounded me-2">
                  <i className="bi bi-check-circle-fill text-primary small"></i>
                </div>
                <p className="mb-0 small">{item}</p>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  </div>
</section>
      
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

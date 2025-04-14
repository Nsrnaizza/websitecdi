import "../../dist/css/main.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const PerkantoranComponent = () => {
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
      <div className="hero-section2 d-flex align-items-center">
        <div className="container">
          <h1 className="mb-3 text-start">Komputer Perkantoran</h1>
          <div className="flex"></div>
          <p className="badge bg-white text-body text-left badge-left mb-3">Reguler</p>
          <nav className="mt-2">
            <ol className="breadcrumb py-2 px-3 rounded-5 text-dark text">
              <li>
                <a href="/">Beranda</a>
              </li>
              <li>
                <span> / </span>
                <a href="/program-reguler">Reguler</a>
              </li>
              <li>
                <span> / </span>
                Komputer Perkantoran
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Pelatihan Info */}
      <section className="py-5 bg-light">
        <div className="container">
          <motion.div className="card border-0 shadow-sm p-4 p-md-5 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <h2 className="fw-bold mb-3">
                  Pelatihan Cepat <span className="text-danger">7 Hari Langsung Ujian</span>
                </h2>
                <h3 className="mb-4">
                  Sertifikasi <span className="fw-bold text-danger">Komputer Perkantoran</span> BNSP
                </h3>
                <img src="https://campusdigital.id/assets/images/bnsp/logo_bnsp.png" alt="BNSP-LOGO" className="img-fluid mb-4" style={{ maxHeight: "100px" }} />
                <p className="lead mb-4">Program pembelajaran online via Zoom atau offline tatap muka untuk Anda yang membutuhkan sertifikat BNSP di bidang Komputer Perkantoran.</p>
                <motion.a href="#form-registration" className="btn btn-danger btn-lg px-4 py-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  DAFTAR SEKARANG
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mengapa? */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5">
              <h2 className="fw-bold mb-3">
                Mengapa Harus Menguasai <span className="text-danger">Komputer Perkantoran?</span>
              </h2>
              <p className="lead text-muted">Profesi yang sangat dibutuhkan di berbagai bidang pekerjaan</p>
            </div>
          </div>
          <div className="row g-4">
            {["Profesi Operator Komputer Muda dibutuhkan hampir di semua perusahaan.", "Pekerjaan melibatkan bidang administrasi, perbankan, data entry, dan lainnya.", "Kemampuan komputer meningkatkan produktivitas kerja."].map(
              (item, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <motion.div className="card border-0 shadow-sm h-100" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }} viewport={{ once: true }}>
                    <div className="p-4">
                      <div className="d-flex align-items-start">
                        <div className="bg-primary bg-opacity-10 p-2 rounded me-3">
                          <i className="bi bi-check-circle-fill text-primary"></i>
                        </div>
                        <p className="mb-0">{item}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Manfaat */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">
              Manfaat Pelatihan <span className="text-danger">Komputer Perkantoran</span>
            </h2>
            <p className="lead text-muted">Apa yang akan Anda dapatkan dari pelatihan ini</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card border-0 h-100 shadow-sm">
                <div className="p-4">
                  <p className="mb-4">Program pelatihan dan pembelajaran praktis komputer perkantoran. Anda akan belajar bagaimana mengolah data, membuat tata naskah, dan menyusun presentasi yang mendukung produktivitas kerja Anda.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 h-100 shadow-sm">
                <div className="p-4">
                  <h5 className="mb-3">Yang akan Anda pelajari:</h5>
                  <ul className="list-unstyled">
                    {[
                      "Pengoperasian aplikasi Word untuk kebutuhan pekerjaan/tugas.",
                      "Pengolahan data dan angka menggunakan Excel.",
                      "Mempresentasikan laporan menarik menggunakan PowerPoint.",
                      "Penggunaan perangkat lunak yang sering dipakai dalam Komputer Kantor.",
                      "Pembuatan email menjadi lebih efisien dan cepat.",
                    ].map((item, index) => (
                      <li key={index} className="mb-2 d-flex align-items-start">
                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materi Pelatihan */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">
              Materi Pelatihan <span className="text-danger">Komputer Perkantoran</span>
            </h2>
            <p className="lead text-muted">Kurikulum lengkap untuk menjadi profesional</p>
          </div>
          <div className="row g-4">
            {[
              { title: "Pengoperasian Komputer", content: "Menggunakan Perangkat Computer, System Operasi, Penggunaan Peripheral, Program Aplikasi." },
              { title: "Microsoft Office Word", content: "Membuat Dokumen, Formatting, Header & Footer, Table, Penyimpanan Data, Mailings, Print Dokumen." },
              { title: "Microsoft Office Excel", content: "Membuat Dokumen, Melakukan Editing Sederhana Atas Kolom Dan Baris, Mevisualisasi Data Menjadi Grafik, Mencetak Dokumen." },
              { title: "Microsoft Office PowerPoint", content: "Membuat Dokumen, Melakukan Editing Sederhana Atas Kolom Dan Baris, Mevisualisasi Data Menjadi Grafik, Mencetak Dokumen." },
              { title: "Email", content: "Membuat Surat Elektronik, Melampirkan Dokumen, Membaca & Mengunduh Dokumen." },
            ].map((item, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <motion.div className="card border-0 shadow-sm h-100" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }} viewport={{ once: true }}>
                  <div className="card-header bg-white border-0 p-0" onClick={() => toggleCollapse(index)}>
                    <button className="btn w-100 text-start p-3 d-flex justify-content-between align-items-center" aria-expanded={activeIndex === index}>
                      <span className="fw-medium">{item.title}</span>
                      <i className={`bi ${activeIndex === index ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
                    </button>
                  </div>
                  <div className={`collapse ${activeIndex === index ? "show" : ""}`}>
                    <div className="pt-0">
                      <p className="text-muted">{item.content}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-4 bg-light border-top border-bottom">
        <div className="container text-center">
          <h3 className="fw-bold mb-3">
            Biaya Pelatihan <span className="text-danger">Komputer Perkantoran</span>
          </h3>
          <div className="d-flex justify-content-center align-items-baseline mb-2">
            <h4 className="text-muted me-2">
              <s>Rp 2.000.000</s>
            </h4>
            <span className="badge bg-success bg-opacity-10 text-success px-2 py-1 small">Hemat Rp 650.000</span>
          </div>
          <h2 className="fw-bold mb-3 text-danger">Rp 1.350.000</h2>
          <p className="mb-3 small text-muted">Termasuk biaya sertifikasi BNSP</p>
          <motion.a href="#form-registration" className="btn btn-danger btn-sm px-4 py-2" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            Daftar Sekarang
          </motion.a>
        </div>
      </section>

      {/* Form Pendaftaran */}
      <section id="form-registration" className="py-4">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="card border-0 shadow-sm rounded-0">
                <div className="p-3 p-md-4">
                  <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0 px-4">
                      <h4 className="fw-semibold mb-3">Form Pendaftaran</h4>
                      <p className="text-muted small mb-3">Silakan isi formulir untuk mendaftar pelatihan Komputer Perkantoran.</p>
                      <img src="https://campusdigital.id/assets/images/illustration/customer-service.svg" alt="Customer Service" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 px-4">
                      <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                          <label htmlFor="nama_lengkap" className="form-label small">
                            Nama Lengkap
                          </label>
                          <input type="text" className="form-control form-control-sm" id="nama_lengkap" placeholder="Nama Lengkap" required />
                        </div>
                        <div className="mb-2">
                          <label htmlFor="instansi" className="form-label small">
                            Instansi
                          </label>
                          <input type="text" className="form-control form-control-sm" id="instansi" placeholder="Instansi" required />
                        </div>
                        <div className="mb-2">
                          <label htmlFor="email" className="form-label small">
                            Email
                          </label>
                          <input type="email" className="form-control form-control-sm" id="email" placeholder="Email" required />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="nomor_hp" className="form-label small">
                            No HP / WhatsApp
                          </label>
                          <input type="tel" className="form-control form-control-sm" id="nomor_hp" placeholder="No HP / WhatsApp" required />
                        </div>
                        <motion.button type="submit" className="btn btn-primary w-100 py-2 fw-medium" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          Daftar Sekarang
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PerkantoranComponent;

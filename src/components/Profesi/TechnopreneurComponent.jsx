import "../../dist/css/main.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const TechnopreneurComponent = () => {
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
          <h1 className="mb-3 text-start">Digital Technopreneur</h1>
          <div className="flex"></div>
          <p className="badge bg-white text-body text-left badge-left mb-3">Profesi</p>
          <nav className="mt-2">
            <ol className="breadcrumb py-2 px-3 rounded-5 text-dark text">
              <li>
                <a href="/">Beranda</a>
              </li>
              <li>
                <span> / </span>
                <a href="/program-profesi">Profesi</a>
              </li>
              <li>
                <span> / </span>
                Digital Technopreneur
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Pelatihan Info */}
       <section className="py-5 bg-light">
        <div className="container">
          <motion.div 
            className="card border-0 shadow-sm p-4 p-md-5 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="row justify-content-center">
              <div className="col-md-8">
                <h2 className="fw-bold mb-3">
                  Pelatihan Cepat <span className="text-danger">7 Hari Langsung Ujian</span>
                </h2>
                <h3 className="mb-4">
                  Sertifikasi <span className="fw-bold text-danger">Digital Technopreneur</span> BNSP
                </h3>
                <img 
                  src="https://campusdigital.id/assets/images/bnsp/logo_bnsp.png" 
                  alt="BNSP-LOGO" 
                  className="img-fluid mb-4"
                  style={{ maxHeight: '100px' }}
                />
                <p className="lead mb-4" style={{ fontSize: '1rem' }}>
                Progam Pembelajaran Online Via Zoom Meet atau Offline Tatap Muka Untuk Anda Yang Membutuhkan Sertifikat BNSP di Bidang Digital Technopreneur
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

      {/* Mengapa? */}
      <section className="py-5">
             <div className="container">
               <div className="row justify-content-center">
                 <div className="col-lg-8 text-center mb-5">
                   <h2 className="fw-bold mb-3">
                     Mengapa Harus Menguasai <span className="text-danger">Digital Technopreneur?</span>
                   </h2>
                 </div>
               </div>
               
               <div className="row g-4">
                 {[
                   "Untuk mempersiapkan diri di era digital",
                   "Memahami potensi bisnis di era digital",
                   "Pengembangan keterampilan dan pengetahuan",
                   "Jaringan dan kolaborasi",
                   "Pemahaman riset pasar dan perilaku konsumen",
                   "Pemahaman inovasi dan disrupsi bisnis"
                 ].map((item, index) => (
                   <div className="col-md-6 col-lg-4" key={index}>
                     <motion.div 
                       className="card border-0 shadow-sm h-100"
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ delay: index * 0.1, duration: 0.5 }}
                       viewport={{ once: true }}
                     >
                       <div className=" p-4">
                         <div className="d-flex align-items-start">
                           <div className="bg-primary bg-opacity-10 p-2 rounded me-3">
                             <i className="bi bi-check-circle-fill text-primary"></i>
                           </div>
                           <p className="mb-0">{item}</p>
                         </div>
                       </div>
                     </motion.div>
                   </div>
                 ))}
               </div>
             </div>
           </section>

      {/* Manfaat */}
       <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center mb-5">
                <h2 className="fw-bold mb-3">
                  Manfaat Pelatihan <span className="text-danger">Digital Technopreneur</span>
                </h2>
                <p className="lead text-muted">
                  Apa yang akan Anda dapatkan dari pelatihan ini
                </p>
              </div>
              
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="card border-0 h-100 shadow-sm">
                    <div className=" p-4">
                      <p className="mb-4">
                      Dengan mengikuti program <strong>Digital Technopreneur</strong>, peserta dapat memperoleh manfaat yang signifikan dalam mengembangkan bisnis digital mereka. 
                      </p>
                      <p>
                      Mereka dapat menguasai teknologi terkini, mengembangkan keterampilan kewirausahaan yang relevan, memanfaatkan peluang bisnis digital, membangun jaringan yang kuat, mendapatkan bimbingan dari para ahli, dan melindungi bisnis mereka dari risiko digital. Semua ini membantu peserta untuk menjadi pengusaha digital yang sukses dan adaptif di era digital yang terus berkembang.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-6">
                  <div className="card border-0 h-100 shadow-sm">
                    <div className=" p-4">
                      <h5 className="mb-3">Yang akan Anda pelajari:</h5>
                      <ul className="list-unstyled">
                        {[
                          "Pemahaman mendalam tentang berbagai teknologi digital",
                          "Membantu mengembangkan keterampilan kewirausahaan",
                          "Medapatkan Wawasan tentang tren dan peluang bisnis digital."
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
          </div>
        </div>
      </section>
      {/* Materi Pelatihan */}
      <section className="py-5">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="fw-bold mb-3">
        Materi Pelatihan <span className="text-danger">Digital Marketing</span>
      </h2>
      <p className="lead text-muted">
        Kurikulum lengkap untuk menjadi Digital Marketing profesional
      </p>
    </div>
    
    <div className="row g-4">
                {[
                  {
                    title: "Digital Business Strategy",
                    content: "Mengembangkan Dan Mengelola Bisnis Secara Digital",
                  },
                  {
                    title: "Branding",
                    content: "Membangun Citra Dan Identitas Yang Khas Untuk Suatu Produk",
                  },
                  {
                    title: "Product Analysis",
                    content: "Membangun Citra Dan Identitas Yang Khas Untuk Suatu Produk",
                  },
                  {
                    title: "Tren Research",
                    content: "Mengidentifikasi Dan Memahami Tren Yang Sedang Terjadi",
                  },
                  {
                    title: "Data & Analytics",
                    content: " Memahami Dan Menerapkan Konsep, Teknik, Dan Alat Alat Untuk Menganalisis Untuk Medapatkan Wawasan Bisnis",
                  },
                  {
                    title: "Content Digital",
                    content: "Mengenal Dan Memahami Konten, Membuat Konten Foto, Artikel, Video",
                  },
                  {
                    title: "Facebook Marketing",
                    content: "Memasarkan Suatu Produk Di Platform Facebook",
                  },
                  {
                    title: "Inatagram Marketing",
                    content: "Memasarkan Suatu Produk Di Platform Instagram",
                  },
                  {
                    title: "Youtube Marketing",
                    content: "Memasarkan Suatu Produk Di Platform Youtube",
                  },
                  {
                    title: "Tiktok Marketing",
                    content: "MMemasarkan Suatu Produk Di Platform Tiktok",
                  },
                  {
                    title: "Google Ads. Fb Ads. lg Ads",
                    content: "Menampilkan Iklan Pada Platform Google, Facebook, Dan Instagram",
                  },
                  {
                    title: "Website Marketing.SEO.SEM",
                    content: "Memanfaatkan Strategi Pemasaran Digital",
                  },
                  {
                    title: "Marketplace Marketing",
                    content: "Mempromosikan Produk Dan Penjualan Produk Melalui Marketplace",
                  },
                  {
                    title: "Google My Business",
                    content: "Mengelola Dan Menampilkan Informasi Bisnis Secara Online",
                  },
                  {
                    title: "Operational Profitability",
                    content: "Mengukur Keuntungan Perusahaan Dari Semua Kegiatan Operasional",
                  },
                  {
                    title: "Financial Literacy",
                    content: "Melatih Kemampuan Untuk Memahami Dan Mengelola Kauangan Dengan Baik",
                  },
                ].map((item, index) => (
                  <div className="col-md-6 col-lg-4" key={index}>
                    <motion.div
                      className="card border-0 shadow-sm h-100"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div 
                        className="card-header bg-white border-0 p-0"
                        onClick={() => toggleCollapse(index)}
                      >
                        <button 
                          className="btn w-100 text-start p-3 d-flex justify-content-between align-items-center"
                          aria-expanded={activeIndex === index}
                        >
                          <span className="fw-medium">{item.title}</span>
                          <i className={`bi ${activeIndex === index ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                        </button>
                      </div>
                      <div className={`collapse ${activeIndex === index ? 'show' : ''}`}>
                        <div className="p-3 pt-0">
                          <p className="text-muted">{item.content}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </section>

      {/* Biaya Investasi */}
      <section className="py-4 bg-light border-top border-bottom">
  <div className="container text-center">
    <h3 className="fw-bold mb-3">
      Berapa Biaya Inevstasi Pelatihan <span className="text-danger">Digital Technopreneur?</span>
    </h3>

    <div className="d-flex justify-content-center align-items-baseline mb-2">
      <h4 className="text-muted me-2">
        <s>Rp 16.000.000</s>
      </h4>
      <span className="badge bg-success bg-opacity-10 text-success px-2 py-1 small">
        Hemat Rp 1.000.000
      </span>
    </div>

    <h2 className="fw-bold mb-3 text-danger">Rp 15.000.000</h2>

    <p className="mb-3 small text-muted">Termasuk biaya sertifikasi BNSP</p>

    <motion.a 
      href="#form-registration" 
      className="btn btn-danger btn-sm px-4 py-2"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      Daftar Sekarang
    </motion.a>
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

export default TechnopreneurComponent;

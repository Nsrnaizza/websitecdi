import "../../dist/css/main.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
      <div className="container training-info bg-light-puple text-center p-4 rounded shadow mt-5">
        <h2>
          Pelatihan Cepat <span>7 Hari Langsung Ujian</span>
        </h2>
        <h3>
          Sertifikasi <b>Digital Technopreneur</b> BNSP
        </h3>
        <img className="bnsp-logo" src="https://campusdigital.id/assets/images/bnsp/logo_bnsp.png" alt="BNSP-LOGO" />
        <p>Program pembelajaran online via Zoom atau offline tatap muka untuk Anda yang membutuhkan sertifikat BNSP di bidang Digital Technopreneur.</p>
        <a href="#form-registration" className="btn-register">
          DAFTAR SEKARANG
        </a>
      </div>
      {/* Mengapa? */}
      <div className="raeseon-container">
        <div className="reasons-section">
          <h3>
            Mengapa Harus Menguasai <span className="highlight">Digital Technopreneur?</span>
          </h3>
          <p>
            Mengikuti program uji kompetensi teknologi digital adalah langkah yang penting dalam mengukur kemampuan Anda, mendapatkan pengakuan resmi, dan meningkatkan peluang karier Anda dalam bidang teknologi digital. Ini adalah investasi
            dalam pengembangan diri dan pembuktian kemampuan Anda dalam industri yang terus berkembang pesat ini.
          </p>
          <ul>
            <li>Mengukur keterampilan dan pengetahuan</li>
            <li>Memahami potensi bisnis di era digital</li>
            <li>Pengembangan keterampilan dan pengetahuan</li>
            <li>Jaringan dan kolaborasi</li>
            <li>Pemahaman riset pasar dan perilaku konsumen</li>
            <li>Pemahaman inovasi dan disrupsi bisnis</li>
          </ul>
        </div>
      </div>
      {/* Manfaat */}
      <div className="benefits-section">
        <h3>
          Manfaat Pelatihan <span className="highlight">Digital Technopreneur</span>
        </h3>
        <p>
        Dengan mengikuti program Digital Technopreneur, peserta dapat memperoleh manfaat yang signifikan dalam mengembangkan bisnis digital mereka. Mereka dapat menguasai teknologi terkini, mengembangkan keterampilan kewirausahaan yang relevan, memanfaatkan peluang bisnis digital, membangun jaringan yang kuat, mendapatkan bimbingan dari para ahli, dan melindungi bisnis mereka dari risiko digital. Semua ini membantu peserta untuk menjadi pengusaha digital yang sukses dan adaptif di era digital yang terus berkembang.
        </p>
        <ul>
          <li>Pemahaman mendalam tentang berbagai teknologi digital</li>
          <li>Membantu mengembangkan keterampilan kewirausahaan</li>
          <li>Medapatkan Wawasan tentang tren dan peluang bisnis digital.</li>
        </ul>
      </div>
      {/* Materi Pelatihan */}
      <section className="materi-pelatihan">
        <div className="container">
          <div className="row m-md-3 m-sm-3">
            <div className="card title">
              <h3 className="mb-4 mt-3 text-center">
                Materi Pelatihan <span style={{ color: "red" }}>Digital Technopreneur</span>
              </h3>
              <div className="row p-lg-4 p-md-2 p-sm-1">
                {[
                  {
                    title: "Digital Business Strategy",
                    content: "Mendukung Tugas Tugas Administratif Dan Operasional Lingkungan Kantor",
                  },
                  {
                    title: "Branding",
                    content: "Memasarkan Produk Menggunakan Platform Online",
                  },
                  {
                    title: "Product Analysis",
                    content: "Menciptakan Visual Yang Menarik Dan Komunikatif",
                  },
                  {
                    title: "Tren Research",
                    content: "Menciptakan Tampilan Visual Dan Struktur Web",
                  },
                  {
                    title: "Data & Analytics",
                    content: "Membangun Web Yang Berjalan Di Internet",
                  },
                  {
                    title: "Content Digital",
                    content: "Mengubah Video Agar Menjadi Konten Yang Menarik",
                  },
                  {
                    title: "Facebook Marketing",
                    content: "Mengambil Gambar Dan Menyesuaikan Komposisi Visual",
                  },
                  {
                    title: "Inatagram Marketing",
                    content: "Membuat Video, Animasi, Dll",
                  },
                  {
                    title: "Youtube Marketing",
                    content: "Membuat Game, Pengujian Game, Dan Peluncuran Game",
                  },
                  {
                    title: "Tiktok Marketing",
                    content: "Mengelola Dan Mengoptimalkan Kehadiran Di Media Sosial",
                  },
                  {
                    title: "Google Ads. Fb Ads. lg Ads",
                    content: "Mengembangkan Aplikasi Untuk Digunakan Pada Perangkat Mobile",
                  },
                  {
                    title: "Website Marketing.SEO.SEM",
                    content: "Mengambil Gambar Dan Menyesuaikan Komposisi Visual",
                  },
                  {
                    title: "Marketplace Marketing",
                    content: "Membuat Video, Animasi, Dll",
                  },
                  {
                    title: "Google My Business",
                    content: "Membuat Game, Pengujian Game, Dan Peluncuran Game",
                  },
                  {
                    title: "Operational Profitability",
                    content: "Mengelola Dan Mengoptimalkan Kehadiran Di Media Sosial",
                  },
                  {
                    title: "Financial Literacy",
                    content: "Mengembangkan Aplikasi Untuk Digunakan Pada Perangkat Mobile",
                  },
                ].map((item, index) => (
                  <div className="col-lg-4 col-sm-6" key={index}>
                    <div className="card border-0 shadow-sm mb-4 size-manfaat">
                      <div className="card-header d-flex justify-content-between" id={`heading${index}`}>
                        <button className="btn btn-collapse" type="button" onClick={() => toggleCollapse(index)} aria-expanded={activeIndex === index} aria-controls={`collapse${index}`}>
                          <span>{item.title}</span>
                          <i className={`fa fa-angle-up ${activeIndex === index ? "rotate" : ""}`}></i>
                        </button>
                      </div>
                      <div id={`collapse${index}`} className={`collapse ${activeIndex === index ? "show" : ""}`} aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                      <div className="custom-content p-3 text-truncate-2 text-justify" style={{ fontSize: "13px", fontWeight:"normal"}}>
                          {item.content.split("\n").map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Biaya Investasi */}
      <div className="pricing-section text-center">
        <h2>
          Berapa Biaya Investasi Pelatihan <span>Digital Technopreneur ?</span>
        </h2>
        <h3 className="discount-price">
          <s>16.000.000</s>
        </h3>
        <h1 className="final-price">15.000.000</h1>
        <h3>Termasuk biaya sertifikasi BNSP</h3>
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

export default TechnopreneurComponent;

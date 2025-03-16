import "../../dist/css/main.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DigitalMarketingComponent = () => {
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
          <h1 className="mb-3 text-start">Digital Marketing</h1>
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
                Digital Marketing
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
          Sertifikasi <b>Digital Marketing</b> BNSP
        </h3>
        <img className="bnsp-logo" src="https://campusdigital.id/assets/images/bnsp/logo_bnsp.png" alt="BNSP-LOGO" />
        <p>Program pembelajaran online via Zoom atau offline tatap muka untuk Anda yang membutuhkan sertifikat BNSP di bidang Digital Marketing.</p>
        <a href="#form-registration" className="btn-register">
          DAFTAR SEKARANG
        </a>
      </div>
      {/* Mengapa Digital Marketing */}
      <div className="raeseon-container">
        <div className="reasons-section">
          <h3>
            Mengapa Harus Menguasai <span className="highlight">Digital Marketing?</span>
          </h3>
          <ul className="checklist">
            <li>Semua bisnis saat ini memiliki kehadiran online</li>
            <li>Lebih efektif dibandingkan pemasaran tradisional</li>
            <li>Menjangkau audiens lebih luas</li>
            <li>Menargetkan audiens yang spesifik</li>
            <li>Berinteraksi dengan pelanggan lebih cepat</li>
            <li>Trend bisnis yang terus berkembang</li>
            <li>Bisa dipelajari tanpa latar belakang marketing</li>
          </ul>
        </div>
      </div>
      {/* Manfaat Digital Marketing */}
      <div className="benefits-section">
        <h3>
          Manfaat Pelatihan <span className="highlight">Digital Marketing</span>
        </h3>

        <p className="description">
          <strong>Digital marketing</strong>adalah serangkaian strategi pemasaran yang dilakukan menggunakan <spna className="highlight">media digital</spna> dan <span className="highlight"> platform online</span> untuk mempromosikan produk
          atau layanan suatu perusahaan. Dengan memiliki Sertifikasi Kompetensi menunjukan bahwa seseorang diakui memiliki ketrampilan dan pengetahuan yang teruji dan di akui secara resmi oleh industri dan Badan Negara Sertifikasi Profesi
          (BNSP) dengan manfaat :
        </p>
        <ul className="checklist">
          <li> Jangkauan bisnis lebih luas</li>
          <li> Target promosi lebih tepat sasaran</li>
          <li> Biaya iklan lebih murah</li>
          <li> Memahami analisis bisnis</li>
          <li> Interaksi langsung dengan pelanggan</li>
          <li>Pemahaman tren media sosial</li>
        </ul>
      </div>
      {/* Materi Pelatihan */}
      <section className="materi-pelatihan">
        <div className="container">
          <div className="row m-md-3 m-sm-3">
            <div className="card title">
              <h3 className="mb-4 mt-3 text-center">
                Materi Pelatihan <span style={{ color: "red" }}>Digital Marketing</span>
              </h3>
              <div className="row p-lg-4 p-md-2 p-sm-1">
                {[
                  {
                    title: "Product Knowledge",
                    content: "Mengenal Dan Memahami Produk, Segmentasi Pasar, Kompetitor. ",
                  },
                  {
                    title: "Analisa Digital",
                    content: "Menganalisa Kata Kunci, Wilayah Pencarian, Trend Pemasaran, Volume Pencarian, Tingkat Persaingan, Sosmed, Kompetitor.",
                  },
                  {
                    title: "Content Digital",
                    content: "Mengenal Dan Memahami Konten, Membuat Konten Foto, Artikel, Video. ",
                  },
                  {
                    title: "Pemasaran Website",
                    content: "Mengenal Dan Memahami Website, SEO, Membuat Website. ",
                  },
                  {
                    title: "Google My Business",
                    content: "Membuat Listing Akun Google Profil Bisnis. ",
                  },
                  {
                    title: "Pemasaran Sosial Media",
                    content: "Belajar Iklan Organic Dan Paid, Facebook Ads, Instagram Ads. ",
                  },
                  {
                    title: "Marketplace",
                    content: "Mengenal Dan Memahami Cara Kerja Marketplace, Membuat Akun, Memasarkan Produk. ",
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
          Berapa Biaya Investasi Pelatihan <span>Digital Marketing?</span>
        </h2>
        <h3 className="discount-price">
          <s>Rp 2.100.000</s>
        </h3>
        <h1 className="final-price">Rp 1.500.000</h1>
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

export default DigitalMarketingComponent;

import "../../dist/css/main.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UMKMGoDigitalComponent = () => {
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
          <h1 className="mb-3 text-start">UMKM Go Digital</h1>
          <div className="flex"></div>
          <p className="badge bg-white text-body text-left badge-left mb-3">Corporate</p>
          <nav className="mt-2">
            <ol className="breadcrumb py-2 px-3 rounded-5 text-dark text">
              <li>
                <a href="/">Beranda</a>
              </li>
              <li>
                <span> / </span>
                <a href="/program-corporate">Corporate</a>
              </li>
              <li>
                <span> / </span>
                UMKM Go Digital
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
          Sertifikasi <b>UMKM Go Digital</b> BNSP
        </h3>
        <img className="bnsp-logo" src="https://campusdigital.id/assets/images/bnsp/logo_bnsp.png" alt="BNSP-LOGO" />
        <p>Program pembelajaran online via Zoom atau offline tatap muka untuk Anda yang membutuhkan sertifikat BNSP di bidang UMKM Go Digital.</p>
        <a href="#form-registration" className="btn-register">
          DAFTAR SEKARANG
        </a>
      </div>
      {/* Mengapa? */}
      <div className="raeseon-container">
        <div className="reasons-section">
          <h3>
            Mengapa Harus Menguasai <span className="highlight">UMKM Go Digital?</span>
          </h3>
          <p>
          Mengikuti program UMKM Go Digital memberi Anda kesempatan untuk memanfaatkan potensi teknologi digital, mengoptimalkan bisnis Anda, dan beradaptasi dengan perubahan yang terjadi. 
          Ini adalah langkah penting dalam menjaga bisnis Anda relevan, kompetitif, dan berhasil dalam lingkungan bisnis yang semakin digital.
          </p>
          <ul className="checklist">
            <li>Meningkatkan keberhasilan bisnis</li>
            <li>Mengikuti perkembangan teknologi</li>
            <li>Meningkatkan efisiensi  operasional</li>
            <li>Meningkatkan jangkauan pasar</li>
          </ul>
        </div>
      </div>
      {/* Manfaat */}
      <div className="benefits-section">
        <h3>
          Manfaat Pelatihan <span className="highlight">UMKM Go Digital</span>
        </h3>
        <ul className="checklist">
          <li>Membantu UMKM memanfaatkan teknologi digital.</li>
          <li>Membantu relevan dan up to date.</li>
          <li>Mengoptimalkan proses operasional bisnis.</li>
          <li>Menjangkau pasar lebih luas.</li>
        </ul>
      </div>
      {/* Materi Pelatihan */}
      <section className="materi-pelatihan">
        <div className="container">
          <div className="row m-md-3 m-sm-3">
            <div className="card title">
              <h3 className="mb-4 mt-3 text-center">
                Materi Pelatihan <span style={{ color: "red" }}>UMKM Go Digital</span>
              </h3>
              <div className="row p-lg-4 p-md-2 p-sm-1">
                {[
                  {
                    title: "Dasar Teknologi Digital",
                    content: "Mendukung Tugas Tugas Administratif Dan Operasional Lingkungan Kantor",
                  },
                  {
                    title: "Pemasaran Digital",
                    content: "Memasarkan Produk Menggunakan Platform Online",
                  },
                  {
                    title: "Media Sosial Management",
                    content: "Menciptakan Visual Yang Menarik Dan Komunikatif",
                  },
                  {
                    title: "Transaksi Online",
                    content: "Menciptakan Tampilan Visual Dan Struktur Web",
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
      <div className="pricing-section text-center  p-3 mt-5 m-5">
        <h2>
          Berapa Biaya Investasi Pelatihan <span>UMKM Go Digital ??</span>
        </h2>
        <h3 className="discount-price">
          <s>Mahal</s>
        </h3>
        <h1 className="final-price">Bisa Negosiasi</h1>
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

export default UMKMGoDigitalComponent;

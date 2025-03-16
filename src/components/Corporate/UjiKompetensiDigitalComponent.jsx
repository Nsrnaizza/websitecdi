import "../../dist/css/main.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UjiKompetensiDigitalComponent = () => {
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
          <h1 className="mb-3 text-start">Uji Kompetensi Teknologi Digital</h1>
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
                Uji Kompetensi Teknologi Digital
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
          Sertifikasi <b>Uji Kompetensi Teknologi Digital</b> BNSP
        </h3>
        <img className="bnsp-logo" src="https://campusdigital.id/assets/images/bnsp/logo_bnsp.png" alt="BNSP-LOGO" />
        <p>Program pembelajaran online via Zoom atau offline tatap muka untuk Anda yang membutuhkan sertifikat BNSP di bidang Uji Kompetensi Teknologi Digital.</p>
        <a href="#form-registration" className="btn-register">
          DAFTAR SEKARANG
        </a>
      </div>
      {/* Mengapa? */}
      <div className="raeseon-container">
        <div className="reasons-section">
          <h3>
            Mengapa Harus Menguasai <span className="highlight">Uji Kompetensi Teknologi Digital?</span>
          </h3>
          <p>
            Mengikuti program uji kompetensi teknologi digital adalah langkah yang penting dalam mengukur kemampuan Anda, mendapatkan pengakuan resmi, dan meningkatkan peluang karier Anda dalam bidang teknologi digital. Ini adalah investasi
            dalam pengembangan diri dan pembuktian kemampuan Anda dalam industri yang terus berkembang pesat ini.
          </p>
          <ul className="checklist">
            <li>Mengukur keterampilan dan pengetahuan</li>
            <li>Validasi dan pengakuan</li>
            <li>Meningkatkan peluang karir</li>
            <li>Meningkatkan pengetahuan</li>
          </ul>
        </div>
      </div>
      {/* Manfaat */}
      <div className="benefits-section">
        <h3>
          Manfaat Pelatihan <span className="highlight">Uji Kompetensi Teknologi Digital</span>
        </h3>
        <ul className="checklist">
          <li>Meningkatkan pengetahuan dalam industry digital.</li>
          <li>Memberi Wawasan merencanakan Langkah Langkah untuk perkembangan diri.</li>
          <li>Lebih percaya diri dalam teknologi digital.</li>
        </ul>
      </div>
      {/* Materi Pelatihan */}
      <section className="materi-pelatihan">
        <div className="container">
          <div className="row m-md-3 m-sm-3">
            <div className="card title">
              <h3 className="mb-4 mt-3 text-center">
                Materi Pelatihan <span style={{ color: "red" }}>Uji Kompetensi Teknologi Digital</span>
              </h3>
              <div className="row p-lg-4 p-md-2 p-sm-1">
                {[
                  {
                    title: "Komputer Perkantoran",
                    content: "Mendukung Tugas Tugas Administratif Dan Operasional Lingkungan Kantor",
                  },
                  {
                    title: "Digital Marketing",
                    content: "Memasarkan Produk Menggunakan Platform Online",
                  },
                  {
                    title: "Graphic Design",
                    content: "Menciptakan Visual Yang Menarik Dan Komunikatif",
                  },
                  {
                    title: "Web Design",
                    content: "Menciptakan Tampilan Visual Dan Struktur Web",
                  },
                  {
                    title: "Web Development",
                    content: "Membangun Web Yang Berjalan Di Internet",
                  },
                  {
                    title: "Video Editing",
                    content: "Mengubah Video Agar Menjadi Konten Yang Menarik",
                  },
                  {
                    title: "Fotografi",
                    content: "Mengambil Gambar Dan Menyesuaikan Komposisi Visual",
                  },
                  {
                    title: "Multimedia",
                    content: "Membuat Video, Animasi, Dll",
                  },
                  {
                    title: "Game Development",
                    content: "Membuat Game, Pengujian Game, Dan Peluncuran Game",
                  },
                  {
                    title: "Social Media Specialist",
                    content: "Mengelola Dan Mengoptimalkan Kehadiran Di Media Sosial",
                  },
                  {
                    title: "Mobile Programming",
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
          Berapa Biaya Investasi Pelatihan <span>Uji Kompetensi Teknologi Digital?</span>
        </h2>
        <h3 className="discount-price">
          <s></s>
        </h3>
        <h1 className="final-price"></h1>
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

export default UjiKompetensiDigitalComponent;

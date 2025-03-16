import "../../dist/css/main.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const BeasiswaComponent = () => {
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
          <h1 className="mb-3 text-start">Beasiswa</h1>
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
                Beasiswa
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
          Sertifikasi <b>Beasiswa</b> BNSP
        </h3>
        <img className="bnsp-logo" src="https://campusdigital.id/assets/images/bnsp/logo_bnsp.png" alt="BNSP-LOGO" />
        <p>Program pembelajaran online via Zoom atau offline tatap muka untuk Anda yang membutuhkan sertifikat BNSP di bidang Beasiswa.</p>
        <a href="#form-registration" className="btn-register">
          DAFTAR SEKARANG
        </a>
      </div>
      {/* Mengapa? */}
      <div className="raeseon-container">
        <div className="reasons-section">
          <h3>
            Mengapa Harus Menguasai <span className="highlight">Beasiswa?</span>
          </h3>
          <p>
            Mengikuti program beasiswa dapat memberikan manfaat yang signifikan, baik secara finansial maupun dalam hal pengembangan diri dan kesempatan karier. Ini adalah kesempatan yang berharga untuk memperoleh pendidikan dan peluang
            yang mungkin tidak akan tersedia tanpa dukungan finansial.
          </p>
          <ul className="checklist">
            <li>Akses ke Pendidikan berkualitas</li>
            <li>Pengurangan beban keuangan</li>
            <li>Prestasinya diakui</li>
          </ul>
        </div>
      </div>
      {/* Manfaat */}
      <div className="benefits-section">
        <h3>
          Manfaat Pelatihan <span className="highlight">Beasiswa</span>
        </h3>
        <ul className="checklist">
          <li>Membantu mengurangi beban keuangan yeng terkait dengan Pendidikan.</li>
          <li>Pengakuan prestasi dalam bidanh akademik, seni, olahraga dan lain lain.</li>
          <li>Mendapatkan Pendidikan yang berkualitas.</li>
        </ul>
      </div>
      {/* Materi Pelatihan */}
      <section className="materi-pelatihan">
        <div className="container">
          <div className="row m-md-3 m-sm-3">
            <div className="card title">
              <h3 className="mb-4 mt-3 text-center">
                Materi Pelatihan <span style={{ color: "red" }}>Beasiswa</span>
              </h3>
              <div className="row p-lg-4 p-md-2 p-sm-1">
                {[
                  {
                    title: "Dasar Dasar Multimedia",
                    content: "Penggunaan Elemen - Elemen Seperti Teks, Gambar, Audio, Animasi, Video",
                  },
                  {
                    title: "Membuat Design Menggunakan Illurstrator",
                    content: "Memahami Berbagai Fitur Dan Teknik Dalam Illustrator",
                  },
                  {
                    title: "Editing Photo Menggunakan Photoshop",
                    content: "Penggunaan Fitur Fitur Yang Ada Dalam Photoshop",
                  },
                  {
                    title: "Membuat Konten Video Menggunakan Smartphone",
                    content: "Membuat Konten Menggunakan Perangkat Seadanya",
                  },
                  {
                    title: "Editing Video Menggunakan Smartphone",
                    content: "Mengedit Dan Mengolah Video Menggunakan Smartphone",
                  },
                  {
                    title: "Editing Video Menggunakan Adobe Premiere",
                    content: "Mengolah Video Menggunakan Software Editing Yang Popular",
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
          Berapa Biaya Investasi Pelatihan <span>Beasiswa?</span>
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

export default BeasiswaComponent;

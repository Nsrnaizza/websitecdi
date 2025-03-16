import "../../dist/css/main.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MobileComponent = () => {
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
          <h1 className="mb-3 text-start">Mobile Programmer</h1>
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
                Mobile Programmer
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
          Sertifikasi <b>Mobile Programmer</b> BNSP
        </h3>
        <img className="bnsp-logo" src="https://campusdigital.id/assets/images/bnsp/logo_bnsp.png" alt="BNSP-LOGO" />
        <p>Program pembelajaran online via Zoom atau offline tatap muka untuk Anda yang membutuhkan sertifikat BNSP di bidang Mobile Programmer.</p>
        <a href="#form-registration" className="btn-register">
          DAFTAR SEKARANG
        </a>
      </div>
      {/* Mengapa? */}
      <div className="raeseon-container">
        <div className="reasons-section">
          <h3>
            Mengapa Harus Menguasai <span className="highlight">Mobile Programmer?</span>
          </h3>
          <p>Menguasai keterampilan sebagai mobile programmer memberi Anda akses ke pasar yang berkembang pesat, peluang karir yang menjanjikan, dan potensi untuk menjadi bagian dari inovasi teknologi yang sedang berlangsung.</p>
          <ul className="checklist">
            <li>Industri aplikasi mobile berkembang pesat.</li>
            <li>Permintaan tinggi di pasar kerja.</li>
            <li>Potensi Pendapatan yang menjanjikan.</li>
            <li>Dapat bekerja di berbagai industri.</li>
          </ul>
        </div>
      </div>
      {/* Manfaat */}
      <div className="benefits-section">
        <h3>
          Manfaat Pelatihan <span className="highlight">Mobile Programmer</span>
        </h3>
        <ul className="checklist">
          <li>Menguasai bahasa pemrograman mobile</li>
          <li>Mampu mengembangkan aplikasi mobile</li>
          <li>Dapat bekerja dalam tim.</li>
        </ul>
      </div>
      {/* Materi Pelatihan */}
      <section className="materi-pelatihan">
        <div className="container">
          <div className="row m-md-3 m-sm-3">
            <div className="card title">
              <h3 className="mb-4 mt-3 text-center">
                Materi Pelatihan <span style={{ color: "red" }}>Mobile Programmer</span>
              </h3>
              <div className="row p-lg-4 p-md-2 p-sm-1">
                {[
                  {
                    title: "Introduction",
                    content: "Memperkenalkan Software Yang Akan Digunakan Untuk Menjadi Movile Programmer.",
                  },
                  {
                    title: "Setting Up On Android",
                    content: "Menginstall Tools Yang Dibutuhkan Dalam Pengembangan.",
                  },
                  {
                    title: "User Interface",
                    content: "Membuat Tampilan Visual Yang Dapat Berinteraksi Dengan Sistem.",
                  },
                  {
                    title: "Networking",
                    content: "Interaksi Antara Perangkat Komputer Untuk Bertukar Data, Berbagi Sumber Daya, Atau Berkomunikasi.",
                  },
                  {
                    title: "Multimedia",
                    content: "Memahami Dan Menerapkan Elemen Teknik Yang Digunakan.",
                  },
                  {
                    title: "Application Components",
                    content: "UI, Logika, Penyimpanan Data, Komunikasi Jaringan, Dll.",
                  },
                  {
                    title: "Data Storage Methods",
                    content: "Metode Metode Penyimpanan Data Yang Digunakan Dalam Pengembangan Aplikasi.",
                  },
                  {
                    title: "Location Based Service",
                    content: "Konsep, Teknologi, Dan Aplikasi Yang Memanfaatkan Lokasi Untuk Memberikan Layanan Kepada Pengguna.",
                  },
                  {
                    title: "Debugging And Testing",
                    content: "Memastikan Kualitas, Dan Kinerja Dari Sebuah Aplikasi",
                  },
                  {
                    title: "Publishing",
                    content: "Mengunggah Aplikasi Ke Platform Atau Aplikasi",
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
          Berapa Biaya Investasi Pelatihan <span>Mobile Programmer?</span>
        </h2>
        <h3 className="discount-price">
          <s>Rp 6.000.000</s>
        </h3>
        <h1 className="final-price">Rp 5.000.000</h1>
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

export default MobileComponent;

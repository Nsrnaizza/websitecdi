import "../../dist/css/main.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SocialMediaComponent = () => {
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
          <h1 className="mb-3 text-start">Social Media Specialist</h1>
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
                Social Media Specialist
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
          Sertifikasi <b>Social Media Specialist</b> BNSP
        </h3>
        <img className="bnsp-logo" src="https://campusdigital.id/assets/images/bnsp/logo_bnsp.png" alt="BNSP-LOGO" />
        <p>Program pembelajaran online via Zoom atau offline tatap muka untuk Anda yang membutuhkan sertifikat BNSP di bidang Social Media Specialist.</p>
        <a href="#form-registration" className="btn-register">
          DAFTAR SEKARANG
        </a>
      </div>
      {/* Mengapa? */}
      <div className="raeseon-container">
        <div className="reasons-section">
          <h3>
            Mengapa Harus Menguasai <span className="highlight">Social Media Specialist?</span>
          </h3>
          <p>Menguasai keterampilan sebagai Social Media Specialist memberi Anda keunggulan kompetitif di dunia digital yang semakin terhubung dan memungkinkan Anda untuk berkontribusi dalam upaya pemasaran dan komunikasi yang efektif.</p>
          <ul className="checklist">
            <li>Permintaan tinggi dalam industry.</li>
            <li>Membangun kehadiran digital.</li>
            <li>Media sosial adalah salah satu tempat pemasaran yang paling efektif dan terjangkau.</li>
          </ul>
        </div>
      </div>
      {/* Manfaat */}
      <div className="benefits-section">
        <h3>
          Manfaat Pelatihan <span className="highlight">Social Media Specialist</span>
        </h3>
        <p className="description">
          Program pelatihan dan pembelajaran praktis social media specialist. Anda akan mempelajari bagaimana mengembangkan usaha dan bisnis Anda menggunakan social media untuk meningkatkan penjualan dan bisnis Anda.
        </p>
        <ul className="checklist">
          <li>Menguasai berbagai platform media sosial</li>
          <li>Membekali dengan pemahaman yang mendalam tentang strategi pemasaran media sosial</li>
          <li>Memberikan wawasan tentang perilaku pengguna, preferensi konten, tren viral, dan kebiasaan konsumsi konten di platform media sosial.</li>
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
                    title: "Mindset Facebook Ads",
                    content: "Pemikiran Ketika Beriklan Di Facebook.",
                  },
                  {
                    title: "Algoritma Facebook Ads",
                    content: "Algoritma Yang Digunakan Oleh Facebook Untuk Menampilkan Iklan.",
                  },
                  {
                    title: "Menentukan Target",
                    content: "Menentukan Target Audience.",
                  },
                  {
                    title: "Menyusun Iklan",
                    content: "Cara Menyusun Iklan Yang Menarik.",
                  },
                  {
                    title: "Business Manager",
                    content: "Mengelola Iklan Dan Asset Bisnis Secara Efisien.",
                  },
                  {
                    title: "Cara Membuat Pixel",
                    content: "Aplikasi Yang Dibutuhkan, Memberi Nama Pixel, Panduan Penempatan Pixel.",
                  },
                  {
                    title: "Cara Pasang Pixel",
                    content: "Langkah Langkah Memasang Pixel.",
                  },
                  {
                    title: "Membuat Canvas",
                    content: "Langkah Langkah Membuat Canvas.",
                  },
                  {
                    title: "Pasang Iklan Konversi",
                    content: "Iklan Mulai Ditayangkan Kepada Audiens.",
                  },
                  {
                    title: "Analisa Iklan",
                    content: "Memahami Dan Mengukur Efektivitas Iklan.",
                  },
                  {
                    title: "Riset & Optimasi Iklan",
                    content: "Mengumpulkan Data, Menganalisis Hasil, Dan Mengoptimalkan Strategi Pemasaran.",
                  },
                  {
                    title: "Scrape Follower Instagram",
                    content: "Mengidentifikasi Dan Mengumpulkan Informasi Tentang Follower Seseorang.",
                  },
                  {
                    title: "Auto Follow & Posting",
                    content: "Mengikuti Pengguna Instagram Atau Mengirim Posting Secara Otomatis.",
                  },
                  {
                    title: "Riset Calon Followers",
                    content: "Mempelajari Dan Memahami Audiens.",
                  },
                  {
                    title: "Scrap Hashtag Target",
                    content: "Mengumpulkan Data Hashtag Yang Relevan Dengan Target.",
                  },
                  {
                    title: "Scrap Like & Comment",
                    content: "Mengumpulkan Data Jumlah Suka Dan Komentar Yang Diterima Oleh Postingan.",
                  },
                  {
                    title: "Beriklan Di Instagram",
                    content: "Menggunakan Instagram Sebagai Media Promosi.",
                  },
                  {
                    title: "Bisnis Di Instagram",
                    content: "Mempromosikan Bisnis Di Instagram.",
                  },
                  {
                    title: "Analisa Insight Instagram",
                    content: "Mengidentifikasi Tren, Memahami Preferensi Pengguna, Dan Membuat Keputusan Berdasarkan Data.",
                  },
                  {
                    title: "Fitur-Fitur Instagram",
                    content: "Memahami Fitur Fitur Yang Ada Di Instagram.",
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
          Berapa Biaya Investasi Pelatihan <span>Social Media Specialist?</span>
        </h2>
        <h3 className="discount-price">
          <s>Rp 2.500.000</s>
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

export default SocialMediaComponent;

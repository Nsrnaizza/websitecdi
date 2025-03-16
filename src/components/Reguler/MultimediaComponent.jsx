import "../../dist/css/main.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MultimediaComponent = () => {
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
          <h1 className="mb-3 text-start">Multimedia</h1>
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
                Multimedia
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
          Sertifikasi <b>Multimedia</b> BNSP
        </h3>
        <img className="bnsp-logo" src="https://campusdigital.id/assets/images/bnsp/logo_bnsp.png" alt="BNSP-LOGO" />
        <p>Program pembelajaran online via Zoom atau offline tatap muka untuk Anda yang membutuhkan sertifikat BNSP di bidang Multimedia.</p>
        <a href="#form-registration" className="btn-register">
          DAFTAR SEKARANG
        </a>
      </div>
      {/* Mengapa? */}
      <div className="raeseon-container">
        <div className="reasons-section">
          <h3>
            Mengapa Harus Menguasai <span className="highlight">Multimedia?</span>
          </h3>
          <p>Menguasai keterampilan multimedia memiliki banyak kepentingan dalam dunia yang semakin terhubung dan berbasis digital. Berikut adalah beberapa alasan mengapa skill multimedia penting:</p>
          <ul className="checklist">
            <li>Memungkinkan untuk menyampaikan pesan secara efektif melalui berbagai media.</li>
            <li>Menjadi seorang profesional yang ahli dalam bidang olah gambar.</li>
            <li>Mengembangkan inovasi dan kreativitas.</li>
            <li>Peluang karir yang luas di industri kreatif.</li>
            <li>Dunia Serba digital sehingga sangat dibutuhkan oleh perusahaan.</li>
          </ul>
        </div>
      </div>
      {/* Manfaat */}
      <div className="benefits-section">
        <h3>
          Manfaat Pelatihan <span className="highlight">Video Editor</span>
        </h3>

        <p className="description">
          Pelatihan multimedia memberikan Anda keterampilan yang diperlukan untuk menghasilkan konten multimedia yang menarik, berdampak, dan inovatif. Ini memungkinkan Anda untuk mengekspresikan kreativitas Anda, menguasai alat dan
          teknologi, dan membangun karir yang sukses di industri multimedia yang terus berkembang.
        </p>
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
                    title: "Dasar - dasar Teori Dalam Multimedia",
                    content: "Pemahaman Elemen Yang Terlibat Dalam Multimedia.",
                  },
                  {
                    title: "Membuat Desain Menggunakan Illustrator",
                    content: "Memahami Berbagai Fitur Dan Teknik Dalah Illustrator.",
                  },
                  {
                    title: "Editing Foto Menggunakan Photoshop",
                    content: "Penggunaan Fitur Fitur Yang Ada Dalam Photoshop.",
                  },
                  {
                    title: "Membuat Konten Video Menggunakan Smartphone",
                    content: "Membuat Konten Menggunakan Perangkat Yang Ada.",
                  },
                  {
                    title: "Penggunaan Tools Seperti CapCut",
                    content: "Mengedit Dan Mengolah Video Menggunakan Smartphone.",
                  },
                  {
                    title: "Editing Video Menggunakan Adobe Premiere",
                    content: "Mengolah Video Menggunakan Software Editing Yang Popular.",
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
          <s>Rp 1.700.000</s>
        </h3>
        <h1 className="final-price">Rp 1.200.000</h1>
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

export default MultimediaComponent;

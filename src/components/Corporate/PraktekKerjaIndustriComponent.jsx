import "../../dist/css/main.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PraktekKerjaIndustriComponent = () => {
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
          <h1 className="mb-3 text-start">Praktek Kerja Industri Daring (PRAKERINDA)</h1>
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
                Praktek Kerja Industri Daring (PRAKERINDA)
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
          Sertifikasi <b>Praktek Kerja Industri Daring (PRAKERINDA)</b> BNSP
        </h3>
        <img className="bnsp-logo" src="https://campusdigital.id/assets/images/bnsp/logo_bnsp.png" alt="BNSP-LOGO" />
        <p>Program pembelajaran online via Zoom atau offline tatap muka untuk Anda yang membutuhkan sertifikat BNSP di bidang Praktek Kerja Industri Daring (PRAKERINDA).</p>
        <a href="#form-registration" className="btn-register">
          DAFTAR SEKARANG
        </a>
      </div>
      {/* Mengapa? */}
      <div className="raeseon-container">
        <div className="reasons-section">
          <h3>
            Mengapa Harus Menguasai <span className="highlight">Praktek Kerja Industri Daring (PRAKERINDA)?</span>
          </h3>
          <p>
            Dengan mengikuti program Prakerinda, Anda dapat memperoleh pengalaman kerja yang berharga, meningkatkan kompetensi Anda, membangun jaringan profesional, dan membuka peluang kerja di masa depan. Program ini dapat menjadi landasan
            yang kuat dalam memulai karier Anda dan mempersiapkan Anda untuk tantangan dunia kerja yang sesungguhnya.
          </p>
          <ul className="checklist">
            <li>Memberi kesempatan bagi peserta mendapatkan pengalaman kerja di Perusahaan</li>
            <li>Membantu memperoleh Wawasan yang lebih jelas tentang karir</li>
          </ul>
        </div>
      </div>
      {/* Manfaat */}
      <div className="benefits-section">
        <h3>
          Manfaat Pelatihan <span className="highlight">Praktek Kerja Industri Daring (PRAKERINDA)</span>
        </h3>
        <p>Program pelatihan dan pembelajaran praktis desain grafis. Anda akan belajar bagaimana mengembangkan kreativitas melalui desain grafis.</p>
        <ul className="checklist">
          <li>Mendapat pengalaman kerja.</li>
          <li>Meningkatkan kompetensi.</li>
          <li>Mengembangkan keterampilan dan pengetahuan yang sesuai dengan kebutuhan industri.</li>
        </ul>
      </div>
      {/* Materi Pelatihan */}
      <section className="materi-pelatihan">
        <div className="container">
          <div className="row m-md-3 m-sm-3">
            <div className="card title">
              <h3 className="mb-4 mt-3 text-center">
                Materi Pelatihan <span style={{ color: "red" }}>Praktek Kerja Industri Daring (PRAKERINDA)</span>
              </h3>
              <div className="row p-lg-4 p-md-2 p-sm-1">
                {[
                  {
                    title: "Customer Service Online",
                    content: "Belajar Melayani Customer Melalui Platform Online.",
                  },
                  {
                    title: "Account Staff",
                    content: "Mengelola Data Data Perusahaan, Mengelola Data Keuangan, Dan Tugas Lain Yang Berkaitan Dengan Akuntansi.",
                  },
                  {
                    title: "Digital Marketing Staf",
                    content: "Merencanakan Dan Mengelola Pemasaran Digital Perusahaan.",
                  },
                  {
                    title: "Digital Marketing Manager",
                    content: "Mengelola Strategi Digital Marketing Perusahaan.",
                  },
                  {
                    title: "Social Media Specialist",
                    content: "Mengelola Kegiatan Marketing Melalui Platform Media Social.",
                  },
                  {
                    title: "Social Media Manager",
                    content: "Mengelola Strategi Dan Pengembangan Perusahaan Di Platform Sosial Media.",
                  },
                  {
                    title: "Marketplace Specialist",
                    content: "Mengelola Dan Memaksimalkan Bisnis Di Marketplace.",
                  },
                  {
                    title: "Marketplace Manager",
                    content: "Mengelola Strategi Dan Pengembangan Bisnis Di Marketplace",
                  },
                  {
                    title: "Web Designer",
                    content: "Membuat Desain Menjadi Menarik",
                  },
                  {
                    title: "Web Developer",
                    content: "Merancang Dan Mengembangkan Website",
                  },
                  {
                    title: "Accounting",
                    content: "Mengelola Keuangan, Pencatatan Transaksi, Analisis, Dan Pelaporan Informasi Keuangan",
                  },
                  {
                    title: "Program Analist",
                    content: "Menganalisis Kebutuhan Bisnis, Mengembangkan Rencana, Dan Mengoordinasikan Implementasi System Informasi",
                  },
                  {
                    title: "Office Operator",
                    content: "Menjalankan Tugas Tugas Administratif Dan Operasional",
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
      <div className="pricing-section text-center p-3 mt-5 m-5">
        <h2>
          Berapa Biaya Investasi Pelatihan 
          <h1><span> Praktek Kerja Industri Daring (PRAKERINDA)?</span></h1> 
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

export default PraktekKerjaIndustriComponent;

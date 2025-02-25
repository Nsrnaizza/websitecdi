import "../dist/css/main.css";


const FasilitasComponent = () => {
  return (
    <div className="container">
      <div className="header-one">
        <div className="section_header">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1 text-center text-lg-start">
              <h1>Fasilitas & Keunggulan</h1>
              <h4 className="fw-normal">Fasilitas & Keunggulan Campus Digital</h4>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 mb-3 mb-lg-0 text-center">
              <img
                className="h-auto mb-3 mb-lg-0 img-header"
                src="https://campusdigital.id/assets/images/illustration/5237.png"
                alt="Fasilitas & Keunggulan"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light p-4 rounded-1">
        <h2 className="mb-4">Mengapa Kami?</h2>
        <div className="row">
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li className="d-flex align-items-start mb-3">
                <span className="me-2 text-primary">✔️</span>
                Instruktur yang tersertifikasi
              </li>
              <li className="d-flex align-items-start mb-3">
                <span className="me-2 text-primary">✔️</span>
                Video Pembelajaran yang aplikatif
              </li>
              <li className="d-flex align-items-start mb-3">
                <span className="me-2 text-primary">✔️</span>
                Peluang berkarir di Perusahaan mitra
              </li>
              <li className="d-flex align-items-start mb-3">
                <span className="me-2 text-primary">✔️</span>
                Pengelola dan instruktur tersertifikasi
              </li>
              <li className="d-flex align-items-start mb-3">
                <span className="me-2 text-primary">✔️</span>
                Modul Pembelajaran selalu up to date
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li className="d-flex align-items-start mb-3">
                <span className="me-2 text-primary">✔️</span>
                Lokasi yang strategis dan mudah dijangkau
              </li>
              <li className="d-flex align-items-start mb-3">
                <span className="me-2 text-primary">✔️</span>
                Kerjasama dengan instansi pemerintah maupun swasta
              </li>
              <li className="d-flex align-items-start mb-3">
                <span className="me-2 text-primary">✔️</span>
                Peserta berkesempatan mendapatkan sertifikasi kompetensi
              </li>
              <li className="d-flex align-items-start mb-3">
                <span className="me-2 text-primary">✔️</span>
                Waktu belajar yang fleksibel bisa belajar kapan dan dimana saja
              </li>
              <li className="d-flex align-items-start mb-3">
                <span className="me-2 text-primary">✔️</span>
                Program affiliate yang memberi potensi penghasilan
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>                   
  );
};

export default FasilitasComponent;
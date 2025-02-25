import "../dist/css/main.css";

const DokumentasiComponent = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-3">
            <h2 className="mb-3 animated-text">Dokumentasi</h2>
            <span className="subtitle">Kegiatan Terbaru yang telah dilaksanakan</span>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="dokumentasi col-md-6">
            <img src="https://campusdigital.id/assets/images/dokumentasi/1738828594.jpg" className="img-fluid animated-img" alt="Dokumentasi" />
          </div>
          <div className="text-center col-lg-6 mt-3">
            <h2 className="animated-text">Documentation for Each Activity</h2>
            <p>Dokumentasi dari Event Event Campus Digital</p>
            <a href="/galery" className="btn btn-lg btn-galery px-4 animated-btn">
              <i className="fas fa-eye icon" style={{ fontSize: "22px" }}></i> Lihat Selengkapnya
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DokumentasiComponent;

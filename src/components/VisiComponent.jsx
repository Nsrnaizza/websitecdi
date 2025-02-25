import "../dist/css/main.css";

const VisiComponent = () => {
  return (
    <div className="col-lg-4 d-lg-flex align-items-stretch mb-4 mb-lg-0">
      <div className="card text-center rounded-1 border-0 shadow-sm">
        <div className="p-4 rounded-1 bg-visi">
          <img className="logo-visi" src="https://campusdigital.id/assets/images/icon/dart.png" alt="icon" />
        </div>
        <div className="card-body">
          <h1>Visi</h1>
          <p>Menjadi perusahaan yang unggul dan terpercaya dalam pelayanan jasa Pendidikan dan Pelatihan di bidang Teknologi Digital dan Bisnis</p>
        </div>
      </div>
    </div>
  );
};

export default VisiComponent;

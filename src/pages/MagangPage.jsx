import MagangComponent from "../components/MagangComponent";

const MagangPage = () => {
  return (
    <div>
      <section className="page-top-section bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1 text-center text-lg-start">
              <h1>Program Kemitraan SMK</h1>
              <h4 className="fw-normal">Mengambangkan tenaga didik sebagai calon tenaga kerja yang berkualitas</h4>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 mb-3 mb-lg-0 text-center">
              <img className="h-auto mb-3 mb-lg-0 img-header" src="https://campusdigital.id/assets/images/illustration/min/6617.png" alt="banner" style={{ marginTop: "40px" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="info-section spad">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Tentang Kemitraan SMK</h1>
              <div className="mt-4">
                <p className="text-mitra">
                  Menurut Instruksi Presiden Nomor 9 Tahun 2016 tentang Revitalisasi Sekolah Menengah Kejuruan (SMK), Kementerian Pendidikan dan Kebudayaan (Kemendikbud) terus melakukan penguatan <i>link and match</i> dengan dunia usaha dan
                  dunia industri. <br />
                  <b>PT. Campus Digital Indonesia</b> berkomitmen tinggi dan turut serta berpartisipasi dalam menyiapkan lulusan yang profesional dengan daya saing tinggi terutama pada Industri digital dan pemasaran. Dengan berbagai layanan
                  dan support kami siap mengawal siswa untuk menghadapi era digital dan meraih kesuksesan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MagangComponent />
    </div>
  );
};

export default MagangPage;

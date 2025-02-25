import "../dist/css/main.css";

const BudayaKerjaComponent = () => {
  return (
    <div className="container">
      <div className="header-one">
        <div className="section_header">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1 text-center text-lg-start">
              <h1>Budaya Kerja</h1>
              <h4 className="fw-normal">Budaya Kerja Campus Digital</h4>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 mb-3 mb-lg-0 text-center">
              <img
                className="h-auto mb-3 mb-lg-0 img-header"
                src="https://campusdigital.id/assets/images/illustration/5237.png"
                alt="Budaya Kerja"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light p-4 rounded-1">
        <div className="section-about row text-center">
          <div className="col-md-4 mb-4">
            <div className="p-3 border rounded shadow-sm h-100">
              <img
                src="https://img.icons8.com/emoji/96/000000/star-emoji.png"
                alt="Commitment"
                className="mb-3"
              />
              <h5 className="fw-bold">Commitment (Memegang Teguh Komitmen)</h5>
              <p>
                Memegang teguh komitmen yang telah kami buat, amanah, bertanggung jawab dan saling percaya satu sama lain.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-3 border rounded shadow-sm h-100">
              <img
                src="https://img.icons8.com/fluency/96/000000/combo-chart.png"
                alt="Add Value"
                className="mb-3"
              />
              <h5 className="fw-bold">Add Value (Menambah Nilai)</h5>
              <p>
                Selalu memberikan nilai tambah bagi pelanggan, bagi mitra bisnis, bagi lingkungan sekitar dan masyarakat dunia.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-3 border rounded shadow-sm h-100">
              <img
                src="https://img.icons8.com/color/96/000000/filled-like.png"
                alt="Mutual Respect"
                className="mb-3"
              />
              <h5 className="fw-bold">Mutual Respect (Saling Menghormati dan Menghargai)</h5>
              <p>
                Selalu saling menghargai hasil usaha kontribusi pihak lain. Keterbukaan dan kejelasan informasi sangat penting.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-3 border rounded shadow-sm h-100">
              <img
                src="https://campusdigital.id/assets/images/icon/success.png"
                alt="Ultimate"
                className="mb-3"
              />
              <h5 className="fw-bold">Ultimate (Unggul)</h5>
              <p>
              Sadar bahwa untuk menjadi yang terbaik dan memberikan yang terbaik, memutuskan untuk melakukan sesuatu melebihi standard dan rata-rata orang lain.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-3 border rounded shadow-sm h-100">
              <img
                src="https://campusdigital.id/assets/images/icon/best-employee.png"
                alt="Professional"
                className="mb-3"
              />
              <h5 className="fw-bold">Professional (Menjaga Sikap Profesionalisme)</h5>
              <p>
                Memanfaatkan keahlian untuk pencapaian target-target perusahaan secara efektif, efisien dan optimal, selalu berfikir, bersikap dan bertindak hati-hati.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-3 border rounded shadow-sm h-100">
              <img
                src="https://campusdigital.id/assets/images/icon/rating.png"
                alt="Service Excellent"
                className="mb-3"
              />
              <h5 className="fw-bold">Service Excellent ( Pelayanan yang Bermutu)</h5>
              <p>
              Memberikan pelayanan yang bermutu, bekerja dan melayani dengan baik saja tidak cukup, harus bekerja dengan predikat yang luar biasa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudayaKerjaComponent;

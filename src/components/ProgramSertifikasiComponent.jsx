import "../dist/css/main.css";

const programs = [
  {
    title: "Network, Infrastructure, IOT and Services",
    description: "Skema Sertifikasi: Network Administrator Muda, Network Administrator Madya, Network Administrator Utama",
    img: "https://campusdigital.id/assets/images/program/2021-10-05-09-22-52.png",
    link: "/program/network-infrastructure-iot-and-services",
  },
  {
    title: "Software Development and Data Science",
    description: "Skema Sertifikasi: Junior Web Programmer / Developer, Junior Mobile Programmer, Junior Mobile Computing",
    img: "https://campusdigital.id/assets/images/program/2021-10-05-09-26-53.png",
    link: "/program/software-development-and-data-science",
  },
  {
    title: "Multimedia and Office",
    description: "Skema Sertifikasi: Desainer Grafis Muda, Desainer Grafis Utama, Desainer Multimedia Muda, Desainer Multimedia Utama",
    img: "https://campusdigital.id/assets/images/program/2021-10-05-09-49-40.png",
    link: "/program/multimedia-and-office",
  },
  {
    title: "Project Management and Quality",
    description: "Skema Sertifikasi: ICT Project Manager, Management Project Specialist, IT Quality Assurance, IT Auditor",
    img: "https://campusdigital.id/assets/images/program/2021-10-05-09-52-47.png",
    link: "/program/project-management-and-quality",
  },
  {
    title: "Digital Marketing And IT Fundamental",
    description: "Belajar Digital Marketing dan IT Fundamental penting karena kedua bidang ini saling melengkapi dan ...",
    img: "https://campusdigital.id/assets/images/program/2021-10-04-14-55-18.png",
    link: "/program/digital-marketing-and-it-fundamental",
  },
  {
    title: "Fiber Optic",
    description: "...",
    img: "https://campusdigital.id/assets/images/program/2021-10-05-09-58-48.png",
    link: "/program/fiber-optic",
  },
];

const ProgramSertifikasiComponent = () => {
  return (
    <div id="program">
      <section className="page-top-section set-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1 text-center text-lg-start">
              <h1>Program Sertifikasi</h1>
              <h4 className="fw-normal">
                Daftar program pelatihan <span className="text-lowercase">Sertifikasi</span>
                <br />
                yang tersedia untuk Anda
              </h4>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 mb-3 mb-lg-0 text-center">
              <img className="h-auto mb-3 mb-lg-0 img-header" src="https://campusdigital.id/assets/images/illustration/min/8778.png" alt="banner" />
            </div>
          </div>
        </div>
      </section>

      <section className="info-section spad pt-0">
        <div className="container">
          <div className="row">
            {programs.map((program, index) => (
              <div className="col-lg-3 col-md-6 mb-4" key={index}>
                <div className="card border-0 shadow-sm mb-3">
                  <img src={program.img} className="card-img-top w-100" alt={program.title} />
                  <div className="card-body">
                    <p className="fw-bold m-0 text-truncate d-block">{program.title}</p>
                    <p className="text-truncate-3 d-none d-md-block">{program.description}</p>
                    <a href={program.link} className="btn btn-primary">
                      Selengkapnya
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row mt-3 justify-content-center" id="pagination">
            {/* Pagination component or logic can be added here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramSertifikasiComponent;

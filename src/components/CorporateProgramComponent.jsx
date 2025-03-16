import { Container, Row, Col } from "react-bootstrap";
import "../dist/css/main.css"; // Import main CSS for additional styling
import HeroImage from "../assets/img/reguler.png"; // Import the HeroImage
import { Fade } from "react-awesome-reveal"; // Import react-reveal for animations

const CorporateProgramComponent = () => {
  const cards = [
    {
      image: "src/assets/img/card5.png",
      title: "Peningkatan Komp...",
      text: "Program pelatihan dan pembelajaran praktis pemasaran digital. Anda akan belajar bagaimana merencana... ",
      link: "corporate/kompetensi-digital-marketing",
    },
    {
      image: "src/assets/img/card6.png",
      title: "Praktek Kerja Indu...",
      text: "Program pelatihan dan pembelajaran praktis desain grafis. Anda akan belajar bagaimana mengembangkan... ",
      link: "corporate/praktek-kerja-industri",
    },
    {
      image: "src/assets/img/card7.png",
      title: "Kelas Industri Tekn...",
      text: "Mengikuti program Kelas Industri Teknologi Digital akan memberikan Anda keunggulan kompetitif di pa... ",
      link: "corporate/industri-teknologi-digital",
    },
    {
      image: "src/assets/img/card8.png",
      title: "Training For Trainer",
      text: "Membantu mengembangkan materi pelatihan yang efektif Meningkatkan kemampuan berkomunikasi Meningkatka... ",
      link: "corporate/training-for-trainer",
    },
    {
      image: "src/assets/img/card18.png",
      title: "Uji Kompetensi Tek...",
      text: "Meningkatkan pengetahuan dalam industry digitalMemberi Wawasan merencanakan Langkah Langkah untuk p... ",
      link: "corporate/uji-kompetensi-teknologi-digital",
    },
    {
      image: "src/assets/img/card19.png",
      title: "Beasiswa",
      text: "&nbsp;Membantu mengurangi beban keuangan yeng terkait dengan PendidikanPengakuan prestasi dalam bid... ",
      link: "corporate/beasiswa",
    },
    {
      image: "src/assets/img/card20.png",
      title: "Inhouse Training",
      text: "Melalui program in-house training, perusahaan dapat meningkatkan kompetensi karyawan, memperkuat bu... ",
      link: "corporate/inhouse-training",
    },
    {
      image: "src/assets/img/card21.png",
      title: "UMKM Go Digital",
      text: "Membantu UMKM memanfaatkan teknologi digitalMembantu relevan dan up to dateMengoptimalkan proses op... ",
      link: "corporate/umkm-go-digital",
    },
  ];

  return (
    <Container>
      <header className="w-100 min-vh-10 d-flex align-items-center hero-section">
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg={6}>
              <Fade left>
                <h1 className="title">Program Corporate</h1>
                <h4 className="fw-normal">
                  Daftar program pelatihan corporate
                  <span className="text-lowercase"></span>
                  <br />
                  yang tersedia untuk Anda
                </h4>
              </Fade>
            </Col>
            <Col lg={6} className="text-center">
              <Fade right>
                <img src={HeroImage} alt="Afiliasi" className="img-fluid hero-img animated-hero" />
              </Fade>
            </Col>
          </Row>
        </Container>
      </header>
      <Row className="justify-content-center mt-5">
        {cards.map((card, index) => (
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4" key={index}>
            <Fade bottom>
              <div className="card shadow-lg border-0 rounded-3 p-2" style={{ height: "27rem", width: "16rem", minHeight: "20rem" }}>
                <img src={card.image} className="card-img-top w-100 owl-lazy" alt={card.title} />
                
                {/* Wrapper teks dengan align-items-start untuk memastikan rata kiri */}
                <div className="m-2 d-flex flex-column align-items-start p-1" style={{ width: "100%" }}>
                  <h5 className="text-truncate" 
                      style={{ fontSize: "1.07rem", color: "black", fontWeight: "bold",  marginTop: "-12px", lineHeight: "1.3",  textAlign: "left"  }}> {card.title}
                  </h5>
                  <p className="text-muted text-truncate-3"  
                     style={{ fontSize: "0.84rem",color: "black", textDecoration: "none",textAlign: "left",marginTop: "-5px",wordBreak: "break-word"}}>{card.text}
                  </p>
                </div>

                <a href={card.link} className="btn mt-0 m-5" 
                   style={{ backgroundColor: "#d3b8f7", borderColor: "#dcc8f4", color: "#330369" }}>
                  Selengkapnya
                </a>
              </div>
            </Fade>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CorporateProgramComponent;

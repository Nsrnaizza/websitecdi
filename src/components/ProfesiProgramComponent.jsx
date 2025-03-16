import { Container, Row, Col } from "react-bootstrap";
import "../dist/css/main.css"; // Import main CSS
import HeroImage from "../assets/img/reguler.png"; // Import Hero Image
import { Fade } from "react-awesome-reveal"; // Import react-reveal
import card9 from "../assets/img/card9.png"; // Pastikan gambar diimport
import card10 from "../assets/img/card10.png";

const ProfesiProgramComponent = () => {
  const cards = [
    { image: card9, title: "Digital Technopreneur", description: "Dengan mengikuti program Digital Technopreneur, peserta dapat memperoleh manfaat yang signifikan...", link:"program/digital-technopreneur" },
    { image: card10, title: "Digital Marketer", description: "Program pendidikan dan pelatihan selama satu tahun setara D1 pemasaran digital...", link:"program/digital-marketer" },
  ];

  return (
      <Container>
        <header className="w-100 min-vh-10 d-flex align-items-center hero-section">
          <Container>
            <Row className="d-flex align-items-center">
              <Col lg={6}>
                <Fade left>
                  <h1 className="title">Program Profesi</h1>
                  <h4 className="fw-normal">
                    Daftar program pelatihan profesi
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
        <Row className="justify-content-start mt-5">
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
                       style={{ fontSize: "0.84rem",color: "black", textDecoration: "none",textAlign: "left",marginTop: "-5px",wordBreak: "break-word"}}>{card.description}
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

export default ProfesiProgramComponent;
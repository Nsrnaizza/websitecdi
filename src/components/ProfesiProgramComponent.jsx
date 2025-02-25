import { Container, Row, Col } from "react-bootstrap";
import "../dist/css/main.css"; // Import main CSS for additional styling
import HeroImage from "../assets/img/reguler.png"; // Import the HeroImage
import { Fade } from "react-awesome-reveal"; // Import react-reveal for animations

const ProfesiProgramComponent = () => {
  const cards = [
    { image: "src/assets/img/card9.png", title: "Program 7", text: "Description 7" },
    { image: "src/assets/img/card10.png", title: "Program 8", text: "Description 8" },
  ];

  return (
    <Container>
      <header className="w-100 min-vh-100 d-flex align-items-center hero-section">
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
      <Row>
        {cards.map((card, index) => (
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={index}>
            <Fade bottom>
              <a href="#" className="w-100 card-link" title={card.title} target="_blank">
                <div className="card bgc border-0 shadow mb-3 card-hover" style={{ backgroundColor: "#330369" }}>
                  <img src={card.image} className="card-img-top w-100 owl-lazy" alt={card.title} />
                  <div className="card bg-light m-3">
                    <div className="card-body">
                      <p className="text-truncate-3 d-md-box" style={{ color: "black", textDecoration: "none" }}>
                        {card.text}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </Fade>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProfesiProgramComponent;

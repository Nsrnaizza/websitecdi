import { Container, Row, Col } from "react-bootstrap";
import "../dist/css/main.css"; 
import HeroImage from "../assets/img/reguler.png"; 
import { Fade } from "react-awesome-reveal"; 

const RegularProgramComponent = () => {
  const cards = [
    { image: "src/assets/img/card1.png", title: "Program 1", text: "Description 1" },
    { image: "src/assets/img/card2.png", title: "Program 2", text: "Description 2" },
    { image: "src/assets/img/card3.png", title: "Program 3", text: "Description 3" },
    { image: "src/assets/img/card4.png", title: "Program 4", text: "Description 4" },
    { image: "src/assets/img/card11.png", title: "Program 5", text: "Description 5" },
    { image: "src/assets/img/card12.png", title: "Program 6", text: "Description 6" },
    { image: "src/assets/img/card13.png", title: "Program 7", text: "Description 7" },
    { image: "src/assets/img/card14.png", title: "Program 8", text: "Description 8" },
    { image: "src/assets/img/card15.png", title: "Program 9", text: "Description 9" },
    { image: "src/assets/img/card16.png", title: "Program 10", text: "Description 10" },
    { image: "src/assets/img/card17.png", title: "Program 11", text: "Description 11" },
  ];

  return (
    <Container>
      <header className="w-100 min-vh-100 d-flex align-items-center hero-section">
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg={6}>
              <Fade left>
                <h1 className="title">Program Reguler</h1>
                <h4 className="fw-normal">
                  Daftar program pelatihan reguler
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

export default RegularProgramComponent;

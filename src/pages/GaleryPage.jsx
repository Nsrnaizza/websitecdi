import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/afiliasi.png";
import { useNavigate } from "react-router-dom";
import GaleryProgram from "../components/GaleryComponent";

function GaleryPage() {
  return (
    <div className="galerypage">
      <header className="w-100 min-vh-100 d-flex align-items-center hero-section">
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg={6}>
              <h1 className="title">Galery</h1>
              <p className="description">
                Dokumentasi Pelatihan Kampus Digital<br />
              </p>
            </Col>
            <Col lg={6} className="text-center">
              <img src={HeroImage} alt="Afiliasi" className="img-fluid hero-img" />
            </Col>
          </Row>
        </Container>
      </header>

      <div className="Galery-section py-5">
        <Container>
          <GaleryProgram />
        </Container>
      </div>
    </div>
  );
}

export default GaleryPage;

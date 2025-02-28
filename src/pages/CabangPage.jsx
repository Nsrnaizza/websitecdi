import { Container, Row, Col, Card } from "react-bootstrap";
import HeroImage from "../assets/img/afiliasi.png";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  let navigate = useNavigate();

  const cabangData = [
    {
      title: "Semarang Anjasmoro",
      lokasi: "Anjasmoro",
      linkWa: "Hubungi Cabang",
      linkIg: "campusdigital.id",
    },
    {
      title: "Semarang Banyumanik",
      lokasi: "Banyumanik",
      linkWa: "Hubungi Cabang",
      linkIg: "campusdigital.id",
    },
    {
      title: "Semarang Fatmawati",
      lokasi: "Fatmawati",
      linkWa: "Hubungi Cabang",
      linkIg: "campusdigital.id",
    },
    {
      title: "Semarang Gajah",
      lokasi: "Gajah",
      linkWa: "Hubungi Cabang",
      linkIg: "campusdigital.id",
    },
  ];

  return (
    <div className="cabangpage">
      <header className="w-100 min-vh-100 d-flex align-items-center hero-section">
        <Container>
          <Row className="d-flex align-items-left">
            <Col lg={6}>
              <h1 className="title">Cabang</h1>
              <p className="description">
                Cabang Kampus Digital <br />
              </p>
            </Col>
            <Col lg={6} className="text-center">
              <img src={HeroImage} alt="Afiliasi" className="img-fluid hero-img" />
            </Col>
          </Row>
        </Container>
      </header>

      <section className="cabang-section py-5">
        <Container>
          <Row className="mt-4">
            {cabangData.map((cabang, index) => (
              <Col md={3} key={index} className="mb-4">
                <Card className="h-100 shadow-sm card-hover">
                  <Card.Header className="fw-bold text-center">{cabang.title}</Card.Header>
                  <Card.Body className="d-flex flex-column gap-2">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-house-door-fill me-2"></i> {cabang.lokasi}
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-whatsapp me-2"></i>
                      <a href="https://api.whatsapp.com/send/?phone=62816343742&text&type=phone_number&app_absent=0">
                        {cabang.linkWa}
                      </a>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-instagram me-2"></i>
                      <a href="https://www.instagram.com/campusdigital.id">{cabang.linkIg}</a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;

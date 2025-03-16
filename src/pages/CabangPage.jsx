import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import HeroImage from "../assets/img/afiliasi.png";
import { useNavigate } from "react-router-dom";
import { getCabangs } from "../API/CabangApi"; // Pastikan path benar

const HomePage = () => {
  let navigate = useNavigate();
  const [cabangs, setCabangs] = useState([]); // State untuk menyimpan data cabang

  // Fetch data cabang dari API saat komponen pertama kali dimuat
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCabangs(); // Panggil fungsi API
      setCabangs(data); // Simpan data ke state
    };
    
    fetchData();
  }, []);

  return (
    <div className="cabangpage">
      <header className="w-100 min-vh-100 d-flex align-items-center hero-section">
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg={6}>
              <h1 className="title">Cabang</h1>
              <p className="description">
                Cabang Kampus Digital<br />
              </p>
            </Col>
            <Col lg={6} className="text-center">
              <img src={HeroImage} alt="Afiliasi" className="img-fluid hero-img" />
            </Col>
          </Row>
        </Container>

        <section className="Galery-section py-5">
          <Container></Container>
        </section>
      </header>

      <section className="cabang-section py-5">
        <Container>
          <Row className="mt-4">
            {cabangs.map((cabang) => (
              <Col md={3} key={cabang.id} className="mb-4">
                <Card className="h-100 shadow-sm card-hover">
                  <Card.Header className="fw-bold text-center">{cabang.name}</Card.Header>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-house-door-fill me-2 p-1"></i> {cabang.lokasi}
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-whatsapp me-2 p-1"></i>
                    <a href={cabang.whatsapp_link} target="_blank" rel="noopener noreferrer">
                      Hubungi Cabang
                    </a>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-instagram me-2 p-1"></i>
                    <a href={cabang.instagram_link} target="_blank" rel="noopener noreferrer">
                     Instagram
                    </a>
                  </div>
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

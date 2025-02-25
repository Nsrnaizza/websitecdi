import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import logo from "../assets/img/logo.png"; 

const FooterComponent = () => {
  return (
    <footer className="footer mt-5 custom-footer text-white">
      <Container className="text-center py-4">
        {/* Logo dan Alamat */}
        <Row>
          <Col>
            <img src={logo} alt="Campus Digital" className="footer-logo mb-3" />
          </Col>
        </Row>

        {/* Informasi Kontak */}
        <Row className="contact-info mt-2">
          <Col>
            <p className="text-white">
              <FaMapMarkerAlt className="me-2" /> Jl. Taman Sari Hill Residen, Blok B01, No.10, Kel. Mangunharjo, Kec. Tembalang, Kota Semarang
            </p>
            <p className="text-white">
              <FaEnvelope className="me-2" /> info@campusdigital.id
            </p>
            <p className="text-white">
              <FaWhatsapp className="me-2" /> 62816343742
            </p>
          </Col>
        </Row>

        {/* Sosial Media */}
        <Row className="social-icons mt-3">
          <Col>
            <a href="https://www.instagram.com/campusdigital.id" className="social-link"><FaInstagram /></a>
            <a href="https://www.facebook.com/campusdigital.id/?ref=py_c" className="social-link"><FaFacebook /></a>
            <a href="https://www.youtube.com/channel/UCz6opXZW_HqPU6RQlfxOS9w" className="social-link"><FaYoutube /></a>
          </Col>
        </Row>
      </Container>

      {/* Copyright */}
      <div className="copyright text-center py-3">
        Copyright © 2019 - 2025 Campus Digital
      </div>

      {/* Tombol WhatsApp */}
      <div className="whatsapp-float">
        <a href="https://wa.me/62816343742" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
          <FaWhatsapp className="whatsapp-icon" /> Hubungi Kami
        </a>
      </div>
    </footer>
  );
};

export default FooterComponent;

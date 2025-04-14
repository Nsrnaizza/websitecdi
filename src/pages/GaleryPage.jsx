import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/afiliasi.png";
import GaleryProgram from "../components/GaleryComponent";
import "../dist/css/main.css";

function GaleryPage() {
  return (
    <div className="galery-page">
      {/* Hero Section - Compact Version */}
      <motion.section 
        className="hero-section py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          background: "linear-gradient(135deg, #330369 0%, #5a2a96 100%)",
          color: "white",
        }}
      >
        <Container>
          <Row className="align-items-center g-3">
            <Col lg={6} className="order-2 order-lg-1">
              <motion.h1
                className="display-5 fw-bold mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Gallery
              </motion.h1>
              <motion.p
                className="lead mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Dokumentasi Pelatihan Kampus Digital
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn btn-sm"
                style={{
                  backgroundColor: "#FDD100",
                  color: "#330369",
                  fontWeight: "600",
                  padding: "6px 18px",
                  borderRadius: "6px"
                }}
              >
                Lihat Semua
              </motion.button>
            </Col>

            <Col lg={6} className="order-1 order-lg-2 text-center">
              <motion.img
                src={HeroImage}
                alt="Gallery"
                className="img-fluid rounded-3 shadow"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ maxHeight: "240px" }}
              />
            </Col>
          </Row>
        </Container>
      </motion.section>

      {/* Gallery Section - Compact Version */}
      <section className="py-4" style={{ backgroundColor: "#faf9ff" }}>
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GaleryProgram />
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

export default GaleryPage;
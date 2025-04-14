import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import HeroImage from "../assets/img/afiliasi.png";
import { useNavigate } from "react-router-dom";
import { getCabangs } from "../API/CabangApi";

const HomePage = () => {
  const navigate = useNavigate();
  const [cabangs, setCabangs] = useState([]);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCabangs();
      setCabangs(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const CardItem = ({ cabang, index }) => {
    const cardControls = useAnimation();
    const [cardRef, cardInView] = useInView({
      threshold: 0.1,
      triggerOnce: true
    });

    useEffect(() => {
      if (cardInView) {
        cardControls.start("visible");
      }
    }, [cardControls, cardInView]);

    return (
      <Col md={3} key={cabang.id} className="mb-4">
        <motion.div
          ref={cardRef}
          initial="hidden"
          animate={cardControls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }
            }
          }}
        >
          <motion.div
            className="h-100 rounded-lg overflow-hidden shadow-sm"
            whileHover={{ 
              y: -8,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              backgroundColor: "#fff",
              border: "1px solid rgba(0,0,0,0.05)"
            }}
          >
            <div 
              className="p-3 text-center fw-bold"
              style={{
                backgroundColor: "#330369",
                color: "white"
              }}
            >
              {cabang.name}
            </div>
            <div className="p-3">
              <div className="d-flex align-items-center mb-2">
                <FaMapMarkerAlt className="me-2" style={{ color: "#5a2a96" }} />
                <span className="small">{cabang.lokasi}</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <FaWhatsapp className="me-2" style={{ color: "#25D366" }} />
                <a
                  href={cabang.whatsapp_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="small text-decoration-none"
                  style={{ color: "#330369" }}
                >
                  Hubungi Cabang
                </a>
              </div>
              <div className="d-flex align-items-center">
                <FaInstagram className="me-2" style={{ color: "#E1306C" }} />
                <a
                  href={cabang.instagram_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="small text-decoration-none"
                  style={{ color: "#330369" }}
                >
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Col>
    );
  };

  return (
    <div className="cabangpage" style={{ backgroundColor: "#f8f9fa" }}>
      {/* Hero Section */}
      <header 
        className="w-100 min-vh-50 d-flex align-items-center"
        style={{
          background: "linear-gradient(135deg, #330369 0%, #5a2a96 100%)",
          color: "white"
        }}
      >
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg={6}>
              <motion.h1
                className="display-5 fw-bold mb-3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  type: "spring",
                  damping: 10
                }}
              >
                Cabang
              </motion.h1>
              <motion.p
                className="lead mb-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3,
                  type: "spring"
                }}
              >
                Cabang Kampus Digital
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-sm"
                style={{
                  backgroundColor: "#FDD100",
                  color: "#330369",
                  fontWeight: "600",
                  padding: "8px 20px",
                  borderRadius: "6px"
                }}
              >
                Jelajahi Cabang
              </motion.button>
            </Col>

            <Col lg={6} className="text-center">
              <motion.img
                src={HeroImage}
                alt="Afiliasi"
                className="img-fluid rounded-3 shadow"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2,
                  type: "spring"
                }}
                style={{ maxHeight: "280px" }}
              />
            </Col>
          </Row>
        </Container>
      </header>

      {/* Cabang Section */}
      <section 
        ref={ref}
        className="py-5"
        style={{ backgroundColor: "#faf9ff" }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                transition: { duration: 0.6 }
              }
            }}
          >
            <motion.h2 
              className="text-center mb-5 fw-bold"
              style={{ color: "#330369" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Temukan Cabang Kami
            </motion.h2>

            <Row className="g-4">
              {cabangs.map((cabang, index) => (
                <CardItem key={cabang.id} cabang={cabang} index={index} />
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
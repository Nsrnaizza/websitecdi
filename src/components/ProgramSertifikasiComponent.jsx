import { Container, Row, Col } from "react-bootstrap";
import { motion, useScroll, useTransform } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from "react";
import { getRegularPrograms } from "../api/sertifikasiApi";

const ProgramSertifikasiComponent = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Animasi untuk header
  const headerVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  // Animasi untuk card
  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.8
      }
    }
  };

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const data = await getRegularPrograms();
        console.log("Fetched Programs:", data);
        setPrograms(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch programs:", err);
        setError("Gagal memuat data program. Silakan coba lagi.");
        setPrograms([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  if (programs.length === 0 && !loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="alert alert-info">Tidak ada program sertifikasi yang tersedia saat ini.</div>
      </div>
    );
  }

  return (
    <div id="program">
      {/* Header Section dengan Animasi */}
      <motion.section 
        className="page-top-section set-bg"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={headerVariants}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1 text-center text-lg-start">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Program Sertifikasi
              </motion.h1>
              <motion.h4 
                className="fw-normal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Daftar program pelatihan <span className="text-lowercase">Sertifikasi</span>
                <br />
                yang tersedia untuk Anda
              </motion.h4>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 mb-3 mb-lg-0 text-center">
              <motion.img
                className="h-auto mb-3 mb-lg-0 img-header"
                src="https://campusdigital.id/assets/images/illustration/min/8778.png"
                alt="banner"
                style={{ maxHeight: "250px" }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Cards Section dengan Animasi */}
      <section className="cards-section py-5 position-relative">
        <Container>
          <Row className="justify-content-start g-4">
            {programs.map((program, index) => (
              <Col xs={12} sm={6} md={6} lg={4} key={program.id || index}>
                <motion.div
                  className="h-100"
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                  custom={index}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    whileHover={{
                      y: -15,
                      scale: 1.03,
                      boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="h-100"
                  >
                    <a href={`/program/${program.id}`} className="w-100 text-decoration-none h-100 d-block">
                      <div
                        className="card border-0 h-100"
                        style={{
                          width: "100%",
                          height: "15rem",
                          borderRadius: "12px",
                          overflow: "hidden",
                          background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
                          color: "#330369",
                          transition: "all 0.3s ease",
                          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                          border: "1px solid rgba(255,255,255,0.3)",
                        }}
                      >
                        <div className="card-image-container" style={{ overflow: "hidden" }}>
                          <motion.img
                            src={program.image_url || "https://campusdigital.id/assets/images/default-program.png"}
                            style={{
                              height: "15rem",
                              width: "100%",
                              objectFit: "cover",
                              borderTopLeftRadius: "12px",
                              borderTopRightRadius: "12px",
                            }}
                            alt={program.program_title || "Program Image"}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                        <div
                          className="p-1"
                          style={{
                            backgroundColor: "rgba(255,255,255,0.8)",
                            backdropFilter: "blur(10px)",
                          }}
                        >
                          <h5
                            className="text-start fw-bold text-truncate px-2"
                            style={{
                              fontSize: "1.2rem",
                              letterSpacing: "0.5px",
                              minHeight: "1.8rem",
                              maxWidth: "100%",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis"
                            }}
                          >
                            {program.program_title || "Nama Program"}
                          </h5>
                          <div
                            className="d-flex justify-content-between align-items-center mx-2"
                            style={{
                              gap: "5px",
                              backgroundColor: "#f4f4f4",
                              padding: "5px 10px",
                              borderRadius: "8px",
                            }}
                          >
                            <motion.div 
                              className="d-flex align-items-center" 
                              style={{ gap: "2px" }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <div
                                style={{
                                  backgroundColor: "#ffffff",
                                  width: "25px",
                                  height: "30px",
                                  borderRadius: "6px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                }}
                              >
                                <i
                                  className="bi bi-calendar-week"
                                  style={{
                                    fontSize: "1rem",
                                    color: "#6c63ff",
                                  }}
                                ></i>
                              </div>
                              <span
                                style={{
                                  fontSize: "0.65rem",
                                  fontWeight: "500",
                                  color: "#330369",
                                }}
                              >
                                {program.jumlah_pertemuan || "0"} Pertemuan
                              </span>
                            </motion.div>
                            <motion.div 
                              className="d-flex align-items-center" 
                              style={{ gap: "2px" }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <div
                                style={{
                                  backgroundColor: "#ffffff",
                                  width: "25px",
                                  height: "30px",
                                  borderRadius: "6px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                }}
                              >
                                <i
                                  className="bi bi-journal-bookmark"
                                  style={{
                                    fontSize: "1rem",
                                    color: "#6c63ff",
                                  }}
                                ></i>
                              </div>
                              <span
                                style={{
                                  fontSize: "0.65rem",
                                  fontWeight: "500",
                                  color: "#330369",
                                }}
                              >
                                {program.jumlah_modul || "0"} Modul
                              </span>
                            </motion.div>
                            <motion.div 
                              className="d-flex align-items-center" 
                              style={{ gap: "2px" }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <div
                                style={{
                                  backgroundColor: "#ffffff",
                                  width: "25px",
                                  height: "30px",
                                  borderRadius: "6px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                }}
                              >
                                <i
                                  className="bi bi-award"
                                  style={{
                                    fontSize: "1rem",
                                    color: "#6c63ff",
                                  }}
                                ></i>
                              </div>
                              <span
                                style={{
                                  fontSize: "0.65rem",
                                  fontWeight: "500",
                                  color: "#330369",
                                }}
                              >
                                Sertifikat
                              </span>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ProgramSertifikasiComponent;
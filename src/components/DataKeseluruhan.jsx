import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { FaUserFriends, FaGraduationCap, FaChalkboardTeacher, FaBook } from "react-icons/fa";

const DataKeseluruhan = () => {
  const stats = [
    { id: 1, icon: <FaUserFriends size={20} />, count: 1200, label: "Member Terdaftar" },
    { id: 2, icon: <FaGraduationCap size={20} />, count: 950, label: "Member Lulus" },
    { id: 3, icon: <FaChalkboardTeacher size={20} />, count: 45, label: "Mentor" },
    { id: 4, icon: <FaBook size={20} />, count: 30, label: "Program" },
  ];

  const floatingShapes = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: Math.random() * 5 + 3,
    shape: ["circle", "square", "triangle"][Math.floor(Math.random() * 3)],
  }));

  return (
    <motion.section
      className="data-section py-4 position-relative"
      style={{
        background: "linear-gradient(to bottom, #4a148c 0%, #7e57c2 100%)",
        overflow: "hidden",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Elemen Dekoratif Bergerak */}
      {floatingShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`floating-shape ${shape.shape}`}
          style={{
            position: "absolute",
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            top: `${shape.y}%`,
            left: `${shape.x}%`,
            background: shape.shape === "circle" ? "#FDD100" : "#FFFFFF",
            borderRadius: shape.shape === "circle" ? "50%" : "0%",
            clipPath: shape.shape === "triangle" ? "polygon(50% 0%, 0% 100%, 100% 100%)" : "none",
            opacity: 0.6,
            zIndex: 0,
          }}
          animate={{
            y: [shape.y, shape.y - 10, shape.y],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            repeatType: "mirror",
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <Container className="position-relative" style={{ zIndex: 1 }}>
        <motion.div
          className="text-center mb-4"
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-white fw-bold mb-2" style={{ fontSize: "1.5rem" }}>
            Data Keseluruhan
          </h2>
          <div className="d-flex justify-content-center">
            <motion.div
              className="bg-fdd100"
              style={{ width: "50px", height: "2px", borderRadius: "1px", background: "#FDD100" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>

        <Row className="g-3 justify-content-center">
          {stats.map((stat, index) => (
            <Col key={stat.id} xl={3} lg={3} md={6} sm={6} className="mb-2 mb-lg-0">
              <motion.div
                className="h-100 p-3 text-center rounded-3"
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                  cursor: "pointer",
                }}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 + 0.2 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
              >
                <div
                  className="d-inline-flex align-items-center justify-content-center mb-2 p-2 rounded-circle"
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "#FDD100",
                    color: "#4a148c",
                    fontSize: "1.2rem",
                  }}
                >
                  {stat.icon}
                </div>
                <h3
                  className="fw-bold mb-1"
                  style={{
                    color: "#FDD100",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  {stat.count.toLocaleString()}
                </h3>
                <p
                  className="text-white mb-0"
                  style={{
                    fontSize: "0.85rem",
                    opacity: 0.9,
                  }}
                >
                  {stat.label}
                </p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.section>
  );
};

export default DataKeseluruhan;

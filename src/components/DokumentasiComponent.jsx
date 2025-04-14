import { motion } from "framer-motion";
import "../dist/css/main.css";

const DokumentasiComponent = () => {
  return (
    <section className="py-6" >
      <div className="container">
        <motion.div 
          className="text-center mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-3" style={{
            color: "#330369",
            fontSize: "2.5rem",
            fontWeight: "700",
            letterSpacing: "0.5px"
          }}>
            Dokumentasi
          </h2>
          <p className="subtitle" style={{
            color: "#666",
            fontSize: "1.1rem",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            Kegiatan Terbaru yang telah dilaksanakan
          </p>
        </motion.div>

        <div className="row align-items-center g-5">
          <motion.div 
            className="col-md-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 15px 30px rgba(51, 3, 105, 0.15)"
            }}>
              <img 
                src="https://campusdigital.id/assets/images/dokumentasi/1738828594.jpg" 
                className="img-fluid" 
                alt="Dokumentasi"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  transition: "transform 0.5s ease"
                }}
              />
            </div>
          </motion.div>

          <motion.div 
            className="col-md-6 text-center text-md-start"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 style={{
              color: "#330369",
              fontSize: "1.5rem",
              fontWeight: "600",
              marginBottom: "0rem",
              lineHeight: "1.4"
            }}>
              Documentation for Each Activity
            </h3>
            <p style={{
              color: "#666",
              fontSize: "1rem",
              marginBottom: "2rem",
              lineHeight: "1.7"
            }}>
              Dokumentasi dari Event Event Campus Digital
            </p>
            <motion.a
              href="/galery"
              className="d-inline-block"
              whileHover={{ 
                backgroundColor: "#330369",
                color: "#FDD100"
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: "#FDD100",
                color: "#330369",
                border: "none",
                borderRadius: "8px",
                padding: "12px 30px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(51, 3, 105, 0.2)",
                textDecoration: "none"
              }}
            >
              <i className="fas fa-eye me-2" style={{ fontSize: "1rem" }}></i> 
              Lihat Selengkapnya
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DokumentasiComponent;
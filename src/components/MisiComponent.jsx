import { motion } from "framer-motion";
import "../dist/css/main.css";

const MisiComponent = () => {
  return (
    <motion.div 
      className="col-lg-4 d-flex mb-4 mb-lg-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="card h-100 w-100 border-0" style={{
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(51, 3, 105, 0.1)"
      }}>
        <div className="p-4" style={{
          background: "linear-gradient(135deg, #5a2a96 0%, #330369 100%)",
          textAlign: "center"
        }}>
          <motion.img 
            src="https://campusdigital.id/assets/images/icon/guidance.png" 
            alt="Misi Icon"
            className="img-fluid"
            style={{
              width: "60px",
              height: "60px",
              objectFit: "contain",
              filter: "brightness(0) invert(1)"
            }}
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
        
        <div className=" p-4">
          <h3 className="mb-3" style={{
            color: "#330369",
            fontWeight: "700",
            fontSize: "1.5rem",
            textAlign: "center"
          }}>
            Misi
          </h3>
          
          <ul className="list-unstyled " style={{
            paddingLeft: "1rem",
            color: "#555",
            lineHeight: "1.7"
          }}>
            {[
              "Menyediakan layanan program Pendidikan dan pelatihan yang berkualitas",
              "Membangun karakter sumber daya manusia yang kompeten dan profesional",
              "Membangun tim yang solid, unggul, dan amanah",
              "Menyajikan solusi bagi semua mitra bisnis untuk meraih cita-cita mulianya",
              "Menjadi model pengelolaan bisnis yang menguntungkan dan mensejahterakan"
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="mb-2 d-flex align-items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <span className="me-2" style={{
                  display: "inline-block",
                  width: "24px",
                  height: "24px",
                  backgroundColor: "#FDD100",
                  borderRadius: "50%",
                  color: "#330369",
                  fontWeight: "bold",
                  textAlign: "center",
                  lineHeight: "24px",
                  fontSize: "0.8rem",
                  flexShrink: 0,
                  marginTop: "3px"
                }}>
                  {index + 1}
                </span>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
        
        <motion.div 
          className="card-footer bg-transparent border-0 p-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="btn w-100" style={{
            backgroundColor: "#FDD100",
            color: "#330369",
            fontWeight: "600",
            borderRadius: "8px",
            padding: "10px",
            border: "none"
          }}>
            Pelajari Misi Kami
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MisiComponent;
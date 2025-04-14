import { motion } from "framer-motion";
import "../dist/css/main.css";

const VisiComponent = () => {
  return (
    <motion.div 
      className="col-lg-4 d-flex mb-4 mb-lg-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="card h-100 w-100 border-0" style={{
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(51, 3, 105, 0.1)"
      }}>
        <div className="p-4" style={{
          background: "linear-gradient(135deg, #330369 0%, #5a2a96 100%)",
          textAlign: "center"
        }}>
          <motion.img 
            src="https://campusdigital.id/assets/images/icon/dart.png" 
            alt="Visi Icon"
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
            fontSize: "1.5rem"
          }}>
            Visi
          </h3>
          
          <p className="mb-0" style={{
            color: "#555",
            lineHeight: "1.7",
            fontSize: "1rem"
          }}>
            Menjadi perusahaan yang unggul dan terpercaya dalam pelayanan jasa Pendidikan dan Pelatihan di bidang Teknologi Digital dan Bisnis
          </p>
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
            Pelajari Lebih Lanjut
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VisiComponent;
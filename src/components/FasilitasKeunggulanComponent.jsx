import { motion } from "framer-motion";
import { 
  FaMosque, FaDesktop, FaBook, FaWind, FaEye,
  FaChalkboardTeacher, FaVideo, FaBriefcase, FaCertificate, 
  FaMapMarkerAlt, FaHandshake, FaUserClock, FaCoins, FaCheckCircle  
} from "react-icons/fa";
import "../dist/css/main.css";

// Variants untuk animasi
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const fadeInUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeIn"
    }
  }
};

const FasilitasKeunggulanComponent = () => {
  // Data for physical facilities
  const physicalFacilities = [
    { icon: <FaMosque size={40} />, title: "Musholla", desc: "Tempat ibadah yang nyaman" },
    { icon: <FaEye size={40} />, title: "LED Proyektor", desc: "Alat presentasi modern" },
    { icon: <FaDesktop size={40} />, title: "Komputer & Internet", desc: "Fasilitas komputer lengkap" },
    { icon: <FaWind size={40} />, title: "Ruangan Ber-AC", desc: "Belajar dalam kenyamanan" },
    { icon: <FaBook size={40} />, title: "E-Learning", desc: "Materi digital lengkap" }
  ];

  // Data for advantages
  const advantages = [
    { icon: <FaChalkboardTeacher size={20} />, text: "Instruktur yang tersertifikasi" },
    { icon: <FaVideo size={20} />, text: "Video Pembelajaran yang aplikatif" },
    { icon: <FaBriefcase size={20} />, text: "Peluang berkarir di Perusahaan mitra" },
    { icon: <FaCertificate size={20} />, text: "Pengelola dan instruktur tersertifikasi" },
    { icon: <FaCheckCircle size={20} />, text: "Modul Pembelajaran selalu up to date" },
    { icon: <FaMapMarkerAlt size={20} />, text: "Lokasi yang strategis dan mudah dijangkau" },
    { icon: <FaHandshake size={20} />, text: "Kerjasama dengan instansi pemerintah maupun swasta" },
    { icon: <FaCertificate size={20} />, text: "Peserta berkesempatan mendapatkan sertifikasi kompetensi" },
    { icon: <FaUserClock size={20} />, text: "Waktu belajar yang fleksibel bisa belajar kapan dan dimana saja" },
    { icon: <FaCoins size={20} />, text: "Program affiliate yang memberi potensi penghasilan" }
  ];

  return (
    <div className="fasilitas-keunggulan-page" style={{ overflowX: 'hidden' }}>
      {/* Hero Section */}
      <section className="hero-section py-5" style={{ 
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        paddingTop: '80px'
      }}>
        <div className="container">
          <div className="row align-items-center g-4">
            <motion.div 
              className="col-lg-6 order-2 order-lg-1"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <motion.h1 
                className="display-5 fw-bold mb-3" 
                style={{ color: "#330369" }}
                variants={fadeInUp}
              >
                Fasilitas & Keunggulan
              </motion.h1>
              <motion.p 
                className="lead mb-4" 
                style={{ color: "#5a2a96" }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                Dukungan lengkap untuk pembelajaran digital yang optimal
              </motion.p>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(253, 209, 0, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="btn"
                style={{
                  backgroundColor: "#FDD100",
                  color: "#330369",
                  border: "none",
                  padding: "12px 30px",
                  fontWeight: "600",
                  borderRadius: "8px"
                }}
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
              >
                Jelajahi Fasilitas
              </motion.button>
            </motion.div>

            <motion.div 
              className="col-lg-6 order-1 order-lg-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2,
                type: "spring",
                damping: 10,
                stiffness: 100
              }}
            >
              <img 
                className="img-fluid rounded-4 shadow" 
                src="https://campusdigital.id/assets/images/illustration/5237.png" 
                alt="Fasilitas & Keunggulan" 
                style={{ maxHeight: "350px", width: "auto" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Physical Facilities Section */}
      <motion.section 
        className="py-5 mb-5" 
        style={{ backgroundColor: "#faf9ff" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div 
            className="p-4 p-lg-5 rounded-4 shadow-sm"
            style={{ backgroundColor: "white" }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div className="text-center mb-5" variants={itemVariants}>
              <h2 className="fw-bold mb-3" style={{ color: "#330369" }}>Fasilitas Fisik</h2>
              <p className="lead" style={{ color: "#5a2a96" }}>
                Sarana pendukung pembelajaran yang modern dan nyaman
              </p>
            </motion.div>

            <motion.div 
              className="row g-4 justify-content-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {physicalFacilities.map((facility, index) => (
                <motion.div 
                  key={index}
                  className="col-md-4 col-lg-2"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <div className="text-center p-3 h-100">
                    <motion.div 
                      className="icon-wrapper mb-3 p-3 rounded-3" 
                      style={{ 
                        backgroundColor: "rgba(75, 0, 130, 0.1)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                      whileHover={{ 
                        rotate: [0, 10, -10, 0],
                        scale: 1.1,
                        transition: { duration: 0.5 }
                      }}
                    >
                      <div style={{ color: "#4B0082" }}>
                        {facility.icon}
                      </div>
                    </motion.div>
                    <h5 className="fw-semibold mb-1" style={{ color: "#330369" }}>
                      {facility.title}
                    </h5>
                    <p className="small text-muted mb-0">{facility.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Advantages Section */}
      <motion.section 
        className="py-5 my-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div 
            className="bg-white p-4 p-md-5 rounded-4 shadow-sm"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-center mb-5 fw-bold" 
              style={{ color: "#330369" }}
              variants={fadeInUp}
            >
              Keunggulan Layanan Kami
            </motion.h2>
            
            <motion.div 
              className="row g-4"
              variants={containerVariants}
            >
              {advantages.map((advantage, index) => (
                <motion.div 
                  key={index}
                  className="col-md-6"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="d-flex align-items-start p-3 rounded-3" style={{ 
                    backgroundColor: "rgba(253, 209, 0, 0.1)",
                    borderLeft: "3px solid #FDD100"
                  }}>
                    <motion.span 
                      className="me-3 mt-1" 
                      style={{ 
                        color: "#330369",
                        flexShrink: 0 
                      }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {advantage.icon}
                    </motion.span>
                    <p className="mb-0" style={{ color: "#333" }}>
                      {advantage.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="text-center mt-5"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(51, 3, 105, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="btn"
                style={{
                  backgroundColor: "#330369",
                  color: "white",
                  fontWeight: "600",
                  padding: "12px 30px",
                  borderRadius: "8px",
                  border: "none"
                }}
              >
                Daftar Sekarang
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default FasilitasKeunggulanComponent;
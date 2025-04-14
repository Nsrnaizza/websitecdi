import { motion, useAnimation } from "framer-motion";
import { 
  FaStar, FaChartLine, FaHeart, 
  FaMedal, FaUserTie, FaHandsHelping 
} from "react-icons/fa";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../dist/css/main.css";

const BudayaItem = ({ icon, title, subtitle, desc }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false // Membuat animasi bisa dipicu lagi saat scroll bolak-balik
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
      className="col-md-6 col-lg-4"
    >
      <motion.div 
        className="p-3 h-100 rounded-3 shadow-sm bg-white d-flex"
        whileHover={{ 
          y: -5,
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
        }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <div className="icon-wrapper p-2 rounded-2 d-flex align-items-center" 
          style={{ 
            backgroundColor: "rgba(75, 0, 130, 0.1)",
            minWidth: '60px',
            height: '60px',
            marginRight: '15px'
          }}>
          {icon}
        </div>
        <div>
          <h4 className="h5 fw-bold mb-1" style={{ color: "#330369" }}>
            {title}
            <small className="d-block text-muted">{subtitle}</small>
          </h4>
          <p className="small text-muted mb-0">{desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const BudayaKerjaComponent = () => {
  const budayaItems = [
    {
      icon: <FaStar size={24} className="text-warning" />,
      title: "Commitment",
      subtitle: "Memegang Teguh Komitmen",
      desc: "Memegang teguh komitmen yang telah kami buat, amanah, bertanggung jawab dan saling percaya."
    },
    {
      icon: <FaChartLine size={24} className="text-primary" />,
      title: "Add Value",
      subtitle: "Menambah Nilai",
      desc: "Memberikan nilai tambah bagi pelanggan, mitra bisnis, lingkungan dan masyarakat dunia."
    },
    {
      icon: <FaHeart size={24} className="text-danger" />,
      title: "Mutual Respect",
      subtitle: "Saling Menghormati",
      desc: "Saling menghargai hasil usaha kontribusi pihak lain dengan keterbukaan informasi."
    },
    {
      icon: <FaMedal size={24} className="text-success" />,
      title: "Ultimate",
      subtitle: "Unggul",
      desc: "Melakukan sesuatu melebihi standard untuk memberikan yang terbaik."
    },
    {
      icon: <FaUserTie size={24} className="text-info" />,
      title: "Professional",
      subtitle: "Profesionalisme",
      desc: "Memanfaatkan keahlian untuk pencapaian target secara efektif dan optimal."
    },
    {
      icon: <FaHandsHelping size={24} className="text-purple" />,
      title: "Service Excellent",
      subtitle: "Pelayanan Bermutu",
      desc: "Memberikan pelayanan dengan predikat yang luar biasa."
    }
  ];

  const headerControls = useAnimation();
  const [headerRef, headerInView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (headerInView) {
      headerControls.start("visible");
    } else {
      headerControls.start("hidden");
    }
  }, [headerControls, headerInView]);

  return (
    <div className="budaya-kerja-page" style={{ backgroundColor: '#f8f9fa' }}>
      {/* Hero Section */}
      <section className="py-4" style={{ 
        background: 'linear-gradient(135deg, #330369 0%, #5a2a96 100%)',
        color: 'white',
        paddingTop: '70px'
      }}>
        <div className="container">
          <motion.div
            ref={headerRef}
            initial="hidden"
            animate={headerControls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 }
              }
            }}
            className="row align-items-center g-3"
          >
            <div className="col-lg-6 order-2 order-lg-1">
              <h1 className="display-5 fw-bold mb-2">Budaya Kerja</h1>
              <p className="mb-3">Budaya Kerja Campus Digital</p>
            </div>

            <motion.div 
              className="col-lg-6 order-1 order-lg-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                className="img-fluid rounded-3 shadow" 
                src="https://campusdigital.id/assets/images/illustration/5237.png" 
                alt="Budaya Kerja" 
                style={{ maxHeight: "250px", width: "auto" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-4">
        <div className="container">
          <motion.div 
            className="text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="h4 fw-bold mb-2" style={{ color: "#330369" }}>Nilai-Nilai Budaya Kami</h2>
            <p className="small text-muted">Prinsip yang membimbing setiap tindakan dan keputusan kami</p>
          </motion.div>

          <div className="row g-3">
            {budayaItems.map((item, index) => (
              <BudayaItem 
                key={index}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BudayaKerjaComponent;
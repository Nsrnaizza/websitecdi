import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../dist/css/main.css";

const TimelineItem = ({ color, children, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div 
      ref={ref}
      className="timeline-item position-relative"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: -30 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.15,
            ease: "easeOut"
          }
        }
      }}
    >
      <div 
        className="timeline-badge position-absolute"
        style={{ 
          backgroundColor: color,
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          left: '-10px',
          top: '5px'
        }}
      />
      <motion.div 
        className="timeline-content ps-4"
        whileHover={{ 
          x: 5,
          transition: { type: "spring", stiffness: 300 }
        }}
      >
        <p className="mb-3 small">{children}</p>
      </motion.div>
    </motion.div>
  );
};

const SejarahComponent = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="sejarah-section">
      {/* Hero Section */}
      <section 
        className="hero-section py-4"
        style={{
          background: 'linear-gradient(135deg, #330369 0%, #5a2a96 100%)',
          color: 'white'
        }}
      >
        <div className="container">
          <div className="row align-items-center g-3">
            <motion.div 
              className="col-lg-6 order-2 order-lg-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6,
                type: "spring",
                damping: 10
              }}
            >
              <h1 className="display-5 fw-bold mb-2">Sejarah</h1>
              <h2 className="h4 fw-normal mb-3">Jejak Perjalanan Campus Digital</h2>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200
                }}
              >
 
              </motion.div>
            </motion.div>

            <motion.div 
              className="col-lg-6 order-1 order-lg-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2,
                type: "spring"
              }}
            >
              <img 
                className="img-fluid rounded-3 shadow" 
                src="https://campusdigital.id/assets/images/illustration/5237.png" 
                alt="Sejarah Campus Digital" 
                style={{ maxHeight: "280px", width: "auto" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section 
        className="content-section py-4"
        style={{ backgroundColor: "#faf9ff" }}
      >
        <div className="container">
          <motion.div 
            ref={ref}
            className="bg-white p-3 p-md-4 rounded-3 shadow-sm"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut"
                }
              }
            }}
          >
            <motion.p 
              className="lead mb-4 small"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Era Digital memberi pengaruh terhadap perkembangan teknologi yang sangat cepat. Perkembangan teknologi mendorong setiap pribadi untuk selalu siap berubah dan bertumbuh.
            </motion.p>

            <div className="timeline ps-3">
              <TimelineItem color="#FDD100" index={0}>
                Hadirnya persaingan yang ketat di dunia usaha dan industri menuntut dukungan sumber daya manusia yang professional dan kompeten. Kebutuhan akan SDM yang professional dan kompeten melahirkan Campus Digital untuk menyajikan program pendidikan dan pelatihan.
              </TimelineItem>

              <TimelineItem color="#330369" index={1}>
                Campus Digital merupakan Lembaga Pendidikan dan Pelatihan di bidang bisnis dan teknologi digital. Campus Digital adalah salah satu unit bisnis pada PT Campus Data Media, sebuah perusahaan yang bergerak di bidang Jasa Teknologi Informasi yang beraktifitas sejak tahun 2001.
              </TimelineItem>

              <TimelineItem color="#5a2a96" index={2}>
                Selaras dengan program pemerintah dalam upaya mempersiapkan SDM Unggul. Campus Digital hadir untuk turut serta memberikan pilihan terbaik bagi masyarakat agar bisa mendapatkan akses pendidikan dan pelatihan yang sesuai dengan kebutuhan Industri.
              </TimelineItem>
            </div>

            <motion.div 
              className="highlight-box p-3 mt-3 rounded-2"
              style={{ 
                backgroundColor: "rgba(253, 209, 0, 0.1)", 
                borderLeft: "3px solid #FDD100"
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{
                scale: 1.01,
                boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
              }}
            >
              <p className="mb-0 small">
                Campus Digital bekerjasama dengan instansi pemerintah maupun swasta serta beberapa Industri, Dunia Usaha dan Kerja (IDUKA) dan sekolah. Hal ini terus diupayakan agar sistem pembelajaran terjadi link and Match antara lembaga pendidikan dengan Industri.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SejarahComponent;
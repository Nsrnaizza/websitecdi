import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/afiliasi.png";
import { FaShareAlt, FaUserFriends, FaMoneyBillWave, FaLink } from "react-icons/fa";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// Animasi variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
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

const buttonHover = {
  scale: 1.05,
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
};

const buttonTap = {
  scale: 0.95
};

const AfiliasiPage = () => {
  const [isCopied, setIsCopied] = useState(false);
  const referralLink = "https://campusdigital.id?ref=nisrina";
  
  // Refs untuk scroll animation
  const heroRef = useRef(null);
  const stepsRef = useRef(null);
  const referralRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: false, amount: 0.5 });
  const isStepsInView = useInView(stepsRef, { once: false, amount: 0.3 });
  const isReferralInView = useInView(referralRef, { once: false, amount: 0.3 });

  const steps = [
    {
      icon: <FaShareAlt size={28} />,
      title: "Bagikan Link",
      description: "Sebarkan link referral Anda"
    },
    {
      icon: <FaUserFriends size={28} />,
      title: "Teman Mendaftar",
      description: "Teman daftar via link Anda"
    },
    {
      icon: <FaMoneyBillWave size={28} />,
      title: "Dapatkan Komisi",
      description: "Rp30.000 per pendaftaran"
    }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      });
  };

  return (
    <div className="affiliate-page" style={{ paddingTop: '90px', fontSize: '1.05rem' }}>
      {/* Compact Hero Section */}
      <section 
        className="compact-hero py-5"
        ref={heroRef}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="pe-md-4">
              <motion.h1 
                className="compact-title mb-4" 
                style={{ fontSize: '2.5rem' }}
                initial="hidden"
                animate={isHeroInView ? "visible" : "hidden"}
                variants={itemVariants}
              >
                Afiliasi
              </motion.h1>
              <motion.p 
                className="compact-subtitle mb-3 fs-5"
                initial="hidden"
                animate={isHeroInView ? "visible" : "hidden"}
                variants={itemVariants}
                transition={{ delay: 0.1 }}
              >
                Dapatkan <span className="highlight fw-bold">Rp30.000</span> per pendaftaran
              </motion.p>
              <motion.p 
                className="compact-subtitle mb-4 fs-5"
                initial="hidden"
                animate={isHeroInView ? "visible" : "hidden"}
                variants={itemVariants}
                transition={{ delay: 0.2 }}
              >
                Melalui Kode Refferal
              </motion.p>
            </Col>
            <Col md={6} className="text-center">
              <motion.img 
                src={HeroImage} 
                alt="Afiliasi" 
                className="compact-img img-fluid"
                style={{ maxWidth: '90%' }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* How It Works */}
      <section 
        className="how-it-works py-5 bg-light"
        ref={stepsRef}
      >
        <Container>
          <motion.h2 
            className="section-title mb-5 text-center fw-bold"
            style={{ fontSize: '2rem' }}
            initial="hidden"
            animate={isStepsInView ? "visible" : "hidden"}
            variants={itemVariants}
          >
            Cara Kerjanya
          </motion.h2>
          <Row className="steps g-4">
            {steps.map((step, index) => (
              <Col lg={4} md={12} key={index} className="step">
                <motion.div 
                  className="step-card p-4 text-center h-100"
                  style={{ 
                    borderRadius: '12px',
                    fontSize: '1.1rem'
                  }}
                  initial="hidden"
                  animate={isStepsInView ? "visible" : "hidden"}
                  variants={itemVariants}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 12px 25px rgba(0,0,0,0.1)"
                  }}
                >
                  <motion.div 
                    className="step-icon mb-4 text-primary"
                    whileHover={{ scale: 1.15 }}
                  >
                    {step.icon}
                  </motion.div>
                  <h3 className="mb-3 fw-bold" style={{ fontSize: '1.3rem' }}>{step.title}</h3>
                  <p className="text-muted mb-0">{step.description}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Referral Link */}
      <section 
        className="referral py-5"
        ref={referralRef}
      >
        <Container className="px-lg-5">
          <motion.h2 
            className="section-title mb-5 text-center fw-bold"
            style={{ fontSize: '2rem' }}
            initial="hidden"
            animate={isReferralInView ? "visible" : "hidden"}
            variants={itemVariants}
          >
            Link Referral Anda
          </motion.h2>
          <motion.div 
            className="link-box p-3 d-flex align-items-center"
            style={{
              borderRadius: '10px',
              fontSize: '1.1rem'
            }}
            initial="hidden"
            animate={isReferralInView ? "visible" : "hidden"}
            variants={itemVariants}
            whileHover={{ boxShadow: "0 5px 20px rgba(0,0,0,0.1)" }}
          >
            <FaLink className="link-icon me-3 fs-5" />
            <span className="flex-grow-1 fw-medium">{referralLink}</span>
            <motion.button 
              className={`copy-btn ${isCopied ? 'copied' : ''} fs-5`}
              style={{
                padding: '10px 20px',
                fontSize: '1rem'
              }}
              onClick={copyToClipboard}
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              {isCopied ? 'Tersalin!' : 'Salin'}
            </motion.button>
          </motion.div>
          
          <AnimatePresence>
            {isCopied && (
              <motion.p 
                className="text-center text-success mt-3 fs-5"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                Link berhasil disalin!
              </motion.p>
            )}
          </AnimatePresence>
        </Container>
      </section>
    </div>
  );
};

export default AfiliasiPage;
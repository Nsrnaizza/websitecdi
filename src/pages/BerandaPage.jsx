import { Container, Row, Col, Button, Accordion } from "react-bootstrap";
import HeroImage from "../assets/img/person-2.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../dist/css/main.css";
import MitraComponent from "../components/MitraComponent";
import DokumentasiComponent from "../components/DokumentasiComponent";
import TestimoniComponent from "../components/TestimoniComponent";
import AdvertisementCarousel from "../components/AdvertisementCarousel";
import DataKeseluruhan from "../components/DataKeseluruhan";
import FinisherHeader1 from "../components/FinisherHeader1";


const HomePage = () => {
  let navigate = useNavigate();
  

  const mentorSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

 
  

  return (
    <div className="berandapage">
<header className="w-100 min-vh-100 d-flex align-items-center position-relative" style={{ background: "none" }}>
        {/* Animasi Background */}
        <FinisherHeader1 />

        {/* Kontainer utama */}
        <Container className="position-relative" style={{ zIndex: 2 }}>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            
            {/* Tambahkan Hero Image */}
            <Col lg={6} className="text-center">
              <motion.img src={HeroImage} alt="Hero" className="img-fluid rounded" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 1 }} />
            </Col>
            
            <Col lg={6}>
              <motion.h1 className="mb-4" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{ color: "#330369", fontWeight: "bold" }}>
                Temukan <br /> <span> Bakat Kreatifmu </span> <br /> Bersama Kami!
              </motion.h1>
              <motion.p className="mb-4" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} style={{ color: "#555", fontSize: "1.2rem" }}>
                Digital Technology & Business Class. Mari bergabung bersama kami untuk mendapatkan ilmunya!
              </motion.p>
              <motion.button
                className="btn btn-primary"
                style={{ backgroundColor: "#330369", borderColor: "#330369", color: "#fff", padding: "10px 20px", fontSize: "1.1rem" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate("/register")}
              >
                Daftar
              </motion.button>
            </Col>
          </Row>
        </Container>
      </header>

      <AdvertisementCarousel />

<DataKeseluruhan />

      
<section className="cards-section py-5" style={{ backgroundColor: "#f8f9fa" }}>
  <Container>
    <h1 className="text-center mb-5" style={{ 
      color: "#2a0d45", 
      fontSize: "2rem", 
      fontWeight: "bold",
      textShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
      Program Reguler
    </h1>
    <Row className="justify-content-center g-4">
      {[
        { 
          image: "https://i.pinimg.com/474x/b0/41/ab/b041abab5f12ce21f693f0bf2e1f895b.jpg",
          subtitle: "Digital Marketing",
          details: [
            { icon: "bi bi-check-square-fill", text: "7 Pertemuan" },
            { icon: "bi bi-check-square-fill", text: "25 Module" }
          ],
          link: "reguler/digital-marketing",
          bgColor: "#ffffff",
          textColor: "#330369"
        },
        { 
          image: "https://i.pinimg.com/474x/cd/1e/b0/cd1eb0a08e1d80ab4a8134107ab36d79.jpg",
          subtitle: "Graphic Design", 
          details: [
            { icon: "bi bi-check-square-fill", text: "7 Pertemuan" },
            { icon: "bi bi-check-square-fill", text: "25 Module" }
          ],
          link: "reguler/graphic-design",
          bgColor: "#ffffff",
          textColor: "#330369"
        },
        { 
          image: "https://i.pinimg.com/474x/53/20/fd/5320fdc8fdfabc225921993f8fd45fbd.jpg",
          subtitle: "Operator Komputer",
          details: [
            { icon: "bi bi-check-square-fill", text: "7 Pertemuan" },
            { icon: "bi bi-check-square-fill", text: "25 Module" }
          ],
          link: "reguler/operator-komputer",
          bgColor: "#ffffff",
          textColor: "#330369"
        },
        { 
          image: "https://i.pinimg.com/736x/d2/88/85/d28885b71b83839b5571a6ef566c1b3e.jpg",
          subtitle: "Web Designer",
          details: [
            { icon: "bi bi-check-square-fill", text: "7 Pertemuan" },
            { icon: "bi bi-check-square-fill", text: "25 Module" }
          ],
          link: "reguler/web-designer",
          bgColor: "#ffffff",
          textColor: "#330369"
        }
      ].map((card, index) => (
        <Col xs={12} sm={6} md={6} lg={3} key={index}>
          <motion.div 
            whileHover={{ 
              y: -10,
              boxShadow: "0 15px 30px rgba(0,0,0,0.15)"
            }}
            className="h-100"
          >
            <a href={card.link} className="w-100 text-decoration-none h-100 d-block">
              <div 
                className="card border-0 h-100" 
                style={{ 
                  borderRadius: "12px", 
                  overflow: "hidden", 
                  background: card.bgColor,
                  color: "#330369",
                  transition: "all 0.3s ease",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                }}
              >
                <img 
                  src={card.image} 
                  className="card-img-top w-100"
                  style={{
                    height: "180px",
                    objectFit: "cover",
                    borderTopLeftRadius: "11px",
                    borderTopRightRadius: "11px",
                    borderBottom: "3px solid rgba(255,255,255,0.2)"
                  }}
                  alt={card.subtitle}
                />
                <div className="p-3" style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
                  <h5 className="text-center mb-3" style={{ 
                    fontSize: "1.1rem", 
                    fontWeight: "600",
                    letterSpacing: "0.5px"
                  }}>
                    {card.subtitle}
                  </h5>
                  <div className="d-flex justify-content-around align-items-center">
                    {card.details.map((detail, i) => (
                      <div key={i} className="d-flex align-items-center" style={{ gap: "5px" }}>
                        <i className={`bi ${detail.icon}`} style={{ 
                          fontSize: "1rem", 
                          color: "#ffffff",
                          filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.2))"
                        }}></i>
                        <span style={{ 
                          fontSize: "0.8rem",
                          fontWeight: "500"
                        }}>
                          {detail.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        </Col>
      ))}
    </Row>
    <div className="text-center mt-4">
      <Button 
        onClick={() => navigate("/program-reguler")}
        style={{backgroundColor: "transparent",color: "#2a0d45",border: "2px solid #2a0d45", padding: "8px 30px",fontWeight: "600",borderRadius: "8px",transition: "all 0.3s ease", boxShadow: "none"}}
        className="hover-effect"
      >
        Lihat Semua
      </Button>
    </div>
  </Container>
</section>

<section className="cards-section py-3" style={{ backgroundColor: "#f8f9fa" }}>
  <Container>
    <h1 className="text-center mb-5" style={{ 
      color: "#2a0d45", 
      fontSize: "2rem", 
      fontWeight: "bold",
      textShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
      Program Corporate
    </h1>
    <Row className="justify-content-center g-4">
      {[
        { 
          image: "https://i.pinimg.com/474x/e1/4e/bd/e14ebd1396c089ca5d97d0e53a6cd3c5.jpg",
          subtitle: "Kompetensi Digital...",
          details: [
            { icon: "bi bi-check-square-fill", text: "7 Pertemuan" },
            { icon: "bi bi-check-square-fill", text: "25 Module" }
          ],
          link: "corporate/kompetensi-digital-marketing",
          bgColor: "#ffffff",

        },
        { 
          image: "https://i.pinimg.com/474x/9a/d8/bf/9ad8bfcc9b44c4f67be0e82970ce590b.jpg",
          subtitle: "Praktek Kerja Industri",
          details: [
            { icon: "bi bi-check-square-fill", text: "7 Pertemuan" },
            { icon: "bi bi-check-square-fill", text: "25 Module" }
          ],
          link: "corporate/praktek-kerja-industri",
          bgColor: "#ffffff",
        },
        { 
          image: "https://i.pinimg.com/474x/e1/4e/bd/e14ebd1396c089ca5d97d0e53a6cd3c5.jpg",
          subtitle: "Industri Teknologi...",
          details: [
            { icon: "bi bi-check-square-fill", text: "7 Pertemuan" },
            { icon: "bi bi-check-square-fill", text: "25 Module" }
          ],
          link: "corporate/industri-teknologi-digital",
          bgColor: "#ffffff",
        },
        { 
          image: "https://i.pinimg.com/474x/9a/d8/bf/9ad8bfcc9b44c4f67be0e82970ce590b.jpg",
          subtitle: "Training For Trainer",
          details: [
            { icon: "bi bi-check-square-fill", text: "7 Pertemuan" },
            { icon: "bi bi-check-square-fill", text: "25 Module" }
          ],
          link: "corporate/training-for-trainer",
          bgColor: "#ffffff",
        }
      ].map((card, index) => (
        <Col xs={12} sm={6} md={6} lg={3} key={index}>
          <motion.div 
            whileHover={{ 
              y: -10,
              boxShadow: "0 15px 30px rgba(0,0,0,0.15)"
            }}
            className="h-100"
          >
            <a href={card.link} className="w-100 text-decoration-none h-100 d-block">
              <div 
                className="card border-0 h-100" 
                style={{ 
                  borderRadius: "12px", 
                  overflow: "hidden", 
                  background: card.bgColor,
                  color: "#330369",
                  transition: "all 0.3s ease",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                }}
              >
                <img 
                  src={card.image} 
                  className="card-img-top w-100"
                  style={{
                    height: "180px",
                    objectFit: "cover",
                    borderTopLeftRadius: "11px",
                    borderTopRightRadius: "11px",
                    borderBottom: "3px solid rgba(255,255,255,0.2)"
                  }}
                  alt={card.subtitle}
                />
                <div className="p-3" style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
                  <h5 className="text-center mb-3" style={{ 
                    fontSize: "1.1rem", 
                    fontWeight: "600",
                    letterSpacing: "0.5px"
                  }}>
                    {card.subtitle}
                  </h5>
                  <div className="d-flex justify-content-around align-items-center">
                    {card.details.map((detail, i) => (
                      <div key={i} className="d-flex align-items-center" style={{ gap: "5px" }}>
                        <i className={`bi ${detail.icon}`} style={{ 
                          fontSize: "1rem", 
                          color: "#ffffff",
                          filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.2))"
                        }}></i>
                        <span style={{ 
                          fontSize: "0.8rem",
                          fontWeight: "500"
                        }}>
                          {detail.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        </Col>
      ))}
    </Row>
    <div className="text-center mt-4">
      <Button 
        onClick={() => navigate("/program-corporate")}
        style={{
          backgroundColor: "transparent",
          color: "#2a0d45",
          border: "2px solid #2a0d45",
          padding: "8px 30px",
          fontWeight: "600",
          borderRadius: "8px",
          transition: "all 0.3s ease"
        }}
        className="hover-effect"
      >
        Lihat Semua
      </Button>
    </div>
  </Container>

  
</section>
<section className="cards-section py-3" style={{ backgroundColor: "#f8f9fa" }}>
  <Container>
    <h1 className="text-center mb-5" style={{ 
      color: "#2a0d45", 
      fontSize: "2rem", 
      fontWeight: "bold",
      textShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
      Program Profesi 1 Tahun
    </h1>
    <Row className="justify-content-start g-4">
      {[
        { 
          image: "https://i.pinimg.com/474x/13/52/45/1352456e390074c4815c148cc200a767.jpg", 
          title: "Program 7", 
          details: [
            { icon: "bi bi-check-square-fill", text: "7 Pertemuan" },
            { icon: "bi bi-check-square-fill", text: "25 Module" }
          ],
          link: "profesi/technopreneur" 
        },
        { 
          image: "https://i.pinimg.com/474x/13/52/45/1352456e390074c4815c148cc200a767.jpg", 
          title: "Program 8", 
          details: [
            { icon: "bi bi-check-square-fill", text: "7 Pertemuan" },
            { icon: "bi bi-check-square-fill", text: "25 Module" }
          ],
          link: "profesi/digital-marketer" 
        },
      ].map((card, index) => (
        <Col xs={12} sm={6} md={6} lg={3} key={index}>
          <motion.div 
            whileHover={{ 
              y: -10,
              boxShadow: "0 15px 30px rgba(0,0,0,0.15)"
            }}
            className="h-100"
          >
            <a href={card.link} className="w-100 text-decoration-none h-100 d-block">
              <div 
                className="card border-0 h-100" 
                style={{ 
                  borderRadius: "12px", 
                  overflow: "hidden", 
                  bgColor: "#ffffff",
                  color: "#330369",
                  transition: "all 0.3s ease",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                }}
              >
                <img 
                  src={card.image} 
                  className="card-img-top w-100"
                  style={{
                    height: "180px",
                    objectFit: "cover",
                    borderTopLeftRadius: "11px",
                    borderTopRightRadius: "11px",
                    borderBottom: "3px solid rgba(255,255,255,0.2)"
                  }}
                  alt={card.title}
                />
                <div className="p-3" style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
                  <h5 className="text-center mb-3" style={{ 
                    fontSize: "1.1rem", 
                    fontWeight: "600",
                    letterSpacing: "0.5px"
                  }}>
                    {card.title}
                  </h5>
                  <div className="d-flex justify-content-around align-items-center">
                    {card.details.map((detail, i) => (
                      <div key={i} className="d-flex align-items-center" style={{ gap: "5px" }}>
                        <i className={detail.icon} style={{ 
                          fontSize: "1rem", 
                          color: "#ffffff",
                          filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.2))"
                        }}></i>
                        <span style={{ 
                          fontSize: "0.8rem",
                          fontWeight: "500"
                        }}>
                          {detail.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        </Col>
      ))}
    </Row>
    <div className="text-center mt-4">
      <Button 
        onClick={() => navigate("/program-profesi")}
        style={{
          backgroundColor: "transparent",
          color: "#2a0d45",
          border: "2px solid #2a0d45",
          padding: "8px 30px",
          fontWeight: "600",
          borderRadius: "8px",
          transition: "all 0.3s ease"
        }}
        className="hover-effect"
      >
        Lihat Semua
      </Button>
    </div>
  </Container>
</section>

<section className="mentor-section py-5" style={{ backgroundColor: "#faf9ff" }}>
  <Container>
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-center mb-2" style={{ 
      color: "#2a0d45", 
      fontSize: "2rem", 
      fontWeight: "bold",
      textShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
        Mentor Kami
      </h1>
      <p className="text-center mb-4" style={{
        color: "#666",
        fontSize: "1.1rem",
        maxWidth: "600px",
        margin: "0 auto",
        lineHeight: "1.6"
      }}>
        Campus Digital memiliki mentor profesional yang ahli di bidangnya masing-masing
      </p>
    </motion.div>

    <Slider {...mentorSettings}>
      {[
        { name: "Faris Fanani", role: "Digital Business Strategy", image: "https://campusdigital.id/assets/images/mentor/1600313439.jpeg" },
        { name: "Randy Rahman H.", role: "Research Expert", image: "https://campusdigital.id/assets/images/mentor/2021-06-15-15-39-41.png" },
        { name: "A. Haris Hanifudin", role: "Blogger Marketing", image: "https://campusdigital.id/assets/images/mentor/2021-09-29-09-11-46.png" },
        { name: "M. Syarifuddin Yusuf", role: "Social Media Specialist", image: "https://campusdigital.id/assets/images/mentor/2021-09-29-09-08-18.png" },
        { name: "Joko Santoso", role: "Digital Analyst", image: "https://campusdigital.id/assets/images/mentor/2021-09-29-09-10-19.png" },
        { name: "Satria Aji Wicaksono", role: "Marketplace Specialist", image: "https://campusdigital.id/assets/images/mentor/2021-09-29-09-11-15.png" },
      ].map((mentor, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -10 }}
        >
          <div className="mentor-card text-center p-4 mx-2" style={{
            background: "white",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(51, 3, 105, 0.1)",
            transition: "all 0.3s ease",
            border: "none",
            cursor: "pointer",
            maxWidth: "240px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid #FDD100",
                boxShadow: "0 4px 15px rgba(253, 209, 0, 0.3)",
                marginBottom: "20px",
                position: "relative"
              }}
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease"
                }}
              />
            </motion.div>
            
            <h6 style={{
              fontWeight: "700",
              color: "#330369",
              fontSize: "1.1rem",
              marginBottom: "8px"
            }}>
              {mentor.name}
            </h6>
            
            <p style={{
              color: "#666",
              fontSize: "0.9rem",
              marginBottom: "16px",
              flexGrow: 1
            }}>
              {mentor.role}
            </p>
            
            {/* <motion.button
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
                padding: "6px 16px",
                fontSize: "0.8rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            >
              Lihat Profile
            </motion.button> */}
          </div>
        </motion.div>
      ))}
    </Slider>
  </Container>
</section>

      <section className="privat-section py-6">
        <Container>
          <h1 className="text-center mb-5" style={{ 
      color: "#2a0d45", 
      fontSize: "2rem", 
      fontWeight: "bold",
      textShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
            Privat dan Kursus Internet Marketing
          </h1>
          <Row className="g-4">
            <Col md={6}>
              <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                  <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <Accordion.Header className="accordion-header-1">Anda Pegawai, Karyawan, Pengusaha atau Siapapun yang Ingin Menambah Penghasilan?</Accordion.Header>
                    <Accordion.Body>
                    Kami ada solusinya!! Belajar Online Marketing bersama kami di Campus Digital, di program Kursus Digital Marketing. Jadikan Bisnis Online sebagai sumber penghasilan Anda!!
                    </Accordion.Body>
                  </motion.div>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col md={6}>
              <Accordion>
                <Accordion.Item eventKey="1">
                  <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <Accordion.Header className="accordion-header-2">Anda Ingin Belajar Bisnis Online Tapi Tidak Cukup Waktu?</Accordion.Header>
                    <Accordion.Body>
                      Kami siapkan SOLUSInya!!! Kursus Digital Marketing yang kami adakan ini sudah kita siapkan untuk Anda yang sibuk. Pegawai, Karyawan, Mahasiswa, atau siapapun yang memiliki keterbatasan waktu. Kita desain sederhana tapi
                      sangat efektif.
                    </Accordion.Body>
                  </motion.div>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col md={6}>
              <Accordion>
                <Accordion.Item eventKey="2">
                  <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <Accordion.Header className="accordion-header-3">Anda Ingin Usaha Sampingan, Tapi Tidak Punya Cukup Waktu? Atau Malah Tidak Cukup Modal?</Accordion.Header>
                    <Accordion.Body>
                      Campus Digital punya jawabannya!!! Bisnis Online. Bisa dikerjakan paruh waktu dan modal yang relatif terjangkau. Dan bisa dikerjakan siapapun dan di manapun. Kami akan memberikan strategi bisnis online tanpa modal
                      besar.
                    </Accordion.Body>
                  </motion.div>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col md={6}>
              <Accordion>
                <Accordion.Item eventKey="3">
                  <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <Accordion.Header className="accordion-header-4">Anda Bingung Kepada Siapa Belajar Online Marketing? Apakah Belajar Online Marketing Harus Mahal?</Accordion.Header>
                    <Accordion.Body>
                      Tidak usah BINGUNG!! Pengajar di Kursus Digital Marketing ini merupakan pengajar pilihan. Merupakan mentor dan supervisor terpilih dari Campus Digital. Pengajar kami bukan hanya mumpuni secara TEORI tapi juga bisnis
                      onlinenya berjalan dan terbukti MENGHASILKAN.
                    </Accordion.Body>
                  </motion.div>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mitra-section">

                  <MitraComponent />

      </section>

      <section className="dokumentasi-section py-5">
        <DokumentasiComponent />
      </section>

      <section className="testimoni-section py-5">
        <TestimoniComponent />
      </section>


      <section className="py-5" style={{ backgroundColor: "#faf9ff" }}>
  <Container>
    <Row className="align-items-center g-3"> {/* Ubah g-4 menjadi g-3 untuk jarak lebih dekat */}
      <Col md={5} className="text-center text-md-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="https://campusdigital.id/assets/images/illustration/5127311.png" 
            alt="Customer Service" 
            className="img-fluid w-100" 
            style={{ 
              borderRadius: "16px",
              boxShadow: "0 10px 25px rgba(51, 3, 105, 0.1)",
              maxWidth: "85%", /* Ubah dari 70% ke 85% agar lebih responsif */
              height: "auto",
              transform: "rotateY(0deg)",
              transition: "transform 0.5s ease"
            }}
            whileHover={{
              transform: "rotateY(10deg)"
            }}
          />
        </motion.div>
      </Col>

      <Col md={7}> {/* Lebih lebar agar teks lebih terkompresi */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="mb-2" style={{ 
            color: "#330369", 
            fontSize: "1.7rem", /* Sedikit lebih kecil agar tidak terlalu besar */
            fontWeight: "700",
            lineHeight: "1.3"
          }}>
            Hubungi Tim Kami
          </h1>
          
          <p className="mb-3" style={{ /* Ubah mb-4 menjadi mb-3 untuk jarak lebih pendek */
            color: "#666",
            fontSize: "1rem",
            lineHeight: "1.5"
          }}>
            Customer Service kami siap membantu Anda mendapatkan informasi lengkap mengenai program-program unggulan Campus Digital.
          </p>

          <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-2"> {/* gap-3 menjadi gap-2 */}
            <motion.a
              href="https://wa.me/62816343742"
              className="text-decoration-none"
              whileHover={{ 
                backgroundColor: "#25D366",
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: "#330369",
                color: "white",
                borderRadius: "8px",
                padding: "10px 18px",
                fontSize: "0.9rem",
                fontWeight: "600",
                transition: "all 0.3s ease",
                boxShadow: "0 5px 15px rgba(37, 211, 102, 0.3)",
                whiteSpace: "nowrap"
              }}
            >
              <i className="bi bi-whatsapp me-2" style={{ fontSize: "1.1rem" }}></i>
              WhatsApp Kami
            </motion.a>

            <div className="d-flex align-items-center" style={{ gap: "8px" }}> {/* gap-10px menjadi gap-8px */}
              <div style={{
                width: "34px", /* Lebih kecil dari 36px */
                height: "34px",
                backgroundColor: "#FDD100",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}>
                <i className="bi bi-telephone" style={{ color: "#330369", fontSize: "1rem" }}></i>
              </div>
              <div>
                <p className="mb-0" style={{ color: "#666", fontSize: "0.9rem" }}>Telepon</p>
                <p className="mb-0" style={{ color: "#330369", fontWeight: "600", fontSize: "0.95rem" }}>+62 816 343 742</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Col>
    </Row>
  </Container>
</section>

    </div>
  );
};

export default HomePage;

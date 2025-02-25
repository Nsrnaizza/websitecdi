import { Container, Row, Col, Button, Accordion } from "react-bootstrap";
import HeroImage from "../assets/img/person.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../dist/css/main.css";
import MitraComponent from "../components/MitraComponent";
import DokumentasiComponent from "../components/DokumentasiComponent";

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
      <header className="w-100 min-vh-100 d-flex align-items-center bg-light">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
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

            {/* Tambahkan Hero Image */}
            <Col lg={6} className="text-center">
              <motion.img src={HeroImage} alt="Hero" className="img-fluid rounded" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 1 }} />
            </Col>
          </Row>
        </Container>
      </header>

      <section className="cards-section py-5">
        <Container>
          <h1 className="text-center mb-5" style={{ color: "#330369" }}>
            Program Reguler
          </h1>
          <Row>
            {[
              { image: "src/assets/img/card1.png", title: "Program 1", text: "Description 1" },
              { image: "src/assets/img/card2.png", title: "Program 2", text: "Description 2" },
              { image: "src/assets/img/card3.png", title: "Program 3", text: "Description 3" },
              { image: "src/assets/img/card4.png", title: "Program 4", text: "Description 4" },
            ].map((card, index) => (
              <Col xs={12} sm={6} md={4} lg={3} key={index}>
                <a href="#" className="w-100" title={card.title} alt={card.title} target="_blank">
                  <motion.div className="card bgc border-0 shadow " style={{ width: "100%", height: "auto", backgroundColor: "#330369" }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <img src={card.image} className="card-img-top w-100 owl-lazy" alt={card.title} />
                    <div className="card bg-light m-3">
                      <div className="card-body d-flex align-items-center justify-content-center">
                        <p className="text-center" style={{ color: "black", textDecoration: "none" }}>
                          {card.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </a>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button variant="link" onClick={() => navigate("/program-reguler")}>
              Lihat Semua
            </Button>
          </div>
        </Container>
      </section>

      <section className="cards-section py-5">
        <Container>
          <h1 className="text-center mb-5" style={{ color: "#330369" }}>
            Program Corporate
          </h1>
          <Row>
            {[
              { image: "src/assets/img/card5.png", title: "Program 3", text: "Description 3" },
              { image: "src/assets/img/card6.png", title: "Program 4", text: "Description 4" },
              { image: "src/assets/img/card7.png", title: "Program 5", text: "Description 5" },
              { image: "src/assets/img/card8.png", title: "Program 6", text: "Description 6" },
            ].map((card, index) => (
              <Col xs={12} sm={6} md={4} lg={3} key={index}>
                <a href="#" className="w-100" title={card.title} alt={card.title} target="_blank">
                  <motion.div className="card bgc border-0 shadow mb-3" style={{ width: "100%", height: "auto", backgroundColor: "#330369" }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <img src={card.image} className="card-img-top w-100 owl-lazy" alt={card.title} />
                    <div className="card bg-light m-3">
                      <div className="card-body d-flex align-items-center justify-content-center">
                        <p className="text-center" style={{ color: "black", textDecoration: "none" }}>
                          {card.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </a>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button variant="link" onClick={() => navigate("/program-corporate")}>
              Lihat Semua
            </Button>
          </div>
        </Container>
      </section>

      <section className="cards-section py-5">
        <Container>
          <h1 className="text-center mb-5" style={{ color: "#330369" }}>
            Program Profesi 1 Tahun
          </h1>
          <Row>
            {[
              { image: "src/assets/img/card9.png", title: "Program 7", text: "Description 7" },
              { image: "src/assets/img/card10.png", title: "Program 8", text: "Description 8" },
            ].map((card, index) => (
              <Col xs={12} sm={6} md={4} lg={3} key={index}>
                <a href="#" className="w-100" title={card.title} alt={card.title} target="_blank">
                  <motion.div className="card bgc border-0 shadow mb-3" style={{ width: "100%", height: "auto", backgroundColor: "#330369" }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <img src={card.image} className="card-img-top w-100 owl-lazy" alt={card.title} />
                    <div className="card bg-light m-3">
                      <div className="card-body d-flex align-items-center justify-content-center">
                        <p className="text-center" style={{ color: "black", textDecoration: "none" }}>
                          {card.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </a>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button variant="link" onClick={() => navigate("/program-profesi")}>
              Lihat Semua
            </Button>
          </div>
        </Container>
      </section>

      <section className="mentor-section py-5">
        <Container>
          <h1 className="text-center mb-3" style={{ color: "#330369" }}>
            Mentor Kami
          </h1>
          <p className="text-center text-muted mb-5">Campus Digital memiliki mentor yang ahli di bidangnya</p>
          <Slider {...mentorSettings}>
            {[
              { name: "Faris Fanani", role: "Digital Business Strategy", image: "src/assets/img/foto.jpg" },
              { name: "Randy Rahman Hussen", role: "Research Expert", image: "src/assets/img/foto.jpg" },
              { name: "A. Haris Hanifudin", role: "Blogger Marketing", image: "src/assets/img/foto.jpg" },
              { name: "M. Syarifuddin Yusuf", role: "Social Media Specialist", image: "src/assets/img/foto.jpg" },
              { name: "Joko Santoso", role: "Digital Analyst", image: "src/assets/img/foto.jpg" },
              { name: "Satria Aji Wicaksono", role: "Marketplace Specialist", image: "src/assets/img/foto.jpg" },
            ].map((mentor, index) => (
              <div
                className="mentor-card text-center p-3 mx-2"
                key={index}
                style={{ transition: "transform 0.3s", cursor: "pointer", maxWidth: "200px", border: "1px solid #ddd", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
              >
                <motion.img
                  src={mentor.image}
                  alt={mentor.name}
                  className="rounded-circle img-fluid mb-2 shadow mentor-image"
                  style={{ width: "80px", height: "80px", objectFit: "cover", transition: "transform 0.3s" }}
                  whileHover={{ transform: "scale(1.1)" }}
                />
                <h6 className="fw-bold">{mentor.name}</h6>
                <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                  {mentor.role}
                </p>
              </div>
            ))}
          </Slider>
        </Container>
      </section>

      <section className="privat-section py-6">
        <Container>
          <h1 className="text-center mb-5" style={{ color: "#330369" }}>
            Privat dan Kursus Internet Marketing
          </h1>
          <Row className="g-4">
            <Col md={6}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <Accordion.Header className="accordion-header-1">Anda Pegawai, Karyawan, Pengusaha Atau Siapapun Yang Ingin Menambah Penghasilan?</Accordion.Header>
                    <Accordion.Body>Kami ada solusinya!! Belajar Online Marketing bersama kami di Campus Digital, di program Kursus Digital Marketing. Jadikan Bisnis Online sebagai sumber penghasilan Anda!!</Accordion.Body>
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
        <div className="container">
          <div className="card custom mb-5 rounded-10">
            <div className="row">
              <div className="col-12">
                <div className="h-100 d-flex text-center" style={{ justifyContent: "center", alignItems: "center", width: "100%" }}>
                  <span>
                    <h2 className="mb-3 mt-4">Mitra Kami</h2>
                    <span>
                      Campus Digital telah dipercaya sebagai lembaga pelatihan digital marketing
                      <br />
                      dengan melahirkan SDM yang memiliki kompetensi.
                    </span>
                  </span>
                </div>
              </div>
              <div className="col-12">
                <div className="feature-item">
                  <MitraComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dokumentasi-section py-5">
        <DokumentasiComponent />
      </section>

      <section className="hubungi-section py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img src="https://campusdigital.id/assets/images/illustration/5127311.png" alt="Customer Service" className="img-fluid" style={{ borderRadius: "10px", maxWidth: "80%" }} />
            </Col>
            <Col md={6}>
              <h1 className="mb-3" style={{ color: "#330369", fontSize: "1.5rem" }}>
                Hubungi Kami
              </h1>
              <p className="text-muted mb-4" style={{ fontSize: "0.9rem" }}>
                Customer Service Kami Siap Membantu Anda untuk Mendapatkan Informasi Lebih Lanjut Mengenai Program-Program Campus Digital
              </p>
              <Button variant="success" className="d-flex align-items-center" href="https://wa.me/nomor_wa_anda" target="_blank" style={{ borderRadius: "5px", fontSize: "0.9rem" }}>
                <i className="bi bi-whatsapp" style={{ fontSize: "1.2rem", marginRight: "10px" }}></i>
                Hubungi Kami via WhatsApp
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;

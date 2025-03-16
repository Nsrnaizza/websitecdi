import { Container, Row, Col } from "react-bootstrap";
import "../dist/css/main.css";
import HeroImage from "../assets/img/reguler.png";
import { Fade } from "react-awesome-reveal";

const RegularProgramComponent = () => {
  const cards = [
    { image: "src/assets/img/card1.png", title: "Digital Marketing", text: "Digital marketing adalah serangkaian strategi pemasaran yang dilakukan secara online...", link: "reguler/digital-marketing" },
    { image: "src/assets/img/card2.png", title: "Graphic Design", text: "Program pelatihan dan pembelajaran praktis desain grafis. Anda akan belajar teknik desain...", link: "reguler/graphic-design" },
    { image: "src/assets/img/card3.png", title: "Komputer Perkan...", text: "Program pelatihan dan pembelajaran praktis komputer perkantoran...", link: "reguler/operator-komputer" },
    { image: "src/assets/img/card4.png", title: "Web Designer", text: "Program Pelatihan dan Pembelajaran praktis membuat website...", link: "reguler/web-designer" },
    { image: "src/assets/img/card11.png", title: "Web Developer", text: "Seorang web developer adalah seseorang yang terlibat dalam pembuatan...", link: "reguler/web-developer" },
    { image: "src/assets/img/card12.png", title: "Video Editor", text: "Pelatihan video editor membuka pintu bagi peluang karir yang menjanjikan...", link: "reguler/video-editor" },
    { image: "src/assets/img/card13.png", title: "Fotografi", text: "Pelatihan fotografi memberikan kesempatan untuk mengembangkan keterampilan...", link: "reguler/photography" },
    { image: "src/assets/img/card14.png", title: "Multimedia", text: "Pelatihan multimedia memberikan Anda keterampilan yang diperlukan...", link: "reguler/multimedia" },
    { image: "src/assets/img/card15.png", title: "Game Developer", text: "Dengan pelatihan game development yang baik, Anda dapat mengembangkan...", link: "reguler/game-developer" },
    { image: "src/assets/img/card16.png", title: "Social Media Spe...", text: "Program pelatihan dan pembelajaran praktis social media specialist...", link: "reguler/social-media-specialist" },
    { image: "src/assets/img/card17.png", title: "Mobile Programmer", text: "Menguasai bahasa pemrograman mobile dan mampu mengembangkan aplikasi...", link: "reguler/mobile-programing" },
    { image: "src/assets/img/card22.jpeg", title: "Junior Computer...", text: "Sertifikasi BNSP berlaku Nasional4x Pertemuan PelatihanSertifikat Pelatihan...", link: "reguler/junior-computer" },
  ];

  return (
    <Container>
      <header className="w-100 min-vh-10 d-flex align-items-center hero-section">
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg={6}>
              <Fade left>
                <h1 className="title">Program Reguler</h1>
                <h4 className="fw-normal">
                  Daftar program pelatihan reguler
                  <br />
                  yang tersedia untuk Anda
                </h4>
              </Fade>
            </Col>
            <Col lg={6} className="text-center">
              <Fade right>
                <img src={HeroImage} alt="Afiliasi" className="img-fluid hero-img animated-hero" />
              </Fade>
            </Col>
          </Row>
        </Container>
      </header>
      
      <Row className="justify-content-center mt-5">
        {cards.map((card, index) => (
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4" key={index}>
            <Fade bottom>
              <div className="card shadow-lg border-0 rounded-3 p-2" style={{ height: "27rem", width: "16rem", minHeight: "20rem" }}>
                <img src={card.image} className="card-img-top w-100 owl-lazy" alt={card.title} />
                
                {/* Wrapper teks dengan align-items-start untuk memastikan rata kiri */}
                <div className="m-2 d-flex flex-column align-items-start p-1" style={{ width: "100%" }}>
                  <h5 className="text-truncate" 
                      style={{ fontSize: "1.07rem", color: "black", fontWeight: "bold",  marginTop: "-12px", lineHeight: "1.3",  textAlign: "left"  }}> {card.title}
                  </h5>
                  <p className="text-muted text-truncate-3"  
                     style={{ fontSize: "0.84rem",color: "black", textDecoration: "none",textAlign: "left",marginTop: "-5px",wordBreak: "break-word"}}>{card.text}
                  </p>
                </div>

                <a href={card.link} className="btn mt-0 m-5" 
                   style={{ backgroundColor: "#d3b8f7", borderColor: "#dcc8f4", color: "#330369" }}>
                  Selengkapnya
                </a>
              </div>
            </Fade>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RegularProgramComponent;

import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/afiliasi.png";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div className="berandapage">
      {/* Hero Section */}
      <header className="w-100 min-vh-100 d-flex align-items-center hero-section">
        <Container>
          <Row className="d-flex align-items-center">
            {/* Kolom Kiri - Teks */}
            <Col lg={6}>
              <h1 className="title">Afiliasi</h1>
              <p className="description">
                Dapatkan komisi sebesar <strong>Rp.30.000</strong><br />
                Setiap pendaftaran melalui kode referral
              </p>
            </Col>

            {/* Kolom Kanan - Gambar */}
            <Col lg={6} className="text-center">
              <img src={HeroImage} alt="Afiliasi" className="img-fluid hero-img" />
            </Col>
          </Row>
        </Container>
      </header>
      <section className="how-it-works py-5">
        <Container className="text-center">
          <h2 className="section-title">Bagaimana Caranya?</h2>
          <p className="section-description">
            Program afiliasi merupakan program dimana Anda dapat menerima komisi dari kami dengan cara 
            memberikan referensi <strong>Campus Digital</strong> kepada teman, relasi, atau pengunjung website Anda. 
            Kemudian pihak yang Anda referensikan tersebut melakukan order & pembayaran. 
            Komisi diberikan sebesar <strong>Rp.30.000</strong> setiap pendaftaran yang berhasil transfer. 
            Fasilitas member untuk mereferensikan yaitu dengan adanya sistem URL Referral, dimana setiap 
            member akan mendapatkannya.
          </p>
          <p className="mt-3"><strong>Contoh URL Referral adalah:</strong></p>
          <div className="referral-link bg-lightblue p-3 rounded d-inline-block">
            <a href="https://campusdigital.id?ref=masagung" className="referral-text">
              https://campusdigital.id?ref=masagung
            </a>
          </div>
          <p className="mt-3">
            Setiap member yang daftar melalui URL Referral Anda, maka bonus atau komisi akan otomatis masuk 
            ke dalam data komisi yang kemudian bisa diambil kapan saja.
          </p>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;

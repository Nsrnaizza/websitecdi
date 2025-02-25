import { Container, Row, Col, Button, InputGroup, Form } from "react-bootstrap";
import HeroImage from "../assets/img/afiliasi.png";
import { useNavigate } from "react-router-dom";
import { BsSearch, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState, useRef } from "react";

const ArtikelPage = () => {
  let navigate = useNavigate();
  const [categories] = useState(["Semua Kategori", "Tak Berkategori", "Tips dan Trik", "Seo", "Website", "Sosial Media", "Marketplace", "Sertifikasi", "Pelatihan", "Ebook"]);
  const [searchQuery, setSearchQuery] = useState("");
  const scrollRef = useRef(null);

  // Fungsi untuk scroll ke kiri
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -150, 
      behavior: "smooth",
    });
  };

  // Fungsi untuk scroll ke kanan
  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 150, 
      behavior: "smooth",
    });
  };

  // Fungsi untuk menangani perubahan input pencarian
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Fungsi untuk menangani pencarian
  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <div className="artikelpage">
      <header className="w-100 min-vh-100 d-flex align-items-center hero-section">
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg={6}>
              <h1 className="title">Artikel</h1>
              <p className="description">
                Artikel, tips, dan checklist <br />
                menarik yang disiapkan bagi bisnis Anda
              </p>
            </Col>

            {/* Kolom Kanan - Gambar */}
            <Col lg={6} className="text-center">
              <img src={HeroImage} alt="Artikel" className="img-fluid hero-img" />
            </Col>
          </Row>

          {/* Pencarian */}
          <Row className="mt-4">
            <Col>
              <InputGroup className="search-bar">
                <Form.Control placeholder="Pencarian" aria-label="Pencarian" value={searchQuery} onChange={handleSearchChange} />
                <Button variant="light" onClick={handleSearch}>
                  <BsSearch style={{ color: "#6f42c1" }} />
                </Button>
              </InputGroup>
            </Col>
          </Row>

          {/* Kategori dengan Scroll */}
          <Row className="mt-3">
            <Col>
              <div className="d-flex align-items-center">
                <Button variant="light" className="me-2" onClick={scrollLeft}>
                  <BsChevronLeft />
                </Button>
                <div className="category-scroll d-flex align-items-center" ref={scrollRef}>
                  {categories.map((category, index) => (
                    <Button key={index} variant={index === 0 ? "primary" : "light"} className={index === 0 ? "text-white fw-bold mx-2" : "text-dark fw-bold mx-2"}>
                      {category}
                    </Button>
                  ))}
                </div>
                <Button variant="light" className="ms-2" onClick={scrollRight}>
                  <BsChevronRight />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default ArtikelPage;